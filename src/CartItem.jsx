import React, { useState } from "react";

function CartItem(props) {
  const { name, price, amount, totalPrice, id } = props;
  return (
    <article class="cart-item">
      <p>Waffle with Berries</p>
      <div class="cart-item-info">
        <span>3X</span> <span>@ $6.50</span> <span>@ 19.5</span>
      </div>

      <button class="delete-btn">X</button>
    </article>
  );
}

export default CartItem;
