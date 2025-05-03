import React, { useState } from "react";

function CartItem(props) {
  const { name, price, amount, id, setCartItems } = props;
  const totalPrice = Number(amount) * Number(price);

  function deleteCartItem(id) {
    setCartItems((previous) => previous.filter((item) => item.id !== id));
  }
  return (
    <article data-id={id} class="cart-item">
      <p>{name}</p>
      <div class="cart-item-info">
        <span>{amount}X</span>
        <span>@ ${price.toFixed(2)}</span>{" "}
        <span>$ {totalPrice.toFixed(2)}</span>
      </div>

      <button class="delete-btn" onClick={() => deleteCartItem(id)}>
        X
      </button>
    </article>
  );
}

export default CartItem;
