import React from "react";
import { ITasks } from "../../types/ITasks";
import Button from "../Button";
import style from "./Forms.module.scss";

class Forms extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
}> {
  state = {
    task: "",
    time: "00:00:00",
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks((previousTask) => [...previousTask, { ...this.state }]);
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add a new study</label>
          <input
            type="text"
            name="task"
            onChange={(event) => {
              this.setState({ ...this.state, task: event.target.value });
            }}
            id="task"
            placeholder="What do you want to study?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            step="1"
            name="time"
            value={this.state.time}
            onChange={(event) => {
              this.setState({ ...this.state, time: event.target.value });
            }}
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
    );
  }
}

export default Forms;
