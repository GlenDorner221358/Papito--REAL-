import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ".././css/landing.css"
import ".././css/products.css"
import ".././css/navbar.css"
import Headercel from ".././components/carousel";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from "../components/footer";

function Landing (){

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

    const [products, setProducts] = useState([]);

    // Gets all the products from the db
    useEffect(() => {
      axios.get('http://localhost:5000/api/products')
        .then(result => setProducts(result.data))
        .catch(err => console.log(err));
    }, []);
  
    // Displays the specials
    const leProducts = products.slice(0, 4).map((produx) => (
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
                    <a className="btn btn-primary" onClick={() => handleSingle(produx._id)}>View Item</a>
                    <a className="btn btn-primary right" onClick={() => handleCart(produx)}>Add to Cart</a>
                </div>
             </Card.Body>
        </Card>
      </Col>
    ));

    // Displays the new arrivals
    const leNewOnes = products.slice((products.length-4), (products.length)).map((produx) => (
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

    return(
        <div>
            <Headercel />

            <div class="rest">
                <h1> Specials </h1>
            </div>
            <div class="rest2"> 
                <Row className="g-4">
                    {leProducts}
                </Row>
            </div>

            <div class="rest">
                <h1> New Arrivals </h1>
            </div>
            <div class="rest2"> 
                <Row className="g-4">
                    {leNewOnes}
                </Row>
            </div>           

            <Footer />
        </div>
    )
}
export default Landing