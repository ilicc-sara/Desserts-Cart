import React, { useState } from "react";

function Item(props) {
  const { type, name, price, image, amount, setItems, id, setCartItems } =
    props;

  function increaseAmount(id) {
    setItems((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  }

  function decreseAmount(id) {
    setItems((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      )
    );
  }

  function makeCartItem(name, id, price, amount) {
    setCartItems((previous) => [
      ...previous,
      {
        name: name,
        id: id,
        price: price,
        amount: amount,
      },
    ]);
  }

  function increaseCartAmount(id) {
    setCartItems((previous) =>
      previous.id === id ? { ...previous, amount: amount + 1 } : previous
    );
  }

  return (
    <article class="desert-item">
      <div class="dessert-pic-cont">
        <img class="dessert-pic" src={image} />

        {/* <div class="cart-button-empty"> */}
        <div
          class={`cart-button-empty ${amount === 0 ? "" : "hidden"}`}
          onClick={() => {
            increaseAmount(id);
            makeCartItem(name, id, price, amount);
          }}
        >
          <i class="bx bx-cart-add">
            {" "}
            <span>Add to Cart</span>
          </i>
        </div>

        {/* <div class="cart-button-full"> */}
        <div class={`cart-button-full ${amount > 0 ? "" : "hidden"}`}>
          <button
            class="btn"
            onClick={() => {
              decreseAmount(id);
            }}
          >
            -
          </button>
          <span>{amount}</span>
          <button
            class="btn"
            onClick={() => {
              increaseAmount(id);
              increaseCartAmount(id);
            }}
          >
            +
          </button>
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
