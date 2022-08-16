import Item from "./Item";
import style from "./List.module.scss";
import Task from "../../Models/taskModel";

const List = ({ tasks }: { tasks: Task[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Today's studies:</h2>
      <ul>
        {tasks.map((info, index) => (
          <Item key={index} name={info.name} time={info.time} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
