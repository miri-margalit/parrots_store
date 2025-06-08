import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../Context/Context';
import AddProductForm from '../Components/AddProduct';

const Products = ({ parrots, cart, setCart }) => {
  const { setParrots, currentUser } = useContext(MyContext);
  const [showForm, setShowForm] = useState(false);

  const addToCart = (parrot) => {
    setCart([...cart, parrot]);
  };

  const handleDelete = (id) => {
    setParrots(parrots.filter(p => p.id !== id));
  };

  return (
    <div>
      <h1>Parrots</h1>

      {/* רק למנהל מוצג כפתור הטופס */}
      {currentUser === "manager" && (
        <div>
          <button onClick={() => setShowForm(!showForm)}>
            ➕ Add Product
          </button>
          {showForm && <AddProductForm />}
        </div>
      )}

      {parrots.map((parrot) => (
        <div key={parrot.id} style={{ borderBottom: "1px solid gray", paddingBottom: "10px", marginBottom: "10px" }}>
          {currentUser === "manager" && (
            <button onClick={() => handleDelete(parrot.id)}>🗑️</button>
          )}
          <h2>{parrot.name}</h2>
          <img src={parrot.image} alt={parrot.name} style={{ width: "200px", height: "auto" }} />
          <p>מחיר: {parrot.price} ש"ח</p>
          <Link to={`/productdetails/${parrot.id}`}>
            <button>more details</button>
          </Link>
          <button onClick={() => addToCart(parrot)}>add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
