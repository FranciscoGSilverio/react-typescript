import Item from "./Item";
import style from "./List.module.scss";
import Task from "../../Models/taskModel";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import {
  deleteTask,
  updateTasks,
  timeConverter,
} from "../../functions/listFunctions";

const List = ({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const { setTime } = useContext(AppContext);

  return (
    <aside className={style.listaTarefas}>
      <h2>Today's studies:</h2>
      <ul>
        {tasks.map((info, index) => (
          <Item
            key={index}
            task={info}
            onSelect={(clickedTask: Task) => {
              setTime(clickedTask.time);

              //setTime(clickedTask.time.split(":"));
              setTasks(updateTasks(clickedTask, tasks));
            }}
            onDelete={(clickedTask: Task) =>
              setTasks(deleteTask(clickedTask, tasks))
            }
          />
        ))}
      </ul>
    </aside>
  );
};

export default List;
