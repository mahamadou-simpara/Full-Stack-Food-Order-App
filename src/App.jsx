import { useState } from 'react';
import Cart from './components/Cart.jsx';
import FoodList from './components/FoodList.jsx';
import Header from './components/Header.jsx'
import Checkout from './components/Checkout.jsx';
 
function App() {

  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);


  function displayCart () {
    setShowCart(true);
  };

  function hideCart() {
    setShowCart(false)
  };

  function addToCart(id) {
    console.log(id);
  }

  return (
    <>
    <Header onShowCart={displayCart} />
    {showCart && <Cart onHideCart={hideCart}/>}
    <Checkout />
    <FoodList onAddToCart={addToCart}/>
    </>
  );
}

export default App;
