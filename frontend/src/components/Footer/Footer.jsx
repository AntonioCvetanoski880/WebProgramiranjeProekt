import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt="" />
           <p>At Tomato, we believe that great food brings people together. Our mission is to deliver fresh, delicious meals from your favorite local restaurants straight to your door. With a focus on quality and convenience, we’re here to make your dining experience enjoyable and hassle-free. Join us on a flavorful journey—one delivery at a time!</p>
           <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+389 70 123 456</li>
                <li>contact@tomato.com</li>
            </ul>
        </div> 
      </div>
      <hr />
      <p className="footer-copyright">Copyright © 2024 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
