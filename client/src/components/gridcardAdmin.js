import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./../css/products.css";

function CardGridAdmin(){

  const [products, setProducts] = useState([]);

  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [stock, setStock] = useState();

  // Gets all the products from the db
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(result => setProducts(result.data))
      .catch(err => console.log(err));
  }, []);

  // delete function
  const handelDelete = (productId) => {
    console.log(productId)
    axios.delete('http://localhost:5000/api/products/' + productId)
    alert("Item Deleted successfully!")
    window.location = "/admininventory"
  };

   // Edit
    const handleEdit = (productId) => {
      console.log(productId)
      const payload = {
          name: name,
          price: price,
          stock: stock,
          category: category,
          image: image
      }
      try {
        console.log(payload)
        const response = axios.put('http://localhost:5000/api/products/' + productId, payload);
        console.log('Changes submitted', response.data);
        alert("Item Edited successfully!")

      } catch (error) {
        console.error('Error editing: ', error);
    }
   };

   
  // displays all the products using a map function
  const leProducts = products.map((produx) => 
    <form className="list-group" onSubmit={handleEdit}>
      <a className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <label class="col-sm-1 col-form-label">Name: </label>
          <input type="text" name="name" defaultValue={produx.name} className="form-control" onChange={(e) => setName(e.target.value)} required />

          <label class="col-sm-1 col-form-label">Price: </label>
          <input type="number" name="price" defaultValue={produx.price} className="form-control" onChange={(e) => setPrice(e.target.value)} required />

          <label class="col-sm-1 col-form-label">Stock: </label>
          <input type="number" name="stock" defaultValue={produx.stock} className="form-control" onChange={(e) => setStock(e.target.value)} required />
        </div>

        <label class="col-sm-3 col-form-label">Category: </label>
        <select defaultValue={produx.category} name="category" className="form-control" onChange={(e) => setCategory(e.target.value)} required >
          <option value="painting">Painting</option>
          <option value="drawing">Drawing</option>
          <option value="pens">Pens</option>
          <option value="ink">Ink</option>
          <option value="tool">Tool</option>
        </select>

        <label class="col-sm-3 col-form-label">Image: </label>
        <input type="text" name="stock" defaultValue={produx.image} className="form-control" onChange={(e) => setImage(e.target.value)} required />
        <img class="col-sm-3" src={produx.image} alt="fuck help"></img>

        <div>
            <button type="submit" className="btn btn-primary btn-lg btn-block editr" onClick={() => handleEdit(produx._id)}> Save Edits </button>
            <button type="button" className="btn btn-danger btn-lg btn-block deletr" onClick={() => handelDelete(produx._id)}> Delete </button>
        </div>
      </a>
    </form>   
  );

  return (
    <Row className="g-4">
      {leProducts}
    </Row>
  );
}

export default CardGridAdmin