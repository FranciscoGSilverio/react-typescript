import React from "react";

const Item = ({task, time} : {task:string, time:string}) => {
  return (
    <li>
      <h1>{task}</h1>
      <span>{time}</span>
    </li>
  );
};

export default Item;
