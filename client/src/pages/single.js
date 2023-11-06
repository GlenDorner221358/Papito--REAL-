import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ".././css/landing.css"
import ".././css/single.css"
import Footer from "../components/footer";

function Single (){

    const gottenID = sessionStorage.getItem('singleID');
    const [quantity, setQuantity] = useState();

    // gets the product assosciated with the id actually
    const [product, setProduct] = useState([]);

  // Gets the product from the db
    useEffect(() => {
        axios.get('http://localhost:5000/api/products/' + gottenID)
        .then(result => setProduct(result.data))
        .catch(err => console.log(err));
    });

    // Adds to cart
    let cartArray = [];
    let cart = sessionStorage.getItem('cart');
    const handleCart = (product) => {
        if (cart === undefined || cart === null) {
            product.quantity = quantity

            cartArray.push(product)

            let string = JSON.stringify(cartArray)
            sessionStorage.setItem('cart', string)
            alert("Item Added to cart")
        }else{
            product.quantity = quantity;
            
            cartArray = JSON.parse(cart); 
            cartArray.push(product);
  
            let string = JSON.stringify(cartArray);
            sessionStorage.setItem('cart', string);
            alert("Item Added to cart")
        }
    } 
    

    return(
        <div id="holderTheta">
        <div>
            <div class="container mt-5 mb-5">
            <div class="row d-flex justify-content-center">
                <div class="col-md-10">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="images p-3">
                                    <div class="text-center p-4"> <img id="main-image" src={product.image} width="400" alt="fucc" /> </div>
                                    <div class="thumbnail text-center">
                                        <img src={product.image} width="100" alt="fucc" /> 
                                        <img src={product.image} width="100" alt="fucc" /> 
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="product p-4">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center"> 
                                            <i class="fa fa-long-arrow-left"></i> 
                                            <a href="/" className="btn btn-primary">Back</a>
                                        </div> 
                                            <i class="fa fa-shopping-cart text-muted"></i>
                                    </div>
                                    <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand"> {product.category} </span>
                                        <h5 class="text-uppercase">{product.name}</h5>
                                        <div class="price d-flex flex-row align-items-center"> <span class="act-price">R{product.price}</span>
                                            {/* <div class="ml-2"> <small class="dis-price">$59</small> <span>40% OFF</span> </div> */}
                                        </div>
                                    </div>
                                    <p class="about">description</p>
                                    <div class="sizes mt-5">
                                        <h6 class="text-uppercase">Quantity: </h6> 
                                            <input type="number" name="quantity" placeholder='0' defaultValue={0} onChange={(e) => setQuantity(e.target.value)} /> 
                                    </div>
                                    <div class="cart mt-4 align-items-center"> 
                                        <button class="btn btn-danger text-uppercase mr-2 px-4" onClick={() => handleCart(product)} disabled={product.stock === 0}>Add to cart</button> 
                                        <i class="fa fa-heart text-muted"></i> 
                                        <i class="fa fa-share-alt text-muted"></i> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
            <Footer />
        </div>
    );
}

export default Single