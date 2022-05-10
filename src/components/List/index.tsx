import React from "react";
import { ITasks } from "../../types/ITasks";
import Item from "./Item";
import style from "./List.module.scss";

const List = ({ tasks }: { tasks: ITasks[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Today's studies:</h2>
      <ul>
        {tasks.map((info, index) => (
          <Item key={index} {...info} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
