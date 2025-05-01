import React, { useState } from "react";

function Item(props) {
  const { type, name, price, image, amount } = props;
  return (
    <article class="desert-item">
      <div class="dessert-pic-cont">
        <img class="dessert-pic" src={image} />

        {/* <div class="cart-button-empty"> */}
        <div class={`cart-button-empty ${amount === 0 ? "" : "hidden"}`}>
          <i class="bx bx-cart-add">
            {" "}
            <span>Add to Cart</span>
          </i>
        </div>

        {/* <div class="cart-button-full"> */}
        <div class={`cart-button-full ${amount > 0 ? "" : "hidden"}`}>
          <button class="btn">-</button>
          <span>{amount}</span>
          <button class="btn">+</button>
        </div>
      </div>

      <div class="info-cont">
        <p class="type">{type}</p>
        <h4 class="name">{name}</h4>
        <span class="price">$ {price.toFixed(2)}</span>
      </div>
    </article>
  );
}

export default Item;
