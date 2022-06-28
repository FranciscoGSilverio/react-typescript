import React from "react";
import Button from "../Button";
import Clock from "./Clock";

const StopWatch = () => {
  return (
    <div>
      <p>Chose a card and start the stopwatch!</p>
      <div>
        <Clock />
      </div>
      <Button>Start</Button>
    </div>
  );
};

export default StopWatch;
