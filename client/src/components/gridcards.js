import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./../css/products.css";

function CardGrid() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const quantity = 1;

  // Gets all the products from the db or based on category
  useEffect(() => {
    let url = `http://localhost:5000/api/products`;
    if (category) {
      url += `/${category}`;
    }
    axios.get(url)
      .then(result => setProducts(result.data))
      .catch(err => console.log(err));
  }, [category]);


  // go to single page
  const handleSingle = (productId) => {
    console.log(productId)
    sessionStorage.setItem('singleID', productId)
    window.location.href = '/single';
  }


  // add to cart code
  const cartArray = [];
  let asshole = sessionStorage.getItem('cart');

  const handleCart = (product) => {
    if (asshole === undefined || asshole === null) {
      console.log(product)
      product.quantity = quantity
      cartArray.push(product)
      console.log(cartArray)
      let string = JSON.stringify(cartArray)
      sessionStorage.setItem('cart', string)
      alert("Item Added to cart")
    }else{
          console.log(product)
          cartArray.push(asshole)
          product.quantity = quantity
          cartArray.push(product)
          console.log(cartArray)
          let string = JSON.stringify(cartArray)
          sessionStorage.setItem('cart', string)
          alert("Item Added to cart")
      } 
  }


  const leProducts = products.map((produx) => (
    <Col key={produx._id} xs={12} md={3}>
      <Card height={200}>
        <Card.Img variant="top" src={produx.image} height={150} />
        <Card.Body>
          <Card.Title>{produx.name}</Card.Title>
          <Card.Text>
            <p>Category: {produx.category}</p>
            <p className='treefiddy'>R {produx.price}</p>
          </Card.Text>
          <div>
            <a href="#" className="btn btn-primary" onClick={() => handleSingle(produx._id)}>View Item</a>
            <a href="#" className="btn btn-primary right" onClick={() => handleCart(produx)}>Add to Cart</a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div>
      <h2> Filter by: </h2>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="painting">Painting</option>
        <option value="drawing">Drawing</option>
        <option value="pens">Pens</option>
        <option value="ink">Ink</option>
        <option value="tool">Tool</option>
      </select>
      <Row className="g-4" style={{marginTop: "2%"}}>
        {leProducts}
      </Row>
    </div>
  );
}

export default CardGrid;
