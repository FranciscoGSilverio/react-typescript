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
