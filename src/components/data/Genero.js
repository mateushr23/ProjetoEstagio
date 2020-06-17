import React, { Component } from "react";
import "./genero.css";

export default class Genero extends Component {
  render() {
    return (
      <label>
        Sexo:
        <select className="form">
          <option value="">Selecione</option>
          <option value="">Masculino</option>
          <option value="">Feminino</option>
        </select>
      </label>
    );
  }
}
