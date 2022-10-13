import React from 'react'
import './styles/Cart.css'
import { useCart } from 'react-use-cart'
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart,
      } = useCart();
    if(isEmpty) return <h1 className='text-center'> Your cart is empty</h1>
  return (
   <div className='py-4 container '>
    <div className='row justify-content-center'>
        <div className='col-12 '>
        <h1>Cart ({totalUniqueItems}) total Items:({totalItems})</h1>
      <table className='table table-light table-hover m-0'>
<tbody >
 {items.map((item ) =>{
    return(
        <tr key={item.id}>
            <td><img src={item.img} alt={item.title} style={{height:'6rem'}} /></td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td> Quantity {item.quantity}</td>
 
        <td><button className='btn btn-info ms-2'  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button></td>
        <td><button className='btn btn-info ms-2'  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button></td>
       <td> <button className='btn btn-danger ms-2' 
        onClick={() => removeItem(item.id)}
        >Remove</button>
        </td>
       </tr>
    )
})}
</tbody>
      </table>
        </div>
        <div className='col-auto ms-auto mt-4'>
            <h2>TotalPrice : ${cartTotal}</h2>
        </div> 
        <div className='col-auto mt-4'>
            <button className='btn btn-danger '
            onClick={() => emptyCart()}>Clear Cart </button>
           <button className='btn btn-success ms-2 '>Buy Now</button>
        </div>
    </div>
   </div>
  )
}

export default Cart