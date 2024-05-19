import React, { useContext } from 'react'
import sale from '../Assets/sale.png'
import './product.css'
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <div className="product">
    <img src={props.image} alt="my product"/>
    <p>{props.name}</p>
    <p>{props.gender}</p>
    <div className='product-prices'>
    <p>{props.price}</p>
    <p className='oldPrice'>{props.oldPrice}</p>
    </div>
    <Link to={`/product/${props.id}`} style={{ textDecoration: 'none' }}>
      <button>Show details<img src={sale}/></button>
      </Link>
</div>
  )
}

export default Product;
