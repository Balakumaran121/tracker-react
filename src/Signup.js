import React from "react";
import "./Signup.css";

const Signup=()=>{
    return(
        <div className="cover">
           <h1>SignUp Form</h1>
           <input type="text" placeholder="Username"/>
           <input type="password" placeholder="Password"/>
           <input type="email" placeholder="Email"/>

           <div className="signup-btn">SignUp</div>
           <div className="text"><p>Already a member?<a href="#">Log in</a></p></div>
        </div>
    )
}
export default Signup;