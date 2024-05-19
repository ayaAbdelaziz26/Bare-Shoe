import React from 'react'
import cart from '../Assets/cart.png'
import './intro.css'
import Navbar from '../Navbar/Navbar'

const Intro = () => {
  return (
    <div className="first-section">
      <div>
      <Navbar/>
      </div>

    <div className="bestSeller">
        <button>BEST SELLER</button>
    </div>
    </div>
  )
}

export default Intro
