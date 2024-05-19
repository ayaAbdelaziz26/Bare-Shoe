import Intro from "../components/Intro/Intro";
import Collections from "../components/Collections/Collections";
import React from 'react'
import Trends from "../components/Trends/Trends";
import AboutUs from "../components/AboutUs/AboutUs";
import Discount from "../components/Discount/Discount";
import MyReviews from "../components/MyReviews/MyReviews";
import Subscribe from "../components/Subscribe/Subscribe";

const Shop = () => {
  return (
    <div>
      <Intro/>
      <Collections/>
      <Trends/>
      <AboutUs/>
      <Discount/>
      <MyReviews/>
      <Subscribe/>
    </div>
  )
}

export default Shop
