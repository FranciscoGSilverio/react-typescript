import React, { FormEvent, useState } from "react";
import { ITasks } from "../../types/ITaks";
import Button from "../Button";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
  tasks: ITasks[] | [];
}

const Form = ({ setTasks, tasks }: Props) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  const addTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTasks((prevTasks) => [
      ...prevTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);

    setTask("");
    setTime("00:00");
  };

  return (
    <form onSubmit={addTask}>
      <div className="form-group my-1">
        <label htmlFor="task">Subject </label>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="Enter the subject..."
          className="form-control"
          value={task}
          onChange={(event) => setTask(event.currentTarget.value)}
        />
      </div>

      <div className="form-group my-1">
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          id="time"
          name="time"
          min="00:00:00"
          max="1:30:00"
          className="form-control"
          value={time}
          onChange={(event) => setTime(event.currentTarget.value)}
          required
        />
      </div>

      <div className="mt-4 text-center">
        <Button type="submit" className="btn btn-success">
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default Form;
