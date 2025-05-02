import React, { useState } from "react";

function Item(props) {
  const { type, name, price, image, amount, setItems, id, setCartItems } =
    props;

  const [isInCard, setIsInCard] = useState(false);

  function makeCartItem(name, id, price) {
    setCartItems((previous) => [
      ...previous,
      {
        name: name,
        id: id,
        price: price,
        amount: 1,
      },
    ]);
    setIsInCard(true);
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

        {!isInCard && (
          <div
            class={`cart-button-empty`}
            onClick={() => {
              // increaseAmount(id);
              makeCartItem(name, id, price, amount);
            }}
          >
            <i class="bx bx-cart-add">
              {" "}
              <span>Add to Cart</span>
            </i>
          </div>
        )}

        {isInCard && (
          <div class={`cart-button-full`}>
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
                // increaseAmount(id);
                increaseCartAmount(id);
              }}
            >
              +
            </button>
          </div>
        )}
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
