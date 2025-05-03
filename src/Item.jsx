import React, { useState } from "react";

function Item(props) {
  // prettier-ignore
  const {type, name, price, image, id, setCartItems} = props;

  const [amount, setAmount] = useState(1);
  const [isInCard, setIsInCard] = useState(false);

  function increaseAmount(id) {
    setCartItems((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
    setAmount((previous) => previous + 1);
  }

  function decreseAmount(id) {
    setCartItems((previous) =>
      previous.map((item) => {
        if (item.amount > 1) {
          return item.id === id ? { ...item, amount: item.amount - 1 } : item;
        } else return item;
      })
    );
    setAmount((previous) => {
      if (previous > 1) {
        return previous - 1;
      } else return previous;
    });

    if (amount === 1) {
      setCartItems((previous) => previous.filter((item) => item.id !== id));
      setIsInCard(false);
      // setAmount(0);
    }
  }

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

  function deleteCartItem(id) {
    setCartItems((previous) => previous.filter((item) => item.id !== id));
    setIsInCard(false);
    setAmount(1);
  }

  return (
    <article class="desert-item">
      <div class="dessert-pic-cont">
        <img class="dessert-pic" src={image} />

        {!isInCard && (
          <div
            class="cart-button-empty"
            onClick={() => makeCartItem(name, id, price)}
          >
            <i class="bx bx-cart-add">
              {" "}
              <span>Add to Cart</span>
            </i>
          </div>
        )}

        {isInCard && (
          <div class="cart-button-full">
            <button class="btn" onClick={() => decreseAmount(id)}>
              -
            </button>
            <span>{amount}</span>
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
