import { useEffect, useState } from "react";
import CityList from "../components/CityList";

function Cities() {
  const API_URL = "http://riotkr.mockable.io/weather-crawlers/cities"

  const [cityState, setCityState] = useState([]);

  useEffect(() => {
    console.log("cities component mounted!");

    getCities();
  }, []); // once

  async function getCities(){
    const cities = await fetch(API_URL).then((res)=>res.json());
    console.log(cities);
    setCityState(cities);
  }
  const [color, setColor] = useState({ color: "black" });

  const handleClick = (event) => {
    const getStyleAttr = event.target.getAttribute("style");
    const message = document.getElementById("message");

    let sliceColor = getStyleAttr.split(";");

    sliceColor = sliceColor[0].split(":");

    const messageColor = message.getAttribute("style");

    if (messageColor === getStyleAttr) {
      setColor({ color: "black" });
    } else {
      setColor({ color: sliceColor[1] });
    }
  };

  return (
    <div>
      <h1>Cities</h1>
      
      <button onClick={handleClick} style={{ color: "red" }}>
        Red
      </button>
      <button onClick={handleClick} style={{ color: "green" }}>
        Green
      </button>
      <button onClick={handleClick} style={{ color: "blue" }}>
        Blue
      </button>
      <button onClick={handleClick} style={{ color: "grey" }}>
        Grey
      </button>
      <p>{API_URL}</p>
      <h2 id="message" style={color}>
        <CityList cities={cityState}/>
      </h2>
      
    </div>
  );
}
export default Cities;