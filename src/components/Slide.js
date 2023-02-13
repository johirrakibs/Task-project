import React from 'react';
import Image1 from "./img/Rectangle 6.png";
import Image2 from "./img/Rectangle 6 (1).png";
import Image3 from "./img/Vector (1).png";
import './slideStyle.css';

const Slide = () => {
  return (
    <div className="slide-main-div">
      <div className="silde-main-cointainer">

        <div className='img-div'>
          <img src={Image1} alt='' />
          <div className='sale'>
            <p className='sale-p'>Sale</p>
          </div>
          <div className='img-title-div'>
            <p className='img-para-div'>Ginger Grapefruit</p>
            <p>$4.00 USD</p>
          </div>
        </div>

        <div className='img-div'>
          <img src={Image2} alt='' />
          <div className='quick'>
            <p className='quick-p'>Quick View</p>
          </div>
          <div className='img-title-div'>
            <p>Grapefruit and Cinamon</p>
            <p>$4.00 USD $5.00 USD</p>
          </div>
        </div>



        <div className='img-div'>
          <img src={Image1} alt='' />
          <div className='sold'>
            <p className='sold-p'>Sold <br />out</p>
          </div>
          <div className='img-title-div'>
            <p>Ginger Grapefruit</p>
            <p>$4.00 USD</p>
          </div>
        </div>

        <div className='img-div'>
          <img src={Image1} alt='' />
          <div className='direction'>
            <img src={Image3} />
          </div>
          <div className='img-title-div'>
            <p>Ginger Grapefruit</p>
            <p>$4.00 USD</p>
          </div>
        </div>
      </div>


      <div className='btn-div'>
        <button className='btn'>View All</button>
      </div>
    </div>
  )
}
export default Slide;

