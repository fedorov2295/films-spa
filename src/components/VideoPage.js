import React, { useState, useEffect, useCallback } from "react";
import { NavLink, useParams } from "react-router-dom";
import AdditionalInformation from "./AdditionalInformation";
import Advertisement from "./Advertisement";
import Comment from "./Comment";
import NewComment from "./NewComment";
import classes from "./VideoPage.module.css";

const API_URL = "http://fe-dev-offer.herokuapp.com";

const VideoPage = (props) => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);

  const fetchInfoHandler = useCallback(async () => {
    setError(null);
    try {
      const infoResponse = await fetch(`${API_URL}/item/${id}`);
      const commentsResponse = await fetch(`${API_URL}/comments/${id}`);
      if (!infoResponse.ok || !commentsResponse.ok) {
        throw new Error("Something went wrong!");
      }

      const infoData = await infoResponse.json();
      const commentsData = await commentsResponse.json();

      setInfo(infoData);
      setComments(commentsData);
    } catch (error) {
      setError(error.message);
    }
  }, [id]);

  useEffect(() => {
    fetchInfoHandler();
  }, [fetchInfoHandler]);

  let content = <div className={classes.content}>No additional Info</div>;

  if (info) {
    content = <AdditionalInformation data={info} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <>
      <div className={classes.headings}>
        <h2>Выбранное видео</h2>
        <NavLink className={classes.linkBack} to="/">
          Все видео
        </NavLink>
      </div>
      <div className={classes.videoPage}>
        <section className={classes.content}>
          {content}
          {comments &&
            comments.comments.map((comment) => {
              return (
                <Comment
                  key={comment.comment}
                  author={comment.author}
                  comment={comment.comment}
                  description={comment.description}
                />
              );
            })}
          <NewComment id={id} />
        </section>
        <section className={classes.advertisement}>
          <Advertisement className={classes.videoPageAd} />
        </section>
      </div>
    </>
  );
};

export default VideoPage;
