import { useState } from 'react';
import Cart from './components/Cart.jsx';
import FoodList from './components/FoodList.jsx';
import Header from './components/Header.jsx'
import Context from './Context.js';
import Checkout from './components/Checkout.jsx';
 
function App() {

  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCheckoutPage, setShowCheckoutPage] = useState(false);


  function displayCart () {
    setShowCart(true);
  };

  function hideCart() {
    setShowCart(false)
  };


  
function addToCart(meal) {
    // Assuming cart is declared and initialized somewhere in your code
    const existingMealIndex = cart.findIndex(mealInCart => mealInCart.id === meal.id);

    if (existingMealIndex !== -1) {
        cart[existingMealIndex] = { ...cart[existingMealIndex], quantity: cart[existingMealIndex].quantity + 1 };
    } else {
        // Assuming setCart function is available and accepts an array of meals with their quantities
        setCart(prevMeals => {
          return [{ ...meal, quantity: 1 }, ...prevMeals]
        });
    }
}
function increaseMealQuantity(id) {
  setCart(prevMeals => {
      const updatedMeals = prevMeals.map(prevMeal => {
          if (prevMeal.id === id) {
              // Increment quantity by 1 for the meal with the matching id
              return { ...prevMeal, quantity: prevMeal.quantity + 1 };
          }
          return prevMeal;
      });
      return updatedMeals;
  });
}
function decreaseMealQuantity(id){
    setCart(prevMeals => {
      const updatedMeals = prevMeals.map(prevMeal => {
          if (prevMeal.id === id) {
              // Decrement quantity by 1 for the meal with the matching id
              return { ...prevMeal, quantity: prevMeal.quantity - 1 };
          }
          return prevMeal;
      }).filter(meal => meal.quantity > 0);
      return updatedMeals;
  });
}

function displayCheckoutPage () {
  setShowCheckoutPage(true)
}
function onHideCheckoutPage () {
  setShowCheckoutPage(false)
}


  const contextValue = {
    cartItems: cart,
    userData: [],
  }

  return (
    <Context.Provider value={contextValue}>
    <Header onShowCart={displayCart} cartCount={cart.length}/>
    {showCart && !showCheckoutPage && <Cart onHideCart={hideCart} meals={cart} onIncrease={increaseMealQuantity} onDecrease={decreaseMealQuantity} onDisplayCheckout={displayCheckoutPage}/>}
    {showCheckoutPage && <Checkout onClose={onHideCheckoutPage} /> }
    <FoodList onAddToCart={addToCart}/>
    </Context.Provider>
  );
}

export default App;
