import React from "react";

import adImg from "../assets/img/golos.jpeg";
import classes from "./Advertisement.module.css";

const Advertisement = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <img src={adImg} alt="Ad" />
    </div>
  );
};

export default Advertisement;
