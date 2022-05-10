import React from "react";
import style from "../List.module.scss"

const Item = ({task, time}: {task: String, time: String}) => {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Item;
