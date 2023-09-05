import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./../css/login.css";

function Login (){
    const [user, setUser] = useState([])
    const [zaUser2, setZaUser2] = useState()
    let acceptable = 0

    const handleLogin = (e) =>{
        e.preventDefault()
        console.log("user ID = " + user)
        axios.get('http://localhost:5000/api/users/'+ user)
        .then(
            acceptable = 1,
            result => setZaUser2(result.data),
            console.log(zaUser2)
        )
        .catch(err => console.log(err))

        if (acceptable = 1) {
            sessionStorage.setItem('user', user)
            window.location.href = '/checkout'
        }else{
        alert('user not found')
        }
    }  

    const handleForgor = () =>{
        alert("Sucks to be you lmao")
    }

    return(
        <div id="loginHolder">
            <div id="doubleDivDeathBarrage">
                <h1 id="anus"> Log-In </h1>
                <form onSubmit={handleLogin}>
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                        <input type="text" id="form2Example1" class="form-control" onChange={e => setUser(e.target.value)}/>
                        <label class="form-label" for="form2Example1">User ID</label>
                    </div>

                    {/* <!-- 2 column grid layout for inline styling --> */}
                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                        {/* <!-- Checkbox --> */}
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                        </div>

                        <div class="col">
                        {/* <!-- Simple link --> */}
                        <a href="#!" onClick={handleForgor}>Forgot password?</a>
                        </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="button" class="btn btn-primary btn-lg btn-block w-100" id="siglogbutton" onClick={handleLogin}> Log in </button>

                </form>
            </div>
        </div>
    )
}
export default Login