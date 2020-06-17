import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="">Nome: </label>
      <input
        id="nomeInput"
        type="string"
        value = {props.nome}
        onChange={(e) => props.setNome(e.target.value)}
      ></input>
    </div>
  );
};
