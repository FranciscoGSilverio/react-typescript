import React, { FormEvent } from "react";
import Button from "../Button";

class Form extends React.Component {
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
    console.log("state: ", this.state);
  }

  render() {
    return (
      <form onSubmit={this.addTask.bind(this)}>
        <div>
          <label htmlFor="task">Subject </label>
          <input
            type="text"
            id="task"
            name="task"
            placeholder="Enter the subject..."
            value={this.state.task}
            onChange={(event) => this.changeHandler(event)}
          />
        </div>
        <div>
          <label htmlFor="time"></label>
          <input
            type="time"
            step="1"
            id="time"
            name="time"
            min="00:00:00"
            max="1:30:00"
            value={this.state.time}
            onChange={(event) => this.changeHandler(event)}
            required
          />
        </div>
        <Button>Add</Button>
      </form>
    );
  }
}

export default Form;
