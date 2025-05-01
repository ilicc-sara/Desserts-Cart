import React, { useState } from "react";

function Item(props) {
  const { type, name, price, image } = props;
  return (
    <article class="desert-item">
      <div class="dessert-pic-cont">
        <img class="dessert-pic" src={image} />
        <div class="cart-button">
          <i class="bx bx-cart-add">
            {" "}
            <span>Add to Cart</span>
          </i>
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
