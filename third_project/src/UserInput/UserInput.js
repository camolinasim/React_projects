import React from "react";

const UserInput = (props) => {
  return <input type="text" onChange={props.change}></input>;
};

export default UserInput;
