import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="links">
            <Link className='link' to="/">
              <h6>NEWS</h6>
              </Link>
              <Link className='link' to="/galery">
              <h6>GALERY</h6>
              </Link>
              <Link className='link' to="/about">
              <h6>ABOUT</h6>
              </Link>
              <Link className='link' to="/contacts">
              <h6>CONTACTS</h6>
              </Link>
              <span>
                <Link className='link' to="/login">Log in</Link>
              </span>
              <span>
                <Link className='link' to="/register">Register</Link>
              </span>
              <span className='write'>
              <Link className='link' to="/write">Write</Link>
              </span>
              
          </div>
        </div>
    </div>
  )
}

export default Navbar
