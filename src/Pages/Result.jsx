import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart }) => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your order has been successfully received!");
    navigate("/home")
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Checkout</h1>

      <h2>Cart Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} style={{ width: '100px' }} />
              <p>Price: ${item.price}</p>
              <p>Description: {item.description}</p>
            </div>
          ))}
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      )}

      <h2>Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label><br />
          <input type="text" required />
        </div>
        <div>
          <label>Address:</label><br />
          <input type="text" required />
        </div>
        <div>
          <label>Phone Number:</label><br />
          <input type="tel" required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" required />
          A receipt will be sent by email.
        </div>
        <br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;
