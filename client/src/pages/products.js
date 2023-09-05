import React from "react";
import CardGrid from "../components/gridcards";
import ".././css/products.css";
import Footer from "../components/footer";

function Products (){
    return(
        <div>
            <div id="holder1">
                <h1> All items: </h1>
                <CardGrid />
            </div>
            <Footer />
        </div>
    )
}
export default Products 