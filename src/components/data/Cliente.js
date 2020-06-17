import React, { Component } from "react";

import Dados from './Dados'

class Cliente extends Component{
state = {
    nome: '',
  };

  setNome = (novoNome) => {
    this.setState({
      nome: novoNome,
    });
  };

  render() {
    return (
      <div className="Cliente">
        
        <Dados
          setNome = {this.setNome}
        ></Dados>
        
      </div>
    )
  }
}
export default Cliente