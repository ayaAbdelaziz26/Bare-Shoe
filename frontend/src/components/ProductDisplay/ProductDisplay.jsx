import React, { useContext } from 'react'
import star from '../Assets/star_icon.png'
import './productDisplay.css'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const {product}=props;
    const{addToCart}=useContext(ShopContext);

    const addToCartHandle=()=>{
      if(localStorage.getItem('auth-token')){
        addToCart(product.productNum);
      }

      else{
        window.location.replace('/login');
      }
    }
  return (
    <div className='product-display'>
        <div className="product-display-left">
            <img src={product.imageURL} alt="my product" />
        </div>

        <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display_right_stars">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
        </div>
        <p>Gender: {product.gender}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>

        <div className="product-display_right_prices">
            <p>{product.price}$</p>
            <p className='old_one'>{product.oldPrice}$</p>
        </div>

        <div className="product-display_right_size_parent">
            <h2>Select size</h2>
          <select name="size">
            <option value="">26</option>
            <option value="">27</option>
            <option value="">28</option>
            <option value="">29</option>
            <option value="">30</option>
            <option value="">31</option>
            <option value="">32</option>
            <option value="">33</option>
            <option value="">34</option>
            <option value="">35</option>
            <option value="">36</option>
            <option value="">37</option>
            <option value="">38</option>
            <option value="">39</option>
            <option value="">40</option>
            <option value="">41</option>
            <option value="">42</option>
            <option value="">43</option>
            <option value="">44</option>
            <option value="">45</option>
            <option value="">46</option>
          </select>
        </div>
        <button onClick={()=>addToCartHandle()}>Add to cart</button>
        </div>
      </div>
  )
}

export default ProductDisplay
