import React from 'react'
import { useState,useEffect } from 'react'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)

  // Read saved theme, or default to light
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  // Apply theme to <html> and save it
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="container">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>
            Register
          </button>
        </div>

        {isLogin ? (
          <div className="form">
            <h1>Login🎓</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" onClick={(e) => e.preventDefault()}>Forget Password?</a>
            <button>Login</button>
            <p>
              Create an Account{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false) }}>
                Register
              </a>
            </p>
          </div>
        ) : (
          <div className="form">
            <h1>Register</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type= "confirm password" placeholder="confirm Password"/>
            <button>Register</button>
            <p>
              Already have an account?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true) }}>
                Login
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}