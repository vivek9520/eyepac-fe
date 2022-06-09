import React, { Component } from "react";

import axios from "axios";
import Title from "./Title";
import SubTitle from "./SubTitle";
import ArrowButton from "./ArrowButton";

import "../slide.css";

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slidesCount: props.slides,
      infinite: props.infinite,
      data: [],
      currentIndex: 0,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/carousel?slides=${this.state.slidesCount}`
      );
      this.setState({
        data: response.data.data,
      });
    } catch (error) {}
  }

  nextSlide = () => {
    if (this.state.currentIndex < this.state.data.length) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      });
    } else {
      this.setState({
        currentIndex: 0,
      });
    }
    console.log(this.state);
  };

  prevSlide = () => {
    if (this.state.currentIndex < 0) {
      this.setState({
        currentIndex: this.state.data.length,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
      });
    }
  };

  render() {
    return (
      <div className="container-slider">
        {this.state.data.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                this.state.currentIndex === index
                  ? "slide active-anim"
                  : "slide"
              }
            >
              <div className="container">
                <img src={obj.image} alt="img" />
                <Title title={obj.title} />
                <SubTitle subtitle={obj.subtitle} />
              </div>
            </div>
          );
        })}
        {this.state.slidesCount === 1 ? (
          ""
        ) : (
          <div>
            <ArrowButton moveSlide={this.nextSlide} direction={"next"} />
            <ArrowButton moveSlide={this.prevSlide} direction={"prev"} />
          </div>
        )}
      </div>
    );
  }
}
