import React from 'react'
import './reviewItem.css'
import star from '../Assets/star_icon.png'

const ReviewItem = (props) => {
  return (
    <div className="review-1">
    <div className="stars">
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
    </div>
        <p>{props.review}</p>
        <div className="review-prof">
            <img src={props.image} alt=""/>
            <h1>{props.name}</h1>
    </div>
</div>
  )
}
export default ReviewItem

