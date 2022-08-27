import Task from "../../../Models/taskModel";
import style from "../List.module.scss";

const Item = ({
  task,
  onSelect,
  onDelete,
}: {
  task: Task;
  onSelect: (clickedTask: Task) => void;
  onDelete: (clickedTask: Task) => void;
}) => {
  const selectHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.preventDefault();

    onSelect(task.select());
    console.log("Task clicked");
  };

  const deleteHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    onDelete(task.delete());
    console.log("DeleteTask");
  };

  return (
    <li
      className={`${style.item} ${task.selected && style.itemSelecionado}`}
      onClick={(event) => selectHandler(event)}
    >
      <i onClick={(event) => deleteHandler(event)}>X</i>
      <h3>{task.name}</h3>
      <span>{task.time}</span>
    </li>
  );
};

export default Item;
