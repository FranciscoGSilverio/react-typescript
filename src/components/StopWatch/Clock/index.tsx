import React from "react";

interface Props {
  time: number | undefined;
}

const Clock = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesTen, minutesUnit] = String(minutes).padStart(2, "0");
  const [secondsTen, secondsUnit] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className="h1">{minutesTen}</span>
      <span className="h1">{minutesUnit}</span>
      <span className="h1">:</span>
      <span className="h1">{secondsTen}</span>
      <span className="h1">{secondsUnit}</span>
    </>
  );
};

export default Clock;
