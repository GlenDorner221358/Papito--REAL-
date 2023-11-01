import React, { useState } from 'react';
import axios from 'axios';
import "./../css/login.css";

function Login (){
  
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    

    const handleLogin = async (e) =>{
        e.preventDefault();
		try {
			const url = "http://localhost:5000/auth";
            console.log(data);
			const { data: res } = await axios.post(url, data);
			sessionStorage.setItem("token", res.data);
			console.log(data)
			if(data.email == "glen@gmail.com"){
				sessionStorage.setItem("isAdmin","true")
				sessionStorage.setItem("user", data.email)
			}
            window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
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
                    <input type="email" name="email" id="form2Example1" onChange={handleChange} class="form-control" />
                        <label class="form-label" for="form2Example1">Email</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div class="form-outline mb-4">
                    <input type="password" name="password" id="form2Example2" onChange={handleChange} class="form-control" />
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

                        <div class="col">
                        {/* <!-- Simple link --> */}
                        <a href="#!" onClick={handleForgor}>Forgot password?</a>
                        </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="button" class="btn btn-primary btn-lg btn-block w-100" id="siglogbutton" onClick={handleLogin}> Log in </button>
                </form>
                {/* go to sign up page button */}
                <a href='/signup'>
                    <button class="btn btn-primary btn-lg btn-block w-100"> Sign up </button>
                </a>
            </div>
        </div>
    )
}
export default Login