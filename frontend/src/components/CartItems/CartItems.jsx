import React, { useContext } from 'react'
import './cartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {info,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems_options">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
        {
            info.map((e)=>{
                if(cartItems[e.productNum]>0){
                    return <div key={e._id}>
                        <div className="cartitems_items cartitems_options">
                            <img src={e.imageURL} alt="my product" className='cartitems_items_image'/>
                            <p>{e.name}</p>
                            <p>{e.price}</p>
                            <button className='cartitems_items_quantity'>{cartItems[e.productNum]}</button>
                            <p >{e.price*cartItems[e.productNum]}</p>
                            <img src={remove_icon} alt="remove icon" onClick={()=>{removeFromCart(e.productNum)}} className='cartitems_items_rmvicon'/>
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
              <div className="cartitems-total">
                <h1>Cart total</h1>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cartitems-total-item">
                <p>Shipping fee</p>
                <p>Free</p>
              </div>
              <hr/>
              <div className="cartitems-total-item">
                <p>Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>

            <div className="cartitems-promocode">
              <p>If you have a promocode enter it here</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder='Enter promocode here' />
                <button>Submit</button>
              </div>
            </div>
      </div>
      </div>
  )
}

export default CartItems
