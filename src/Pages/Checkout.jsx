import React from 'react';
import { useNavigate } from 'react-router-dom';


const Checkout = ({ cart }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your order has been successfully received!");
    navigate("/home");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      <section className="cart-summary">
        <h2>Cart Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₪{item.price}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
            <h3 className="total-price">Total: ₪{totalPrice}</h3>
          </div>
        )}
      </section>

      <section className="customer-info">
        <h2>Customer Information</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" required className="checkout-input" />
          </label>
          <label>
            Address:
            <input type="text" required className="checkout-input" />
          </label>
          <label>
            Phone Number:
            <input type="tel" required className="checkout-input" />
          </label>
          <label>
            Email (a receipt will be sent):
            <input type="email" required className="checkout-input" />
          </label>
          <button type="submit" className="pay-button">Pay Now</button>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
