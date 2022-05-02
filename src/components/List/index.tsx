import React from "react";

const List = () => {
  const tasks = [
    {
      task: "Matemática",
      time: "00:30:00",
    },
    {
      task: "Português",
      time: "01:30:00",
    },
    {
      task: "React",
      time: "10:00:00",
    },
  ];

  return (
    <aside>
      <h2>Today's studies:</h2>
      <ul>
        {tasks.map((info, index) => (
          <li key={index}>
            <h3>{info.task}</h3>
            <span>{info.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
