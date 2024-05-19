import React from 'react'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import Navbar from '../components/Navbar/Navbar'

const ProductInfo = () => {
  const {info}=useContext(ShopContext);
  const {productID}=useParams();
  const product= info.find((e)=>e._id===productID);
  return (
    <div>
      <Navbar/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default ProductInfo

