import { useState } from "react";
import "./App.css";
import Item from "./Item.jsx";

const info = [
  {
    type: "Waffle",
    name: "Waffle with Berries",
    price: 6.5,
    image: "./image-waffle-desktop.jpg",
    id: 1,
    amount: 0,
  },
  {
    type: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    image: "./image-creme-brulee-desktop.jpg",
    id: 2,
    amount: 0,
  },
  {
    type: "Macaron",
    name: "Macaron Mix of Five",
    price: 8.0,
    image: "./image-macaron-desktop.jpg",
    id: 3,
    amount: 0,
  },
  {
    type: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
    image: "./image-tiramisu-desktop.jpg",
    id: 4,
    amount: 0,
  },
  {
    type: "Baklava",
    name: "Pistachio Baklava",
    price: 4.0,
    image: "./image-baklava-desktop.jpg",
    id: 5,
    amount: 0,
  },
  {
    type: "Pie",
    name: "Lemon Meringue Pie",
    price: 5.0,
    image: "./image-meringue-desktop.jpg",
    id: 6,
    amount: 0,
  },
  {
    type: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
    image: "./image-cake-desktop.jpg",
    id: 7,
    amount: 0,
  },
  {
    type: "Brownie",
    name: "Salted Caramel Brownie",
    price: 4.5,
    image: "./image-brownie-desktop.jpg",
    id: 8,
    amount: 0,
  },
  {
    type: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.5,
    image: "./image-panna-cotta-desktop.jpg",
    id: 9,
    amount: 0,
  },
];

function App() {
  const [items, setItems] = useState(info);
  return (
    <>
      <div class="desserts-list">
        <h1>Desserts</h1>
        {items.map((item) => (
          <Item
            key={item.id}
            type={item.type}
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
      <div class="cart">
        <h3>
          Your Cart (<span>0</span>)
        </h3>

        <div class="display-empty-cart">
          <img src="./illustration-empty-cart.svg" class="empty-cart-img" />
          <p>Your added items will appear here</p>
        </div>
      </div>
    </>
  );
}

export default App;
