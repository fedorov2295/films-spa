import React from "react";

import VideoItem from "./VideoItem";
import classes from "./VideosList.module.css";

const VideosList = (props) => {
  return (
    <>
      <ul className={classes["videos-list"]}>
        {props.videos &&
          props.videos.map((video) => (
            <VideoItem
              key={video.id}
              id={video.id}
              title={video.title}
              image={video.image}
              description={video.description}
              text={video.text}
              detail={video.detail}
            />
          ))}
      </ul>
    </>
  );
};

export default VideosList;
