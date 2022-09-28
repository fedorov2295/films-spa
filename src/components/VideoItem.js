import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../UI/Card";

import classes from "./VideoItem.module.css";

const VideoItem = (props) => {
  return (
    <li className={classes.video}>
      <NavLink to={`/video/${props.id}`}>
        <Card>
          <img src={props.image} alt={props.title} />
          <div className={classes.text}>
            <p>{props.text}</p>
            <button className={classes.button}>Смотреть</button>
          </div>
        </Card>
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
      </NavLink>
    </li>
  );
};

export default VideoItem;
