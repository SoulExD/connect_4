import React from "react";
import { CellProps } from "../interface/types";
import "../App.css";

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <div className="cell" onClick={onClick}>
      <div className={`disc  ${value ? value.toLowerCase() : ""}`}></div>
    </div>
  );
};

export default Cell;
