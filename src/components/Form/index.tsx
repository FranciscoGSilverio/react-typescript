import React, { FormEvent } from "react";
import { ITasks } from "../../types/ITaks";
import Button from "../Button";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
}> {
  state = {
    task: "",
    time: "",
  };

  changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.props.setTasks((tasks) => [...tasks, { ...this.state }]);

    this.setState({
      task: "",
      time: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.addTask.bind(this)}>
        <div className="form-group my-1">
          <label htmlFor="task">Subject </label>
          <input
            type="text"
            id="task"
            name="task"
            placeholder="Enter the subject..."
            className="form-control"
            value={this.state.task}
            onChange={(event) => this.changeHandler(event)}
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
            value={this.state.time}
            onChange={(event) => this.changeHandler(event)}
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
  }
}

export default Form;
