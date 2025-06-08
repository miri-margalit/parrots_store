import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../Context/Context';


const ProductDetails = () => {
  const { id } = useParams();
  const { parrots, cart, setCart } = useContext(MyContext);

  const parrot = parrots.find((p) => p.id === parseInt(id));

  const addToCart = (parrot) => {
    alert("The item has been successfully added!")
    setCart([...cart, parrot]);
  };

  if (!parrot) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={parrot.image} alt={parrot.name} />
      </div>
      <div className="product-info">
        <h1>{parrot.name}</h1>
        <p className="price">Price: {parrot.price} ₪</p>
        <p className="description">{parrot.description}</p>
        <button className="add-to-cart" onClick={() => addToCart(parrot)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

