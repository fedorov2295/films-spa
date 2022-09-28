import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  let classList = [classes.button, props.className];

  if (props.color === "blue") {
    classList.push(classes.blue);
  } else if (props.color === "green") {
    classList.push(classes.green);
  } else if (props.color === "error") {
    classList.push(classes.error);
  } else {
    classList.push(classes.grey);
  }

  return (
    <button className={classList.join(" ")} type={props.type || "button"}>
      {props.innerText}
      {props.additionalText && (
        <span className={classes.additionalText}>{props.additionalText}</span>
      )}
    </button>
  );
};

export default Button;
