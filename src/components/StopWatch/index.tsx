import React from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from "./StopWatch.module.scss";

const StopWatch = () => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the stop watch</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Start!</Button>
    </div>
  );
};

export default StopWatch;
