import React, { useState } from "react";
import Forms from "../components/Forms";
import List from "../components/List";
import StopWatch from "../components/StopWatch";
import { ITasks } from "../types/ITasks";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks} />
      <List tasks={tasks} />
      <StopWatch />
    </div>
  );
}

export default App;
