import React from 'react'
import './styles/Card.css'
import { useCart } from 'react-use-cart'
const Card = ({product }) => {
  const {addItem} = useCart()
    const {id , title, price , author, img} = product
  return (
    <div className='card ' style={{height:'400px'}}>
    <div className='image-box ' style={{width:"100%"}}>
    <img src={img} alt={title}/>
    </div>
    <div className='details ' 
    style={{height:"200px" , margin:"8px 0"}}>
        <p>{title}</p>
        <p >{author}</p>
        <p > price : {price}Rs</p>
        </div>
        <div>
          <button className='btn btn-primary' onClick={() => addItem(product)}>AddToCard</button>
        </div>
    </div>

  )
}

export default Card