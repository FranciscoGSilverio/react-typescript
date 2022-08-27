import Item from "./Item";
import style from "./List.module.scss";
import Task from "../../Models/taskModel";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { deleteTask, updateTasks } from "../../functions/listFunctions";

const List = ({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const { selectedTask, setSelectedTask } = useContext(AppContext);

  return (
    <aside className={style.listaTarefas}>
      <h2>Today's studies:</h2>
      <ul>
        {tasks.map((info, index) => (
          <Item
            key={index}
            task={info}
            onSelect={(clickedTask: Task) =>
              setTasks(updateTasks(clickedTask, tasks))
            }
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
