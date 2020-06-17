import React, { Component } from "react";
import util from "../util";
import "./Products.css";

export default class Products extends Component {
  renderProdutos = () => {
    return this.props.products.map((product) => (
      <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12" key={product.id}>
        <div className="thumbnail">
          <a
            href={`#${product.id}`}
            onClick={(e) => this.props.handleAddToCart(e, product)}
          >
            <img
              src={`/products/${product.sku}.jpeg`}
              alt={product.title}
            ></img>
            <p>{product.title}</p>
          </a>
          <div>
            <b>{util.formatCurrency(product.price)}</b>
            <div className="button">
              <button
                className="btn"
                onClick={(e) => this.props.OnAddToCart(e, product)}
              >
                <span className="glyphicon glyphicon-shopping-cart"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    const Produtos = this.renderProdutos;
    return (
      <div className="row">
        <Produtos />
      </div>
    );
  }
}
