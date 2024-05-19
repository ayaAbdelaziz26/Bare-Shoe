import React from 'react'
import aboutus from '../Assets/aboutus.jpg' 
import './aboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us">
    <div className="about-us-left">
    <h1>ABOUT US</h1>
    <h2>WE PROVIDE HIGH QUALITY SHOES</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis dolores ipsam esse aperiam ad adipisci, facere dicta voluptatum nam natus voluptate. Libero delectus eveniet illo consectetur distinctio, nostrum quaerat ipsum!</p>
    <button>Read more</button>
    </div>
    
    <div className="about-us-right">
        <img src={aboutus} alt="About us"/>
    </div>
</div>
  )
}

export default AboutUs
