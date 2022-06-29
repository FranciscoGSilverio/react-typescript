import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Item = ({ task, time }: { task: string; time: string }) => {
  return (
    <div className="d-flex justify-content-center row my-3">
      <div className="card w-50">
        <div className="card-body">
          <div className="position-relative">
            <h5 className="">{task}</h5>
            <AiOutlineClose className="position-absolute top-0 end-0 cursor-pointer" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
