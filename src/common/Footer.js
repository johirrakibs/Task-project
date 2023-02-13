import React from 'react';
import './footer.css';



const Footer = () => {
  return (
    <>

      <footer >
        <div className='footer-main-div'>


          <div className='container'>


            <div className='box-logo'>
              <h1>About your store</h1>

              <p>We dare to be different and we invite you to do the same. We'd love you to join us on this colourful adventure of being you. You are here to be yourself. Fully and unapologetically.</p>
              <p>Now, let's show to the world what we are made of!</p>
              <div>
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-twitter icon'></i>
                <i className='fab fa-instagram icon'></i>
                <i className='fab fa-pinterest icon'></i>
              </div>
            </div>

            <div className='box-link'>
              <h1>Helpful Links</h1>
              <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Blog</li>

              </ul>
            </div>
            <div className='box-link'>
              <h1>Quick Shop</h1>
              <ul>
                <li>Blended</li>
                <li>Juices</li>
                <li>Original Smoothies</li>
                <li>Seasonal Favorites</li>

              </ul>
            </div>

            <div className='box-last'>
              <h1>Let's Stay in  touch</h1>
              <p>Sign up for exclusive offers, original stories, events and more.</p>
              <div className='right-row'>
                <input type='text' placeholder='Enter your email address' className='box-input' />
                <button className='box-btn'>Subscribe</button>
              </div>

            </div>

          </div>

        </div>
      </footer>

    </>
  )
}
export default Footer;