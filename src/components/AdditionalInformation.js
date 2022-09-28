import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AdditionalInformation.module.css";

const AdditionalInformation = (props) => {
  return (
    <Card>
      <div className={classes.container}>
        <Card>
          <img
            src={props.data.image}
            alt={props.title}
            width="232px"
            height="345.5px"
          />
        </Card>
        <div>
          <h3>{props.data.title}</h3>
          <div className={`${classes.labels} ${classes.blocks}`}>
            {props.data.labels.fullhd && (
              <span className={classes.label}>Full HD</span>
            )}
            {props.data.labels.subtitles && (
              <span className={classes.label}>СУБ</span>
            )}
            {props.data.labels.age_restrictions && (
              <span className={classes.label}>
                {props.data.labels.age_restrictions}
              </span>
            )}
          </div>
          <ul className={`${classes.production} ${classes.blocks}`}>
            {props.data.production.year && (
              <li className={classes.prodInfo}>{props.data.production.year}</li>
            )}
            {props.data.production.country && (
              <li className={classes.prodInfo}>
                {props.data.genre}, {props.data.production.country}
              </li>
            )}
            <li className={classes.prodInfo}>8 серий</li>
          </ul>
          <div className={`${classes.production} ${classes.blocks}`}>
            {props.data.labels.fullhd && (
              <span className={classes.mark}>КИНОПОИСК 7,1</span>
            )}
          </div>
          <div className={classes.buttonBlocks}>
            <div className={classes.buttonBlock}>
              <Button
                color="blue"
                innerText="СМОТРЕТЬ"
                additionalText="осталось смотреть 7 дней"
              />
            </div>
            <div className={classes.buttonBlock}>
              <Button color="green" innerText="СМОТРЕТЬ за 1 ₽ без рекламы" />
            </div>
          </div>
          <div className={classes.iconBlocks}>
            <Button className={classes.double} innerText="ТРЕЙЛЕР" />
            <Button className={classes.circle} innerText="" />
            <Button className={classes.circle} innerText="" />
            <Button className={classes.circle} innerText="" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdditionalInformation;
