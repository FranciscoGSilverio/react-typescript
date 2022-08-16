import Button from "../Button";
import style from "./Forms.module.scss";
import { useState } from "react";
import { ITasks } from "../../types/ITasks";

interface props {
  submit: (newTask: ITasks) => void;
}

const Forms = ({ submit }: props) => {
  const [taskInfo, setTaskInfo] = useState({
    name: "",
    time: "00:00:00",
  });
  const create = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(taskInfo);
    setTaskInfo({
      name: "",
      time: "00:00:00",
    });
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInfo({
      ...taskInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className={style.novaTarefa} onSubmit={(event) => create(event)}>
      <div className={style.inputContainer}>
        <label htmlFor="name">Add a new study</label>
        <input
          type="text"
          name="name"
          id="task"
          placeholder="What do you want to study?"
          required
          onChange={(event) => changeHandler(event)}
          value={taskInfo.name}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
          onChange={(event) => changeHandler(event)}
          value={taskInfo.time}
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default Forms;
