import React from "react";
import style from "./List.module.scss";

const List = () => {
  const tasks = [
    {
      task: "Matemática",
      time: "00:30:00",
    },
    {
      task: "Português",
      time: "01:30:00",
    },
    {
      task: "React",
      time: "10:00:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Today's studies:</h2>
      <ul>
        {tasks.map((info, index) => (
          <li key={index} className={style.item}>
            <h3>{info.task}</h3>
            <span>{info.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
