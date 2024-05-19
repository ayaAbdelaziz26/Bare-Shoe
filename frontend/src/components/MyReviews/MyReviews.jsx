import React from 'react'
import ReviewItem from '../ReviewItem/ReviewItem'
import './myReviews.css'
import review1 from '../Assets/review-1.jpg'
import review2 from '../Assets/review-2.jpg'
import review3 from '../Assets/review-3.jpg'

const MyReviews = () => {
  return (
    <div className="review">
        <h1>WHAT OUR CUSTOMERS SAYING?</h1>
        <div className="reviews-box">
            <ReviewItem review="I love this product so much Its a high quality product, I received it like I watch on the website completely and the size is suitable to me it will not the lst time shopping here." image={review1} name="Dan Smith"/> 
            <ReviewItem review="I love this product so much Its a high quality product, I received it like I watch on the website completely and the size is suitable to me it will not the lst time shopping here." image={review2} name="Alphonso Davies"/>
            <ReviewItem review="I love this product so much Its a high quality product, I received it like I watch on the website completely and the size is suitable to me it will not the lst time shopping here." image={review3} name="Diana Robertson"/>
    </div>
</div>
  )
}

export default MyReviews
