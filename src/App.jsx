import { useState } from "react";
import "./App.css";
import Item from "./Item.jsx";
import CartItem from "./CartItem.jsx";

const info = [
  {
    type: "Waffle",
    name: "Waffle with Berries",
    price: 6.5,
    image: "./images/image-waffle-desktop.jpg",
    id: 1,
  },
  {
    type: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    image: "./images/image-creme-brulee-desktop.jpg",
    id: 2,
  },
  {
    type: "Macaron",
    name: "Macaron Mix of Five",
    price: 8.0,
    image: "./images/image-macaron-desktop.jpg",
    id: 3,
  },
  {
    type: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
    image: "./images/image-tiramisu-desktop.jpg",
    id: 4,
  },
  {
    type: "Baklava",
    name: "Pistachio Baklava",
    price: 4.0,
    image: "./images/image-baklava-desktop.jpg",
    id: 5,
  },
  {
    type: "Pie",
    name: "Lemon Meringue Pie",
    price: 5.0,
    image: "./images/image-meringue-desktop.jpg",
    id: 6,
  },
  {
    type: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
    image: "./images/image-cake-desktop.jpg",
    id: 7,
  },
  {
    type: "Brownie",
    name: "Salted Caramel Brownie",
    price: 4.5,
    image: "./images/image-brownie-desktop.jpg",
    id: 8,
  },
  {
    type: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.5,
    image: "./images/image-panna-cotta-desktop.jpg",
    id: 9,
  },
];

function App() {
  const [items, setItems] = useState(info);

  const [cartItems, setCartItems] = useState([]);

  const totalAmount = cartItems.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  const totalPrice = cartItems
    .reduce((acc, cur) => {
      return acc + cur.price * cur.amount;
    }, 0)
    .toFixed(2);

  return (
    <>
      <div class="desserts-list">
        <h1>Desserts</h1>
        {items.map((item, index) => (
          <Item
            key={item.id}
            type={item.type}
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
            setItems={setItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
      <div class="cart">
        <h3>
          Your Cart (<span>{totalAmount}</span>)
        </h3>

        {/* <div class={`display-empty-cart ${totalAmount === 0 ? "" : "hidden"}`}> */}
        <div class={`display-empty-cart`}>
          <img
            src="./images/illustration-empty-cart.svg"
            class="empty-cart-img"
          />
          <p>Your added items will appear here</p>
        </div>

        {/* <div class={`cart-list ${cartItems.length === 0 ? "hidded" : ""}`}> */}
        <div class={`cart-list`}>
          {cartItems.map((cartItem, index) => (
            <CartItem
              key={index}
              name={cartItem.name}
              price={cartItem.price}
              amount={cartItem.amount}
              id={cartItem.id}
              setCartItems={setCartItems}
            />
          ))}
          <h3> Order Total: $ {totalPrice}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
