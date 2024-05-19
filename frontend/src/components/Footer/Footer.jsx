import React from 'react'
import './footer.css'
import X from '../Assets/X.png'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'


const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-social">
        <img src={facebook} alt=""/>
        <img src={X} alt=""/>
        <img src={instagram} alt=""/>
    </div>

    <div className="footer-links">
        <div className="footer-links-quicklinks">
            <h1>QUICK LINKS</h1>
            <p>About us</p>
            <p>Categories</p>
            <p>Shop</p>
            <p>Contact us</p>
        </div>

        <div className="footer-links-contactinfo">
            <h1>CONTACT INFO</h1>
            <p>571-6139-5244</p>
            <p>Godfrey ST, New york</p>
            <p>BareShoe@gmail.com</p>
        </div>

        <div className="footer-links-opening">
            <h1>OPENING HOURS</h1>
            <p>Mon-Fri : 9:30 AM-8:00 PM</p>
            <p>Sat-Sun : 10:30 AM-3:00 PM</p>
        </div>
    </div>
</div>
  )
}

export default Footer
