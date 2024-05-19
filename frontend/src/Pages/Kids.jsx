import React from 'react'
import Product from "../components/Product/Product";
import './CSS/shopCategory.css'
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Kids = () => {
    const[kidsInfo,setKidsInfo]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/gender/KIDS')
        .then(res=>setKidsInfo(res.data))
        .catch(err=>err);
    },[]);

  return (
    <div>
      <Navbar/>
    <div className='shop-category'>
       {
       kidsInfo.map((item)=>{
        return <div className='shop-category-item' key={item._id}>
          <Product image={item.imageURL} price={item.price+"$"} oldPrice={item.oldPrice+"$"} name={item.name}  gender={item.gender} id={item._id}/>
          </div>
       })}
    </div>
    </div>
  )
}

export default Kids
