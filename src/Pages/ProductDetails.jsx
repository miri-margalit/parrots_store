import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../Context/Context';

const ProductDetails = () => {
  const { id } = useParams();
  const parrots = useContext(MyContext).parrots;
  const {cart, setCart} = useContext(MyContext);

  const addToCart = (parrot) => {
    setCart([...cart, parrot]);
  };

  const parrot = parrots.find((p) => p.id === parseInt(id));

  if (!parrot) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{parrot.name}</h1>
      <img src={parrot.image} alt={parrot.name} style={{width: "300px", height: "auto"}} />
      <p>price: {parrot.price} NIS</p>
      <p>Desdroption : {parrot.description}</p>
      <p>{parrot.description}</p>
      <button onClick={() => addToCart(parrot)}>add to Cart</button>

    </div>
  );
};

export default ProductDetails;
