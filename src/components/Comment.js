import React from "react";
import Card from "../UI/Card";

import classes from "./Comment.module.css";

const Comment = (props) => {
  return (
    <Card>
      <div className={classes.container}>
        <h2>{props.author}</h2>
        <span>{props.description}</span>
        <p>«{props.comment}»</p>
      </div>
    </Card>
  );
};

export default Comment;
