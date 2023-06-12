import React, { Component } from "react";
import ProductList from "./Components/ProductList/ProductList";

class App extends Component {
  state = {
    products: [
      { title: "Gas Hob", price: "99 $", quantity: 5, id: 1 },
      { title: "Hood", price: "89 $", quantity: 4, id: 2 },
      { title: "Sink", price: "79 $", quantity: 3, id: 3 },
    ],
  };
  onDelete = (id) => {
    console.log("ID :", id);
    const filteredProducts = this.state.products.filter(
      (item) => item.id !== id
    );
    this.setState({ products: filteredProducts });
  };
  onDec = (id) => {
    const products = [...this.state.products];
    const finded = products.find((p) => p.id === id);
    if (finded.quantity === 1) {
      this.onDelete(id);
    } else {
      finded.quantity--;

      this.setState({ products });
    }
  };
  onInc = (id) => {
    const products = [...this.state.products];
    const findedItem = products.find((p) => p.id === id);
    findedItem.quantity++;
    this.setState({ products });
  };
  render() {
    if (!this.state.products.length)
      return "Go To Shopping There Is No Product In Cart";
    return (
      <ProductList
        products={this.state.products}
        deleteHandler={this.onDelete}
        decrementHandler={this.onDec}
        incrementHandler={this.onInc}
      />
    );
  }
}

export default App;
