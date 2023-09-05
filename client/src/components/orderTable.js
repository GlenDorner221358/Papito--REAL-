import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./../css/orders.css";

function Orders() {
    const [orders, setOrders] = useState([]);

    // Gets all the orders from the db
    useEffect(() => {
    axios.get('http://localhost:5000/api/orders')
      .then(result => setOrders(result.data))
      .catch(err => console.log(err));
    }, []);

    // delete function
    console.log(orders);
    const handelDispatch = (orderId) => {
        console.log(orderId)
        axios.delete('http://localhost:5000/api/orders/' + orderId)
        alert("Order dispatched Succesfully!")
    };

    // displays all the products using a map function
    const leFunnyOrders = orders.map((orderx) => 
        <form className="list-group ordered">
            <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <label class="col-sm-3 col-form-label">Products: {orderx.product}</label>
            </div>
            <div className="d-flex w-100 justify-content-between">
                <label class="col-sm-5 col-form-label">Date ordered: {orderx.date}</label>
            </div>
            <div className="d-flex w-100 justify-content-between">
                <label class="col-sm-2 col-form-label">Quantity: {orderx.amount}</label>
            </div>
                <label class="col-sm-3 col-form-label">User: {orderx.user}</label>
            <div>
                <button type="submit" className="btn btn-primary btn-lg btn-block editr" onClick={() => handelDispatch(orderx._id)}> Dispatch </button>
                
            </div>
            </a>
        </form>   
    );

    return(
    <div id="holderOmega">
        <h1> Pending Orders </h1>
        {leFunnyOrders}
    </div>
    );
}

export default Orders