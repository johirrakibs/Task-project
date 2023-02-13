import React from 'react';
import Logo from './img/Rectangle2.png';
import "./bannarStyle.css"

const Banner = () => {
  return (
    <div className='relative'>
      <div className='banner-logo'>
        <img className='banner-img' src={Logo} />
      </div>

      <div className='banner-text-div'>
        <p className='orginalTag'>ORGINAL SMOOTHIES</p>
        <h1 className='maim-text'>Make the Most of Morning</h1>
        <p className='quickest'>The quickest, easiest way to get in your fruits and veggies</p>
        <div className='bttb-div'>
          <button className='bttn-one'>Learn More</button>
          <button className='bttn-two'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Banner;
