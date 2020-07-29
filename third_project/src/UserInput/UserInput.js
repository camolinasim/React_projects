import React from "react";
import "./UserInput.css";
const UserInput = (props) => {
  return (
    <input
      className="inputStyle"
      type="text"
      onChange={props.change}
      value={props.currentName}
    ></input>
  );
};

export default UserInput;
