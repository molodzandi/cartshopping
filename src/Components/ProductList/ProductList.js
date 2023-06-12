import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        {this.props.products.map((p, index) => {
          return (
            <Product
              title={p.title}
              price={p.price}
              quantity={p.quantity}
              key={index}
              onRemove={() => this.props.deleteHandler(p.id)}
              onDecrement={()=>this.props.decrementHandler(p.id)}
              onIncrement={()=>this.props.incrementHandler(p.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
