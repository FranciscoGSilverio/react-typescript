import React, { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";
import StopWatch from "./components/StopWatch";
import { ITasks } from "./types/ITaks";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([]);
  const [selected, setSelected] = useState<ITasks>();

  const selectTask = (selectedTask: ITasks) => {
    setSelected(selectedTask);

    setTasks((prevTasks) =>
      prevTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  };

  const finishTask = () => {
    if (selected) {
      setSelected(undefined);

      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }

          return task;
        })
      );
    }
  };

  useEffect(() => console.log(selected), [selected]);

  return (
    <div className="d-flex justify-content-around mt-5">
      <div className="col-sm-auto">
        <div className="flex-column">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mt-2 mb-5">
                Enter your activities for today
              </h5>
              <div className="row align-items-center">
                <Form setTasks={setTasks} tasks={tasks} />
              </div>
            </div>
          </div>

          <div className="card my-5">
            <div className="card-body">
              <h5 className="card-title">Clock</h5>
              <div className="row">
                <StopWatch selected={selected} finishTask={finishTask} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <List tasks={tasks} selectTask={selectTask} />
      </div>
    </div>
  );
}

export default App;
