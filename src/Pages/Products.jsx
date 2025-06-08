import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../Context/Context';
import AddProductForm from '../Components/AddProduct';

const Products = ({ parrots, setParrots, cart, setCart }) => {
  const { currentUser } = useContext(MyContext);
  const [showForm, setShowForm] = useState(false);

  const addToCart = (parrot) => {
    alert("The item has been successfully added!")
    setCart([...cart, parrot]);
  };

  const handleDelete = (id) => {
    setParrots(parrots.filter(p => p.id !== id));
  };

  return (
    <div className="products-container">
      <div className='title'>
      <h1 >Our Parrots</h1>
      </div>
      

      {currentUser === "manager" && (
        <div className="admin-section">
          <button onClick={() => setShowForm(!showForm)}>
            ➕ Add Product
          </button>
          {showForm && <AddProductForm setParrots={setParrots} parrots={parrots} />}
        </div>
      )}

      <div className="product-grid">
        {parrots.map((parrot) => (
          <div key={parrot.id} className="product-card">
            {currentUser === "manager" && (
              <button className="delete-btn" onClick={() => handleDelete(parrot.id)}>🗑️</button>
            )}
            <img src={parrot.image} alt={parrot.name} className="product-img" />
            <h2>{parrot.name}</h2>
            <p>{parrot.description}</p>
            <p className="price">{parrot.price} ₪</p>
            <div className="card-buttons">
              <Link to={`/productdetails/${parrot.id}`}>
                <button className="details-btn">More Details</button>
              </Link>
              <button className="cart-btn" onClick={() => addToCart(parrot)}>Add to Cart 🛒</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
