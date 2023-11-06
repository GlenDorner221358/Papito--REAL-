import React from "react";
import CardGridAdmin from "../components/gridcardAdmin";
import {useState} from "react";
import axios from 'axios';

function Admininventory (){
    const [file, setFile] = useState()
    const [name, setName] = useState()
    const [category, setCategory] = useState()
    const [price, setPrice] = useState()
    const [stock, setStock] = useState()

    const handleUpload = (e) =>{
        const payload ={
            name: name,
            category: category,
            price: price,
            stock: stock,
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
                    <select onChange={(e) => setCategory(e.target.value)} required >
                        <option value="painting">Painting</option>
                        <option value="drawing">Drawing</option>
                        <option value="pens">Pens</option>
                        <option value="ink">Ink</option>
                        <option value="tool">Tool</option>
                    </select>
                    </div>
                    </div>

                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="price" placeholder="R0.00" onChange={e => setPrice(e.target.value)} required />
                    </div>
                    </div>

                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Stock</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" name="stock" placeholder="0" onChange={e => setStock(e.target.value)} required />
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
                    </div>
                </form>
            </div>
            <h1> Current Stock: </h1>
            < CardGridAdmin />
        </div>
    )
}
export default Admininventory