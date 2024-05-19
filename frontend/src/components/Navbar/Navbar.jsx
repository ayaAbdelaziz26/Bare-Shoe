import React, { useContext } from 'react'
import cart from '../Assets/cart.png'
import './navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import logo from '../Assets/logo_3.png'

const Navbar = () => {
  const{getTotalCartItems}=useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="navbar-lside">
      <img src={logo} alt="my logo" />
      </div>
    <div className="navbar-cside">
    <ul>
    <Link to='/' style={{textDecoration:'none'}}><li>HOME</li></Link>
    <Link to='/men' style={{textDecoration:'none'}}><li>MEN</li></Link>
    <Link to='/women' style={{textDecoration:'none'}}><li>WOMEN</li></Link>
    <Link to='/kids' style={{textDecoration:'none'}}><li>KIDS</li></Link>
    </ul>
    </div>

  <div className="navbar-rside">
    <Link to={'/cart'}><img src={cart} alt="" /></Link>
    <div className="cart-item">{getTotalCartItems()}</div>
    {localStorage.getItem('auth-token')
    ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
    <Link to={'/login'}><button>Login</button></Link>}
  </div>
</div>
  )
}

export default Navbar
