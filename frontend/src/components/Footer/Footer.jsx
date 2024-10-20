import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="about-store">
        <img src={assets.logomount} alt="MountOptics Logo" />
        <p>
          Welcome to MountOptics, your premier online destination for stylish and
          high-quality eyewear in Nepal. We understand that your eyes are your windows
          to the world, and we're committed to providing a diverse selection of glasses
          that not only enhance your vision but also reflect your unique style.
        </p>
      </div>

      <ul className="shop">
        <p>Shop</p>
        <Link to="/sunglasses"><li>Sunglasses</li></Link>
        <Link to="/eyeglasses"><li>Eyeglasses</li></Link>
        <Link to="/contact-lens"><li>Contact lens</li></Link>
      </ul>

      <div className="connect">
        <h3>Connect with us</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/sagar___299/profilecard/?igsh=MTBmM3F1amlvMGp6NQ==">
            <img src={assets.instagram} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/share/HGwRcdXaDFFcRYVq/?mibextid=LQQJ4d">
            <img src={assets.facebook} alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
