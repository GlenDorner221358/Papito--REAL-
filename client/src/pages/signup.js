import React, { useState } from 'react';
import axios from 'axios';
import "./../css/signup.css";

function Signup (){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState()
    let acceptable = 0

    const handleSignup = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/api/addUser', { username: username, email: email, password: password })
        .then(response => {
            console.log(response)
            sessionStorage.setItem('user', username)
            window.location.href = '/'
        })
        .catch(err => console.log(err))
    }  

    return(
        <div id="loginHolder">
            <div id="doubleDivDeathBarrage">
                <h1 id="anus"> Create an account </h1>
                <form onSubmit={handleSignup}>
                    {/* username input */}
                    <div class="form-outline mb-4">
                        <input type="text" id="form2Example1" class="form-control" onChange={e => setUsername(e.target.value)}/>
                        <label class="form-label" for="form2Example1">Name & Surname</label>
                    </div>
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" onChange={e => setEmail(e.target.value)}/>
                        <label class="form-label" for="form2Example1">Email</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" onChange={e => setPassword(e.target.value)}/>
                        <label class="form-label" for="form2Example2">Password</label>
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
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="button" class="btn btn-primary btn-lg btn-block w-100" id="siglogbutton" onClick={handleSignup}> Create </button>

                </form>
                {/* go to sign up page button */}
                <a href='/login'>
                    <button class="btn btn-primary btn-lg btn-block w-100"> Log in </button>
                </a>
            </div>
        </div>
    )
}
export default Signup