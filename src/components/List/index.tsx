import React from "react";
import { ITasks } from "../../types/ITaks";
import Item from "./Item";

const List = ({ tasks }: { tasks: ITasks[] }) => {
  return (
    <aside className="text-center">
      <h5 className="mb-3">Today's studies</h5>

      <div>
        {tasks.map((task: any, index: any) => {
          return <Item key={index} {...task} />;
        })}
      </div>
    </aside>
  );
};

export default List;
