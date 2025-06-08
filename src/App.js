import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./Components/Navbar";
import { MyProvider } from "./Context/Context";
import AppRoutes from "./Components/AppRoutes";



function App() {

  const parrotsArr = [
    {
      id: 1,
      name: "Cockatoo Parrot",
      price: 1800,
      image: "/images/parrot3.jpg",
      description: "Friendly, loves people, enjoys attention"
    },
    {
      id: 2,
      name: "African Grey Parrot",
      price: 2200,
      image: "/images/parrot4.jpg",
      description: "Quiet, smart, loves to play"
    },
    {
      id: 3,
      name: "Amazon Parrot",
      price: 2500,
      image: "/images/parrot5.jpg",
      description: "Colorful, loud, likes to learn words"
    },
    {
      id: 4,
      name: "Canary Parrot",
      price: 1500,
      image: "/images/parrot7.jpg",
      description: "Small, quiet, pleasant"
    },
    {
      id: 5,
      name: "South American Parrot",
      price: 3000,
      image: "/images/parrot8.jpg",
      description: "Beautiful, loves to fly, strong"
    },
    {
      id: 6,
      name: "Queen Parrot",
      price: 3500,
      image: "/images/parrot12.jpg",
      description: "Magnificent, quiet, loves attention"
    },
    {
      id: 7,
      name: "Mandarin Parrot",
      price: 1700,
      image: "/images/parrot14.jpg",
      description: "Small and colorful, loves to sing"
    },
    {
      id: 8,
      name: "Walau Parrot",
      price: 2800,
      image: "/images/parrot9.jpg",
      description: "Friendly, very smart, easy to train"
    },
    {
      id: 9,
      name: "Cockatiel Parrot",
      price: 1300,
      image: "/images/parrot10.jpg",
      description: "Funny, small, soft to the touch"
    },
    {
      id: 10,
      name: "Red-Tailed Parrot",
      price: 3200,
      image: "/images/parrot2.jpg",
      description: "Energetic, strong, loves to show off"
    }
  ]
  const [parrots, setParrots] = useState(() => {
    const saved = localStorage.getItem("parrots");
    return saved ? JSON.parse(saved) : parrotsArr;
  });
  
  useEffect(() => {
    localStorage.setItem("parrots", JSON.stringify(parrots));
  }, [parrots]);


const usersArr = [
  {
  username: "manager",
  password : "0000"
}
]

const [users, setUsers] = useState(() => {
  const saved = localStorage.getItem("users");
  return saved ? JSON.parse(saved) : usersArr;
});

useEffect(() => {
  localStorage.setItem("users", JSON.stringify(users));
}, [users]);
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
  setParrots,
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
