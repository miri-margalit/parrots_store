import { useContext } from "react";
import MyContext from "../Context/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(MyContext);
  const navigate = useNavigate();

  // Defensive: check cart items have price
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: 15, borderBottom: "1px solid #ccc", paddingBottom: 10 }}>
              {/* Display item details with fallback */}
              <h4>{item.name || "Unnamed product"}</h4>
              <p>Price: ₪{item.price !== undefined ? item.price : "N/A"}</p>
              {item.description && <p>{item.description}</p>}
              {item.image && <img src={item.image} alt={item.name} style={{ width: 100, height: "auto" }} />}
              <button onClick={() => removeFromCart(item.id)} style={{ marginTop: 5 }}>
                🗑️
              </button>
            </div>
          ))}
          <hr />
          <h3>Total: ₪{total}</h3>
          <button onClick={() => {
            if (cart && cart.length > 0) {
              navigate("/checkout");
            } else {
              alert("Your cart is empty.");
            }
          }}>
            Proceed to Checkout
          </button>

        </>
      )}
    </div>
  );
};

export default Cart;
