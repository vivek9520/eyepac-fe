import React from "react";
import "./../slide.css";
import leftArrow from "../images/left-arrow.svg";
import rightArrow from "../images/right-arrow.svg";

export default function ({ direction, moveSlide }) {
  return (
    <div>
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img src={direction === "next" ? rightArrow : leftArrow} alt="arrow" />
      </button>
    </div>
  );
}
