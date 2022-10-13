import React  from 'react'
import './styles/Navbar.css'
import {FaShoppingCart} from 'react-icons/fa'
import Cart from './Cart'
import { useCart } from 'react-use-cart'
const Navbar = ({  setShow}) => {
const {
  totalUniqueItems
} = useCart()
  return (
   <nav>
    <div className="nav-box">
    <span className="my-shop" onClick={() => setShow(true)}> My Shopping  </span>
    <div className="cart"  onClick={()=> setShow(false)} >
      <span><FaShoppingCart className='icon'/></span>
      <span className='counter '> {totalUniqueItems}  </span>
    </div>
    </div>
   </nav>
  )
}

export default Navbar