import React from 'react'
import './Explore.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Explore = () => {
  return (
    <div className='explore-container'>

      <div className="explore-eyeglassses">
       <img src={assets.eyeglasses} alt="" />
       <h3>Our Hottest Collections</h3>
       <h1>Eyeglasses</h1>
       <h4><Link to='/eyeglasses'>VIEW MORE</Link></h4>
      </div>
      <div className='explore-sunglasses'>
       <img src={assets.sunglasses} alt="" />
       <h3>Our Hottest Collections</h3>
       <h1>Sunglasses</h1>
      <h4><Link to='/sunglasses'>VIEW MORE</Link></h4>
      </div>

    </div>
  )
}

export default Explore