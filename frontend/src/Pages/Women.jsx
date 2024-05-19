import React from 'react'
import Product from "../components/Product/Product";
import './CSS/shopCategory.css'
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Women = () => {
    const[womenInfo,setWomenInfo]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/gender/WOMEN')
        .then(res=>setWomenInfo(res.data))
        .catch(err=>err);
    },[]);

  return (
    <div>
      <Navbar/>
    <div className='shop-category'>
       {
       womenInfo.map((item)=>{
        return <div className='shop-category-item' key={item._id}>
          <Product image={item.imageURL} price={item.price+"$"} oldPrice={item.oldPrice+"$"} name={item.name}  gender={item.gender} id={item._id}/>
          </div>
       })}
    </div>
    </div>
  )
}

export default Women
