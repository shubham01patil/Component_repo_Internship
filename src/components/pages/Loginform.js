import React from "react";
import "./loginform.css"
import { Link } from "react-router-dom";

const LoginForm =()=>{

    return(
        <div className="cover">
            <h1>LOGIN</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
             <div className="container">

             <div className="login-btn">
             <Link to = '/search'>Employee</Link> 
              </div>
             <div className="login-btn"> 
             <Link to = '/home'>admin</Link>
              </div>
             </div>


            <div>
                <Link to='register'> Don't have an account </Link>
            </div>

        </div>
    )
}

export default LoginForm