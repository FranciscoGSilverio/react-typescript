import { parse } from "path";
import Item from "../components/List/Item";
import Task from "../Models/taskModel";

export function updateTasks(selectedTask: Task, tasks: Task[]): Task[] {
  return tasks.map((task, index) => {
    if (selectedTask.name === task.name) {
      return selectedTask;
    } else {
      return task.selected ? task.deselect() : task;
    }
  });
}

export const deleteTask = (selectedTask: Task, tasks: Task[]): Task[] => {
  let deleteIndex = 0;
  tasks.map((task, index) => {
    if (selectedTask.name === task.name) {
      return (deleteIndex = index);
    }
  });
  console.log("deletando o item na posição: " + deleteIndex);
  console.log(tasks);
  console.log(tasks[deleteIndex]);
  tasks.splice(deleteIndex, 1);

  return tasks;
};

const hoursToMinutes = (hours: string): number => {
  const intHour = parseInt(hours);

  if (intHour !== 0) {
    return intHour * 60;
  } else return 0;
};

export const timeConverter = (clickedTaskTime: string): number[] => {
  const timeArr = clickedTaskTime.split(":");

  const hours = hoursToMinutes(timeArr[0]);
  const minutes = parseInt(timeArr[1]);
  const seconds = parseInt(timeArr[2]);

  const clockTime = [hours + minutes, seconds];

  return clockTime;
};
