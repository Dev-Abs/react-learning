import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.title}{" "}
          <span className="badge bg-secondary">${props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger" onClick={()=>{props.decrementQuantity(props.index)}}>
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity > 0 ? props.product.quantity : 0}
          </button>
          <button type="button" className="btn btn-success" onClick={()=>{props.incrementQuantity(props.index)}}>
            +
          </button>
        </div>
      </div>

        <div className="col-2">
            {props.product.quantity ? `$${props.product.quantity * props.product.price}` : 0 }
            </div>
            <button className="col-2 btn btn-danger" onClick={()=>{props.removeProduct(props.index); props.itemsInCartRemove()}}>Remove</button>
    </div>
  );
}
