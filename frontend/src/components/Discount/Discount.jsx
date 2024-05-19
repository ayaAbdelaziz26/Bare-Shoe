import React from 'react'
import './discount.css'
import discount from '../Assets/discount.png'

const Discount = () => {
  return (
    <div className="discount">
        <div className="discount-left">
            <h1>GET 50% DISCOUNT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officia voluptatum laboriosam consectetur magnam, ipsam provident deleniti fugit a nobis ullam assumenda cumque natus labore dicta dolores, quam voluptatem ratione.</p>
            <button>Exolore more</button>
        </div>

        <div className="discount-right">
            <img src={discount} alt="Discount"/>
        </div>
    </div>
  )
}

export default Discount
