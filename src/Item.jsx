import React, { useState } from "react";

function Item(props) {
  // prettier-ignore
  const {type, name, price, image, id, setCartItems, cartItems} = props;

  function getIsItemInCart(id) {
    return cartItems.includes(cartItems.find((item) => item.id === id));
  }

  function findItemAmount(id) {
    return cartItems.find((item) => item?.id === id)?.amount;
  }

  function increaseAmount(id) {
    setCartItems((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  }

  function decreseAmount(id) {
    setCartItems((previous) =>
      previous.map((item) => {
        if (item.amount > 1) {
          return item.id === id ? { ...item, amount: item.amount - 1 } : item;
        } else return item;
      })
    );
    if (findItemAmount(id) === 1) {
      setCartItems((previous) => previous.filter((item) => item.id !== id));
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
        image: image,
      },
    ]);
  }

  return (
    <article class="desert-item">
      <div class="dessert-pic-cont">
        <img class="dessert-pic" src={image} />

        {!getIsItemInCart(id) && (
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

        {getIsItemInCart(id) && (
          <div class="cart-button-full">
            <button class="btn" onClick={() => decreseAmount(id)}>
              -
            </button>
            <span>{findItemAmount(id)}</span>
            {/* + i - dugme ce biti vidljivi jedino kada je item vec u cartu */}
            {/* napraviti var ili fju getIsItemInCart(id)  */}
            {/* ako je ovo true znam da trebam + ili - prikazati */}
            {/* ako prikazujem + i - znam da je item u cart i da ima amount */}
            {/* nadji taj item u cart i prikazi njegov amount na ekranu */}
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
