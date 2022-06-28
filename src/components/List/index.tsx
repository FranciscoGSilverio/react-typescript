import React, { useState } from "react";
import Item from "./Item";

const List = ({}) => {
  const [tasks, setTasks] = useState([
    {
      task: "Matemática",
      time: "02:02:02",
    },
  ]);

  return (
    <aside>
      <h2>Today's studies</h2>

      <ul>
        {tasks.map((task: any, index: any) => {
          return <Item key={index} {...task} />;
        })}
      </ul>
    </aside>
  );
};

export default List;
