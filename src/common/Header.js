import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Shop from './Shop'


const Header = () => {

  const [click, setClick] = useState(false);
  return (
    <>


      <nav class="p-3 ">
        <div class="container flex flex-row items-center justify-between mx-auto">
          <div>

            <h1 class="sself-center text-xl font-semibold whitespace-nowrap  ml-[20px] mr-[20px]">Lighteniam</h1>
          </div>

          <div className=" hidden w-full flex md:block md:w-auto md:flex">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li><Link to="/" className="block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-black md:p-0">Home</Link></li>
              <li><Link to="/shop" className="block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-black md:p-0"> <Shop /></Link></li>
              <li><Link to="/about" className="block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-black md:p-0">About</Link></li>
              <li><Link to="/blog" className="block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-black md:p-0">Blog</Link></li>
            </ul>

          </div>

          <div>
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">

              <li><i class="fa fa-search "></i></li>
              <li><Link to="/user"><i class="fa fa-user"></i></Link></li>
              <li><i class="fa fa-shopping-cart"></i></li>

            </ul>
          </div>
        </div>
        <button className='toggle hidden' onClick={() => setClick(!click)}>
          {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
        </button>
      </nav>

    </>
  )
}

export default Header;
