import React , {useEffect, useState} from 'react';
import './App.css';
import Amazone from './components/Amazone';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import {CartProvider} from 'react-use-cart'
import products from './data'
function App() {
  const [show, setShow] = useState(true)
  const [product, setProducts] = useState(products)
const [cart, setCart] =useState([])

  return (
<>
<CartProvider>
<Navbar setShow={setShow} count={cart.length}  />
{show ? <Amazone/> : <Cart  />}
</CartProvider>
</>
  );
}

export default App;
