import React, { Component } from "react";
import util from "../util";
import "./Basket.css";

export default class Basket extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="body">
        <div className="checkout">
          {cartItems.length === 0 ? (
            "Carrinho vazio :("
          ) : (
            <div> Você tem {cartItems.length} produto(s) no carrinho.</div>
          )}
          {cartItems.length > 0 && (
            <div>
              <ul>
                {cartItems.map((item) => (
                  <li>
                    <b>{item.title}</b> x {item.count} ={" "}
                    {item.price * item.count}
                    <button
                      className="btn-danger"
                      onClick={(e) => this.props.handleRemoveFromCart(e, item)}
                    >
                      <span className="glyphicon glyphicon-trash"></span>
                    </button>
                  </li>
                ))}
              </ul>
              Total:{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
              <button
                className="btn"
                onClick={() => alert("Checkout needs to be implemented...")}
              >
                Finalizar Compra
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
