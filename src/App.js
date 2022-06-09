import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel slides="4" infinite="true" />
      <Carousel slides="1" infinite="true" />
      <Carousel slides="10" infinite="true" />
    </div>
  );
}

export default App;
