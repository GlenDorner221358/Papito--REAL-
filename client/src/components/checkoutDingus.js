import React, { useState } from 'react';
import axios from 'axios';

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
}

function Dingus() {
    const cartString = sessionStorage.getItem('cart');
    const cartArray = JSON.parse(cartString);

    const userEmail = sessionStorage.getItem('user');
    const [date, setDate] = useState(getDate());
    const amount = 1;

    let total = 0;

    const handleClear = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem('cart')
        alert("Cart has been cleared.")
        console.log("cart Cleared")
        window.location = "/checkout"
    };

     // checks if a user is logged in, if they are, adds order to order database
     const handleAuth = () => {
        if (userEmail === null || userEmail === undefined) {
            window.location.href = '/login';
        } else {
            console.log(userEmail)

            const productNames = cartArray.map(item => item.name);

            const payload = {
                user: userEmail,
                products: productNames,
                date: date,
                amount: amount
            }

            console.log(payload)
            axios.post('http://localhost:5000/api/orders', payload)
            .then(result => {
                console.log(result);
                sessionStorage.removeItem('cart'); // Clear the cart after successful checkout
                alert('Order Placed!');
            })
            .catch(err => console.log(err))
        }
    };

    if (cartArray === undefined || cartArray[0] === null) {
        return(
            <div>
                <section class="h-100 gradient-custom">
                <div class="container py-5">
                    <div class="row d-flex justify-content-center my-4">
                    <div class="col-md-8">
                        <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Cart</h5>
                        </div>

                            <h2> Cart is empty </h2>

                        </div>
                        
                        <div class="card mb-4 mb-lg-0">
                        <div class="card-body">
                            <p><strong>We accept</strong></p>
                            <img class="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                            alt="Visa" />
                            <img class="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                            alt="American Express" />
                            <img class="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                            alt="Mastercard" />
                        </div>
                        </div>
                    </div>
    
                    <div class="col-md-4">
                        <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Summary</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Products
                                <span>R{total}</span> 
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                Shipping
                                <span>Free :D</span>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                <strong>Total amount</strong>
                                <strong>
                                    <p class="mb-0">(including VAT)</p>
                                </strong>
                                </div>
                                <span><strong>R{total}</strong></span>
                            </li>
                            </ul>
    
                            <button type="button" class="btn btn-primary btn-lg btn-block" > Checkout </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                
            </div>
        );
    }else{
        // get total price
        cartArray.map((item) => {
            total = total + item.price * item.quantity;
        })

        const leCartLmao = cartArray.map((carts) => (
            <div class="card-body">
            {/* single item */}
            <div class="row">
            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                {/* <!-- Image --> */}
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                <img src={carts.image}
                    class="w-100" alt={carts.name} />
                <a href="#!">
                    <div class="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                </a>
                </div>
                {/* <!-- Image --> */}
            </div>
        
            <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Data --> */}
                <p><strong>{carts.name}</strong></p>
                <p>{carts.category}</p>
                {/* <!-- Data --> */}
            </div>
        
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Quantity --> */}
                <div class="d-flex mb-4" style={{maxWidth: '300px'}}>
        
                <div class="form-outline">
                    <input id="form1" min="0" name="quantity" value={carts.quantity} class="form-control" />
                    <label class="form-label" for="form1">Quantity</label>
                </div>
        
                </div>
        
                {/* <!-- Price --> */}
                <p class="text-start text-md-center">
                <strong>R{carts.price}</strong>
                </p>
                {/* <!-- Price --> */}
            </div>
            </div>
            {/* <!-- Single item --> */}
            
        
            <hr class="my-4" />
        </div>
        ))

        return(
            <div>
                <section class="h-100 gradient-custom">
                <div class="container py-5">
                    <div class="row d-flex justify-content-center my-4">
                    <div class="col-md-8">
                        <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Cart</h5>
                        </div>
                            {leCartLmao}
                            <button type="button" class="btn btn-danger btn-sm me-1 mb-2" onClick={handleClear}> Clear Cart </button>
                        </div>
                        
                        <div class="card mb-4 mb-lg-0">
                        <div class="card-body">
                            <p><strong>We accept</strong></p>
                            <img class="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                            alt="Visa" />
                            <img class="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                            alt="American Express" />
                            <img class="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                            alt="Mastercard" />
                        </div>
                        </div>
                    </div>
    
                    <div class="col-md-4">
                        <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Summary</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Products
                                <span>R{total}</span> 
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                Shipping
                                <span>Free :D</span>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                <strong>Total amount</strong>
                                <strong>
                                    <p class="mb-0">(including VAT)</p>
                                </strong>
                                </div>
                                <span><strong>R{total}</strong></span>
                            </li>
                            </ul>
    
                            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={() => handleAuth()}> Checkout </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }

}

export default Dingus