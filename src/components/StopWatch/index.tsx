import React from "react";
import Button from "../Button";
import Clock from "./Clock";

const StopWatch = () => {
  return (
    <div>
      <p>Chose a card and start the stopwatch!</p>
      <div className="text-center" >
        <Clock />
      </div>
      <div className="mt-4 text-center">
        <Button className="btn btn-danger">Start!</Button>
      </div>
    </div>
  );
};

export default StopWatch;
