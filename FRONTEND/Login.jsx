import React from 'react'
import { useState } from 'react'

export default function Login(){
    const [ isLogin.setIsLogin]= useState(true);
    return(
        <div className="container">
  <div className="form-toggle">
    <button className={isLogin?'active':""}>Login</button>
    <button>Register</button>
  </div>

  <div className="form-container">
    <form>
      <input className="form-input" type="email" placeholder="Email" />
      <input className="form-input" type="password" placeholder="Password" />
      <button className="form-button">Login</button>
    </form>
  </div>
</div>
        
    )
}