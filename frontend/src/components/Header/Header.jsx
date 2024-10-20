import React, { useState } from 'react';
import './Header.css';
import { assets } from '../../assets/assets';
import { NavLink, } from 'react-router-dom';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='header-container'>
      <div className="logo-container">
        <img src={assets.logomount} alt="Logo" />
      </div>

      <div className="hamburger-icon" onClick={toggleSidebar}>
        <img src={assets.hamburger} alt="menu" />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={toggleSidebar}>
          <img src={assets.cross} alt="Close" />
        </div>
        <ul className='sidebar-items'>
        <li onClick={toggleSidebar}>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li onClick={toggleSidebar}>

            <NavLink to="/sunglasses" activeClassName="active">Sunglasses</NavLink>
          </li>
          <li onClick={toggleSidebar}>
            <NavLink to="/eyeglasses" activeClassName="active">Eyeglasses</NavLink>
          </li>
          <li onClick={toggleSidebar}>
            <NavLink to="/contact-lens" activeClassName="active">Contact Lens</NavLink>
          </li>
        
        </ul>
      </div>

      
      <ul className='navbar-items'>
      <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sunglasses" activeClassName="active">Sunglasses</NavLink>
        </li>
        <li>
          <NavLink to="/eyeglasses" activeClassName="active">Eyeglasses</NavLink>
        </li>
        <li>
          <NavLink to="/contact-lens" activeClassName="active">Contact Lens</NavLink>
        </li>
       
      </ul>

      <div className='user-container'>
      

     <NavLink to="/cart" activeClassName="active"><img src={assets.cart_icon} alt="cart" className="icon" /></NavLink>

        
        <img src={assets.user} alt="user" className="icon" />
      </div>
    </div>
  );
};

export default Header;
