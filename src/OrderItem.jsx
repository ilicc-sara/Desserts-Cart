import React, { useState } from "react";

function OrderItem(props) {
  const { name, price, amount, id } = props;
  const totalPrice = Number(amount) * Number(price);
  return (
    <article class="order-item">
      <p>{name}</p>
      <div class="cart-item-info">
        <span>{amount}X</span>
        <span>@ ${price.toFixed(2)}</span>{" "}
        <span>$ {totalPrice.toFixed(2)}</span>
      </div>

      {/* <button class="delete-btn" onClick={() => deleteCartItem(id)}>
        X
      </button> */}
    </article>
  );
}

export default OrderItem;
