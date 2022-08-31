import React, { useContext, useEffect } from "react";
import { idText } from "typescript";
import { AppContext } from "../../../contexts/AppContext";
import style from "./Watch.module.scss";

const Clock = () => {
  const { time } = useContext(AppContext);

  useEffect(() => {
    const hours = Array.of(time[0], time[1]);
    const minutes = Array.of(time[3], time[4]);
    const seconds = Array.of(time[6], time[7]);

    let intHour = parseInt(hours[1]);
    let minutesTen = parseInt(minutes[0]);
    let minutesUnit = parseInt(minutes[1]);
    let secondsTen = parseInt(seconds[0]);
    let secondsUnit = parseInt(seconds[1]);

    if (intHour > 0) {
      minutesTen = minutesTen + intHour * 60;
    }
  }, [time]);

  return (
    <>
      <span className={style.relogioNumero}></span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </>
  );
};

export default Clock;
