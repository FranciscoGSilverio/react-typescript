import React, { useEffect, useState } from "react";
import { timeToSeconds } from "../../commom/utils/date";
import { ITasks } from "../../types/ITaks";
import Button from "../Button";
import Clock from "./Clock";

interface Props {
  selected: ITasks | undefined;
  finishTask: () => void;
}

const StopWatch = ({ selected, finishTask }: Props) => {
  console.log(timeToSeconds("01:01:01"));

  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  const regressive = (counter: number = 0) => {
    console.log("Start!");

    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }

      finishTask();
    }, 1000);
  };

  return (
    <div>
      <p>Chose a card and start the stopwatch! Time: {time}</p>
      <div className="text-center">
        <Clock time={time} />
      </div>
      <div className="mt-4 text-center">
        <Button className="btn btn-danger" onClick={() => regressive(time)}>
          Start!
        </Button>
      </div>
    </div>
  );
};

export default StopWatch;
