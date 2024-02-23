import { useEffect, useState } from "react"

export default function Cart ({onHideCart, meals, onIncrease, onDecrease, onDisplayCheckout}) {
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let total = 0; // Initialize total outside the map function
        meals.forEach(meal => {
            total += +meal.price * meal.quantity; // Accumulate the total for each meal
        });
        setTotalAmount(total); // Set the total amount after calculating for all meals
    }, [meals]);       
    
    console.log(meals.length);
    const fallbackMessage = meals.length <= 0;

    console.log(fallbackMessage);

    return <div className="fixed top-0 bottom-0 w-full flex justify-center items-center text-black" >
        <div  className="absolute w-full h-full bg-black bg-opacity-60"  onClick={onHideCart}></div>
        <div className="relative bg-amber-50 h-3/6 w-7/12 rounded overflow-hidden p-4">
            <h2 className="font-bold pb-2 text-xl">Your Cart</h2>
            {fallbackMessage && <p className="mb-24 text-center">Your cart is empty...</p>}
            {!fallbackMessage && <ul className="overflow-y-auto h-32">
                {meals.map(meal =>  <li className="flex justify-between items-center font-semibold" key={meal.id}>
                    <div className="flex text-sm">
                        <h3 className="pr-1">{meal.name} </h3><span className="pr-2">- {meal.quantity} </span> <span className="pr-1">x</span><span className="pr-1">${meal.price}</span>  
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <button className="flex h-4 w-4 items-center justify-center text-yellow-500 bg-black px-1 rounded-full" onClick={() => onDecrease(meal.id)}>-</button><span>{meal.quantity}</span><button className="flex h-4 w-4 items-center justify-center text-yellow-500 bg-black px-1 rounded-full" onClick={() => onIncrease(meal.id)}>+</button>
                    </div>
                </li> )}
              
            </ul>}
            {<h2 className="text-right py-4 ">${totalAmount}</h2>}
            <div className="text-right">
                <button onClick={onHideCart}>Close</button>
                <button className="bg-yellow-300 px-2 py-1 rounded-lg ml-4" onClick={onDisplayCheckout}>Got to Checkout</button>
            </div>
        </div>
    </div>
}