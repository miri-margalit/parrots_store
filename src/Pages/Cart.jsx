import { useContext } from "react";
import MyContext from "../Context/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(MyContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-message">
          🛒<br />
          Your cart is empty.
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name || "Unnamed product"}</h4>
              <p>Price: ₪{item.price !== undefined ? item.price : "N/A"}</p>
              {item.description && <p>{item.description}</p>}
              {item.image && (
                <img src={item.image} alt={item.name} />
              )}
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
              >
                🗑️ Remove
              </button>
            </div>
          ))}

          <hr />
          <div className="cart-total">Total: ₪{total}</div>

          <button
            className="checkout-btn"
            onClick={() => {
              if (cart.length > 0) {
                navigate("/checkout");
              } else {
                alert("Your cart is empty.");
              }
            }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
