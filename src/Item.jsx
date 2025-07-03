import React, { useState } from "react";

function Item(props) {
  // prettier-ignore
  const {type, name, price, image, id, findItemAmount, getIsItemInCart, increaseAmount, decreseAmount, makeCartItem } = props;
  const isItemInCard = getIsItemInCart(id);
  const itemAmount = findItemAmount(id);

  return (
    <article class="desert-item">
      <div class="dessert-pic-cont">
        <img class="dessert-pic" src={image} />

        {!isItemInCard && (
          <div
            class="cart-button-empty"
            onClick={() => makeCartItem(name, id, price, image)}
          >
            <i class="bx bx-cart-add">
              {" "}
              <span>Add to Cart</span>
            </i>
          </div>
        )}

        {isItemInCard && (
          <div class="cart-button-full">
            <button class="btn" onClick={() => decreseAmount(id, itemAmount)}>
              -
            </button>
            <span>{itemAmount}</span>
            <button class="btn" onClick={() => increaseAmount(id)}>
              +
            </button>
          </div>
        )}
      </div>

      <div class="info-cont">
        <p class="type">{type}</p>
        <h4 class="name" onClick={() => deleteCartItem(id)}>
          {name}
        </h4>
        <span class="price">$ {price.toFixed(2)}</span>
      </div>
    </article>
  );
}

export default Item;
