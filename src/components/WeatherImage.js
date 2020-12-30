import React from "react";
import Clear from "./media/Clear.png";
import Hail from "./media/Hail.png";
import HeavyCloud from "./media/HeavyCloud.png";
import HeavyRain from "./media/HeavyRain.png";
import LightCloud from "./media/LightCloud.png";
import LightRain from "./media/LightRain.png";
import Shower from "./media/Shower.png";
import Sleet from "./media/Sleet.png";
import Snow from "./media/Snow.png";
import Thunderstorm from "./media/Thunderstorm.png";

export default function WeatherImage(icon) {
  switch (icon) {
    case "lc":
      return LightCloud;
    case "sw":
      return Snow;
    case "sl":
      return Sleet;
    case "h":
      return Hail;
    case "t":
      return Thunderstorm;
    case "hr":
      return HeavyRain;
    case "lr":
      return LightRain;
    case "s":
      return Shower;
    case "hc":
      return HeavyCloud;
    case "c":
      return Clear;
    default:
      return Shower;
  }
}
