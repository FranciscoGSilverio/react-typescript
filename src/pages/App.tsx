import { useState } from "react";
import Forms from "../components/Forms";
import List from "../components/List";
import StopWatch from "../components/StopWatch";
import style from "./App.module.scss";
import Task from "../Models/taskModel";
import { AppContextProvider } from "../contexts/AppContext";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <AppContextProvider>
      <div className={style.AppStyle}>
        <Forms
          submit={(newTask) =>
            setTasks([...tasks, new Task(newTask.name, newTask.time)])
          }
        />

        <List tasks={tasks} setTasks={setTasks} />

        <StopWatch />
      </div>
    </AppContextProvider>
  );
}

export default App;
