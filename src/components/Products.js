import React from 'react';
import Img1 from './img/Rectangle 8.png';
import Img2 from './img/Rectangle 8 (2).png';
import Img3 from './img/Rectangle 8 (3).png';
import Img4 from './img/Rectangle 8 (1).png';
import './productStyle.css';

const Products = () => {
  return (
    <div className='product-main-div'>
      <div className='main-cointainer '>

        <div className='grid grid-rows-2'>
          <div className='relative'>
            <img src={Img1} />
            <div className='product-text-main-div'>
              <h3 className='header-textt'>Juices</h3>
              <p className='mini-text'>This smoothie totally changed my world. Our juices are made from the freshest fruits and natural ingredients. </p>
              <button className='shope-bttttn'>Shop Now</button>
            </div>
          </div>

          <div className='grid grid-cols-2'>
            <div className='relative'>
              <img src={Img2} />
              <div className='product-text-main-div'>
                <h3 className='header-textt'>Smoothies</h3>
                <p className='mini-text'>Very good for a Saturday morning breakfast!  </p>
                <button className='shope-bttttn'>Shop Now</button>
              </div>
            </div>
            <div className='relative'>
              <img src={Img3} />
              <div className='product-text-main-div'>
                <h3 className='header-textt'>Shakes</h3>
                <p className='mini-text'>Weirdly really good. These flavors work really well together. </p>
                <button className='shope-bttttn'>Shop Now</button>
              </div>
            </div>
          </div>

        </div>

        <div className='relative'>
          <img src={Img4} />
          <div className='product-text-main-div'>
            <h3 className='header-textt'>Seasonal Favorites</h3>
            <p className='mini-text'>The best of fresh, seasonal ingredients create healthy and satisfying breakfast smoothies all year round. Spring is here, which means we're harvesting fresh fruits and veggies for our seasonal favorites!</p>
            <button className='shope-bttttn'>Shop Now</button>
          </div>
        </div>

      </div>




    </div>
  )
}

export default Products;