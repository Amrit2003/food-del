import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut hic corporis eum harum. Illo, porro aut. Doloribus odio aperiam nesciunt et ullam minima assumenda dicta, iusto suscipit dolorum ratione.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-312-2345</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>

        </div>
        <hr />
        <p className="footer-copyright">CopyRight 2024 @ Tomato.com - All Rights Reserved.</p>


    </div>
  )
}

export default Footer