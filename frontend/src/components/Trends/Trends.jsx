import React, { useContext } from 'react'
import './trends.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

const Trends = () => {
  const[trend,setTrend]=useState([]);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/trending')
      .then(res=>setTrend(res.data))
      .catch(err=>err);
  },[]);
  return (
    <div className="third-section">
    <div className="trend-products">
        <h1>TRENDING PRODUCTS</h1>
        <button>Explore more</button>
    </div>

    <div className="show-trend-products">
     {
      trend.map((item)=>{
        return <Product image={item.imageURL} price={item.price+"$"} oldPrice={item.oldPrice+"$"} name={item.name}  gender={item.gender} id={item._id}/>
      })
     }
    </div>
</div>
  )
}

export default Trends
