import React, { useState, useContext } from "react";
import MyContext from "../Context/Context";

const AddProductForm = () => {
  const { parrots, setParrots } = useContext(MyContext);

  const [newParrot, setNewParrot] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewParrot({
      ...newParrot,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productToAdd = {
      ...newParrot,
      id: Date.now(), // מזהה ייחודי
      price: Number(newParrot.price),
    };
    setParrots([...parrots, productToAdd]);

    // איפוס הטופס
    setNewParrot({ name: "", price: "", image: "", description: "" });
    alert("Product added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "30px", border: "1px solid gray", padding: "20px" }}>
      <h2>Add New Product</h2>
      <div>
        <label>Name:</label><br />
        <input type="text" name="name" value={newParrot.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Price:</label><br />
        <input type="number" name="price" value={newParrot.price} onChange={handleChange} required />
      </div>
      <div>
        <label>Image URL:</label><br />
        <input type="text" name="image" value={newParrot.image} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label><br />
        <textarea name="description" value={newParrot.description} onChange={handleChange} />
      </div>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
