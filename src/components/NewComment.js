import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./NewComment.module.css";

const API_URL = "http://fe-dev-offer.herokuapp.com";

const NewComment = (props) => {
  const [error, setError] = useState(null);
  const [buttonColor, setButtonColor] = useState("blue");
  const [buttonText, setuttonText] = useState("отправить");
  const nameRef = useRef("");
  const cityRef = useRef("");
  const textRef = useRef("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const comment = {
      name: nameRef.current.value,
      city: cityRef.current.value,
      text: textRef.current.value,
    };
    try {
      const response = await fetch(`${API_URL}/comments/post/${props.id}`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setButtonColor("green");
      setuttonText("успешно");
    } catch (error) {
      setError(error.message);
      setButtonColor("error");
      setuttonText("произошла ошибка");
    }
  };

  return (
    <div>
      <h2 className={classes.firstHeader}>Оствьте комментарий</h2>
      <h3 className={classes.secondHeader}>Что вы думаете об этом видео?</h3>
      <Card>
        <form className={classes.container} onSubmit={formSubmitHandler}>
          <div className={classes.formBlock}>
            <label htmlFor="name">Фамилия и имя</label>
            <input required id="name" ref={nameRef} />
          </div>
          <div className={classes.formBlock}>
            <label htmlFor="city">Город</label>
            <input required id="city" ref={cityRef} />
          </div>
          <div className={classes.formBlock}>
            <label htmlFor="opinion">Ваше мнение</label>
            <textarea id="opinion" ref={textRef} />
          </div>
          <Button type="submit" color={buttonColor} innerText={buttonText} />
        </form>
      </Card>
    </div>
  );
};

export default NewComment;
