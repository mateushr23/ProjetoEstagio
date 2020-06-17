import React, { Component } from "react";


import EmailCliente from "./clienteEmail";

class Email extends Component{
state = {
    email: '',
  };

  setEmail = (novoEmail) => {
    this.setState({
      email: novoEmail,
    });
  };

  render() {
    return (
      <div className="clienteEmail">
        
        <EmailCliente
          setEmail = {this.setEmail}
        ></EmailCliente>
        
      </div>
    )
  }
}
export default Email