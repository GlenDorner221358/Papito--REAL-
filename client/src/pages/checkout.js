import React from "react";
import ".././css/checkout.css";
import Dingus from "../components/checkoutDingus";
import Footer from "../components/footer";

function Checkout (){
    return(
        <div>
            <div id="holder2">
                < Dingus />
            </div>
            <div id="paymentinfo">
                <h1> Payment Details: </h1>
                <label class="form-label" for="form1">Card Number</label>
                <input min="0" placeholder='XXXX-XXXX-XXXX' type="number" class="form-control"/>

                <label class="form-label" for="form1">Expiration date</label>
                <input min="0" type="text" class="form-control"/>

                <label class="form-label" for="form1">CVV</label>
                <input min="0" placeholder='XXX' type="number" class="form-control"/>

                <label class="form-label" for="form1">Card Holder name</label>
                <input min="0" placeholder='John Arbuckle' type="text" class="form-control"/>
            </div>
            < Footer />
        </div>
    )
}
export default Checkout