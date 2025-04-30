import { useState } from "react";
import "./App.css";

const info = [
  {
    type: "Waffle",
    name: "Waffle with Berries",
    price: 6.5,
    image: "./image-waffle-desktop.jpg",
  },
  {
    type: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    image: "./image-creme-brulee-desktop.jpg",
  },
  {
    type: "Macaron",
    name: "Macaron Mix of Five",
    price: 8.0,
    image: "./image-macaron-desktop.jpg",
  },
  {
    type: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
    image: "./image-tiramisu-desktop.jpg",
  },
  {
    type: "Baklava",
    name: "Pistachio Baklava",
    price: 4.0,
    image: "./image-baklava-desktop.jpg",
  },
  {
    type: "Pie",
    name: "Lemon Meringue Pie",
    price: 5.0,
    image: "./image-meringue-desktop.jpg",
  },
  {
    type: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
    image: "./image-cake-desktop.jpg",
  },
  {
    type: "Brownie",
    name: "Salted Caramel Brownie",
    price: 4.5,
    image: "./image-brownie-desktop.jpg",
  },
  {
    type: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.5,
    image: "./image-panna-cotta-desktop.jpg",
  },
];

function App() {
  return (
    <>
      <div class="desserts-list">
        <h1>Desserts</h1>
        <article class="desert-item"></article>
      </div>
      <div class="cart"></div>
    </>
  );
}

export default App;
