import React, { Component } from "react";
import "./App.css";
import Basket from "./components/Basket";
import Cliente from "./components/data/Cliente";
import Email from "./components/data/Email";
import Genero from "./components/data/Genero";
import Products from "./components/Products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], cartItems: [] };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }
  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          products: data,
          filteredProducts: data,
        })
      );
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems")),
      });
    }
  }

  handleAddToCart(e, product) {
    const { cartItems } = this.state;
    const item = cartItems.filter((item) => item.id === product.id).shift();
    if (item) {
      item.count++;
    } else {
      cartItems.push({ ...product, count: 1 });
    }

    this.setState({
      cartItems: cartItems,
    });
  }

  handleRemoveFromCart(e, item) {
    this.setState((state) => {
      const cartItems = state.cartItems.filter((elm) => elm.id !== item.id);
      localStorage.setItem("cartItems", cartItems);
      return { cartItems };
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Produtos</h2>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Products
              products={this.state.filteredProducts}
              OnAddToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md-4">
            <Basket
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
            ></Basket>
          </div>
        </div>
        <h4>Dados do Cliente</h4>
        <hr />
        <div className="dados">
          <div className="col-md-3">
            <Cliente />
          </div>
          <div className="col-md-3">
            <Email />
          </div>
          <div className="col-md-3">
            <Genero />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
