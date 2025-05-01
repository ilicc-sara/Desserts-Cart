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
  },
  {
    type: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    image: "./image-creme-brulee-desktop.jpg",
    id: 2,
  },
  {
    type: "Macaron",
    name: "Macaron Mix of Five",
    price: 8.0,
    image: "./image-macaron-desktop.jpg",
    id: 3,
  },
  {
    type: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
    image: "./image-tiramisu-desktop.jpg",
    id: 4,
  },
  {
    type: "Baklava",
    name: "Pistachio Baklava",
    price: 4.0,
    image: "./image-baklava-desktop.jpg",
    id: 5,
  },
  {
    type: "Pie",
    name: "Lemon Meringue Pie",
    price: 5.0,
    image: "./image-meringue-desktop.jpg",
    id: 6,
  },
  {
    type: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
    image: "./image-cake-desktop.jpg",
    id: 7,
  },
  {
    type: "Brownie",
    name: "Salted Caramel Brownie",
    price: 4.5,
    image: "./image-brownie-desktop.jpg",
    id: 8,
  },
  {
    type: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.5,
    image: "./image-panna-cotta-desktop.jpg",
    id: 9,
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
      <div class="cart"></div>
    </>
  );
}

export default App;
