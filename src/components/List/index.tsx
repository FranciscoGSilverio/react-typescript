import React from "react";
import { ITasks } from "../../types/ITaks";
import Item from "./Item";

interface Props {
  tasks: ITasks[];
  selectTask: (selectedTask: ITasks) => void;
}

const List = ({ tasks, selectTask }: Props) => {
  return (
    <aside className="text-center">
      <h5 className="mb-3">Today's studies</h5>

      <div>
        {tasks.map((task: any, index: any) => {
          return <Item key={index} selectTask={selectTask} {...task} />;
        })}
      </div>
    </aside>
  );
};

export default List;
