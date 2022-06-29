import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";
import StopWatch from "./components/StopWatch";
import { ITasks } from "./types/ITaks";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([
    {
      task: "Matemática",
      time: "02:02:02",
    },
  ]);
  const[selected, setSelected] = useState<ITasks>();

  const selectTask = (selectedTask: ITasks) => {
    setSelected(selectedTask);
  }

  return (
    <div className="d-flex justify-content-around mt-5">
      <div className="flex-column">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title mt-2 mb-5">
              Enter your activities for today
            </h5>
            <div className="row align-items-center">
              <Form setTasks={setTasks} />
            </div>
          </div>
        </div>

        <div className="card my-5">
          <div className="card-body">
            <h5 className="card-title">Clock</h5>
            <div className="row">
              <StopWatch />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <List tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
