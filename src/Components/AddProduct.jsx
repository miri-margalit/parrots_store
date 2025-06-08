

const AddProductForm = ({ setParrots, parrots }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const newProduct = {
        id: Date.now(),
        name: e.target.name.value,
        price: Number(e.target.price.value),
        image: e.target.image.value,
        description: e.target.description.value
      };
      setParrots([...parrots, newProduct]);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="price" type="number" placeholder="Price" required />
        <input type="file" name="image" required />
        <input name="description" placeholder="Description" required />
        <button type="submit">Add Product</button>
      </form>
    );
  };

  export default AddProductForm;
  