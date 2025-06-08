import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to our store</h1>

      <Link to="/products" className="home-link">
        To see the parrots<br />press here
      </Link>

      <Link to="/contact" className="contact-link">
        Contact us
      </Link>
    </div>
  );
};

export default Home;
