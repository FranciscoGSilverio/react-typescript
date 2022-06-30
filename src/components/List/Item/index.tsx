import React from "react";
import { AiOutlineClose, AiOutlineCheckCircle } from "react-icons/ai";
import { ITasks } from "../../../types/ITaks";

interface Props extends ITasks {
  selectTask: (selectedTask: ITasks) => void;
}

const Item = ({ task, time, selected, completed, id, selectTask }: Props) => {
  return (
    <div className="d-flex justify-content-center row my-3">
      <div
        className="card w-50"
        style={{
          border: `${
            !selected ? (!completed ? "" : "3px solid") : "3px solid"
          }`,
          borderColor: `${
            selected === true ? "blue" : completed === true ? "green" : "black"
          }`,
        }}
        onClick={() =>
          !completed && selectTask({ task, time, selected, completed, id })
        }
      >
        <div className="card-body">
          <div className="position-relative">
            <h5 className="">
              {task}{" "}
              {completed && (
                <span className="text-success">
                  <AiOutlineCheckCircle className="pb-1" />
                </span>
              )}
            </h5>
            <span style={{ cursor: "pointer" }}>
              <AiOutlineClose className="position-absolute top-0 end-0" />
            </span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
