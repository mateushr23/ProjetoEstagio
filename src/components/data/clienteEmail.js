import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="">Email: </label>
      <input
        id="emailInput"
        type="string"
        value = {props.email}
        onChange={(e) => props.setEmail(e.target.value)}
      ></input>
    </div>
  );
};
