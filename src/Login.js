import React from "react";
import "./Login.css"
import Signup from "./Signup";


const Login = () => {
    return (
      
            <div className="cover ">
                <h1>Login </h1>
                <input type="text" placeholder="Username" />
                
                <input type="password" placeholder="Password" />
                <div className="login-btn" >Login</div>
                <p className="text">Or login using</p>

                <div className="alt-login">
                    <div className="facebook"></div>
                    <div className="google"></div>
                </div>
                
            </div>
         

    )
}
export default Login;