import React ,{useState}from 'react'
import products from '../data.js'
import Card from './Card'
const Amazone = () => {

  return (
    <section>
        {products.map((product)=> (
        <Card key={product.id} product={product}/>
        ))}
    </section>
  )
}

export default Amazone