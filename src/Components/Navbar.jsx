import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MyContext from "../Context/Context";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(MyContext);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser"); 
    setShowLogout(false);
    
  };

  return (
    <div className='nav'>
      <img src="\logo192.png" alt="logo" className='nav-img'/>
      <Link to="/home">home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Our store</Link>

      {currentUser ? (
        <span 
          onMouseEnter={() => setShowLogout(true)} 
          onMouseLeave={() => setShowLogout(false)}
          style={{ position: "relative", cursor: "pointer" }}
        >
            Hello to { currentUser.username} 

          {showLogout && (
            <div 
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "white",
                border: "1px solid blue",
                padding: "5px",
                zIndex: 10,
                cursor: "pointer"
              }}
              onClick={handleLogout}
              onMouseEnter={() => setShowLogout(true)}  // לשמור את ההצגה כשעכבר בדיב
              onMouseLeave={() => setShowLogout(false)}
            >
              Log out
            </div>
          )}
        </span>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <Link to="/cart">Cart</Link>

      
    </div>
  )
}

export default Navbar;
