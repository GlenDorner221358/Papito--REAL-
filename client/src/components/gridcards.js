import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./../css/products.css";

function CardGrid() {
  const [products, setProducts] = useState([]);

  // Gets all the products from the db
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(result => setProducts(result.data))
      .catch(err => console.log(err));
  }, []);


  const handleSingle = (productId) => {
    console.log(productId)
    sessionStorage.setItem('singleID', productId)
    window.location.href = '/single';
  }


  const cartArray = [];
  let asshole = JSON.parse(sessionStorage.getItem('cart'));
  const handleCart = (product) => {
      if (asshole == undefined || asshole == null) {
          console.log(product)
          cartArray.push(product)
          console.log(cartArray)
          let string = JSON.stringify(cartArray)
          sessionStorage.setItem('cart', string)
          alert("Item Added to cart")
      }else{
          console.log(product)
          cartArray.push(asshole)
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
    <Row className="g-4">
      {leProducts}
    </Row>
  );
}

export default CardGrid;
