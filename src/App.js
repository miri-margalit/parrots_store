// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { MyProvider } from "./Context/Context";
import AppRoutes from "./Components/AppRoutes";

function App() {

  const [parrots, setParrots] = useState([
    {
      id: 1,
      name: "Cockatoo Parrot",
      price: 1800,
      image: "/images/cockatoo.jpg",
      description: "Friendly, loves people, enjoys attention"
    },
    {
      id: 2,
      name: "African Grey Parrot",
      price: 2200,
      image: "/images/afro_parrot.jpg",
      description: "Quiet, smart, loves to play"
    },
    {
      id: 3,
      name: "Amazon Parrot",
      price: 2500,
      image: "/images/amazon_parrot.jpg",
      description: "Colorful, loud, likes to learn words"
    },
    {
      id: 4,
      name: "Canary Parrot",
      price: 1500,
      image: "/images/canary_parrot.jpg",
      description: "Small, quiet, pleasant"
    },
    {
      id: 5,
      name: "South American Parrot",
      price: 3000,
      image: "/images/south_american_parrot.jpg",
      description: "Beautiful, loves to fly, strong"
    },
    {
      id: 6,
      name: "Queen Parrot",
      price: 3500,
      image: "/images/queen_parrot.jpg",
      description: "Magnificent, quiet, loves attention"
    },
    {
      id: 7,
      name: "Mandarin Parrot",
      price: 1700,
      image: "/images/mandarin_parrot.jpg",
      description: "Small and colorful, loves to sing"
    },
    {
      id: 8,
      name: "Walau Parrot",
      price: 2800,
      image: "/images/walau_parrot.jpg",
      description: "Friendly, very smart, easy to train"
    },
    {
      id: 9,
      name: "Cockatiel Parrot",
      price: 1300,
      image: "/images/cocktail_parrot.jpg",
      description: "Funny, small, soft to the touch"
    },
    {
      id: 10,
      name: "Red-Tailed Parrot",
      price: 3200,
      image: "/images/red_tail_parrot.jpg",
      description: "Energetic, strong, loves to show off"
    }
  ]);
  

const [users, setUsers] =useState([
  {
  username: "manager",
  password : "0000"
}
])
const [cart, setCart]=useState([])
const [currentUser, setCurrentUser] = useState(null);

useEffect(() => {
  const storedUser = localStorage.getItem("currentUser");
  if (storedUser) {
    setCurrentUser(storedUser);
  }
}, []);

const store = {
  parrots,
  users,
  setUsers,
  currentUser,
  setCurrentUser,
  cart,
  setCart
};

  

  return (
    <>
    <MyProvider value={store}>
    <BrowserRouter>
    <Navbar/>
      <AppRoutes/>
    </BrowserRouter>
    </MyProvider>
    </>
  );
}

export default App;
