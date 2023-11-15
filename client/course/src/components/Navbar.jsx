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
            <Link className='link' to="/?cat=news">
              <h6>NEWS</h6>
              </Link>
              <Link className='link' to="/?cat=galery">
              <h6>GALERY</h6>
              </Link>
              <Link className='link' to="/?cat=about">
              <h6>ABOUT</h6>
              </Link>
              <Link className='link' to="/?cat=contacts">
              <h6>CONTACTS</h6>
              </Link>
              <span>Logout</span>
              <span className='write'>
              <Link className='link' to="/write">Write</Link>
              </span>
              
          </div>
        </div>
    </div>
  )
}

export default Navbar
