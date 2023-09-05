import React from "react";
import CardGridAdmin from "../components/gridcardAdmin";
import {useState, useEffect} from "react";
import axios from 'axios';

function Admininventory (){
    const [file, setFile] = useState()
    const [image, setImage] = useState()
    const [name, setName] = useState()
    const [category, setCategory] = useState()
    const [price, setPrice] = useState()

    const handleUpload = (e) =>{

        const payload ={
            name: name,
            category: category,
            price: price,
            image: file
        }

        e.preventDefault();
        console.log(payload)
        axios.post('http://localhost:5000/api/products', payload)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      }
  

    return(
        <div id="holder1">
            <div id="holder5000">
                <h1> Add new Product: </h1>
                <form className="lord">
                    <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" className="form-control" placeholder="Name" onChange={e => setName(e.target.value)} required />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Category</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="category" placeholder="Category" onChange={e => setCategory(e.target.value)} required />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="price" placeholder="R0.00" onChange={e => setPrice(e.target.value)} required />
                    </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Image</label>
                        <div className="col-sm-10">
                            <input type="text" onChange={e => setFile(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary btn-lg" onClick={handleUpload}>Create</button>
                    </div>
                    {/* <img src={'http://localhost:5000/images/' + image} alt=''/> */}
                    </div>
                </form>
            </div>
            <h1> Current Stock: </h1>
            < CardGridAdmin />
        </div>
    )
}
export default Admininventory