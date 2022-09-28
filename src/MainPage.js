import React, { useState, useEffect, useCallback } from "react";

import classes from "./MainPage.module.css";
import Advertisement from "./components/Advertisement";
import VideosListPaginated from "./components/VideosListPaginated";

const API_URL = "http://fe-dev-offer.herokuapp.com";

function MainPage() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideosHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/list`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedVideos = [];

      for (const key in data) {
        loadedVideos.push({
          id: data[key].id,
          image: data[key].image,
          title: data[key].title,
          description: data[key].description,
          text: data[key].text,
          detail: data[key].detail,
        });
      }

      setVideos(loadedVideos);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchVideosHandler();
  }, [fetchVideosHandler]);

  let content = <div className={classes.content}>Found no movies.</div>;

  if (videos.length > 0) {
    content = <VideosListPaginated videos={videos} itemsPerPage={6} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <h2>Наши видео</h2>
      <div className={classes.mainPage}>
        <section className={classes.content}>
          <div>{content}</div>
        </section>
        <section className={classes.advertisement}>
          <Advertisement />
        </section>
      </div>
    </>
  );
}

export default MainPage;
