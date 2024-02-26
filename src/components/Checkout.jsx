import { useContext, useEffect, useState } from "react";
import Context from "../Context";


export default function Checkout({onClose}) {
  const {cartItems } = useContext(Context);
  const [totalAmount, setTotalAmount] = useState(0);
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    street: '',
    postalCode: '',
    city: ''
  });

  useEffect(() => {
    let Prices = 0;

    cartItems.forEach(meal => {
      Prices += +meal.price * +meal.quantity
    });

    setTotalAmount(Prices);

  }, [cartItems]);

  function handleSubmit (event) {
    event.preventDefault();

    console.log(userData);
  };

  function handleDataChange(type, value) {
    setUserData(prevData => ({...prevData, [type]: value}) )
  };



  return (
    <div className="fixed top-0 bottom-0 w-full flex justify-center items-center text-black">
      <div className="absolute w-full h-full bg-black bg-opacity-60"></div>
      <div className="relative bg-amber-100 h-3/5 w-7/12 rounded overflow-hidden p-4">
        <h2 className="font-bold pb-2 text-xl">Checkout</h2>
        <h3 className="mb-2 text-base">
          Total Amount: <span>$ {totalAmount}</span>
        </h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold text-xs" htmlFor="">
              Full Name
            </label>
            <input className="mb-2 w-60 h-6 border-2 rounded-sm pl-1" type="text" 
            value={userData.fullName} 
            onChange={(e) => handleDataChange('fullName', e.target.value)}/>
          </div>

          <div>
            <label className="block font-semibold text-xs" htmlFor="">
              E-Mail Address
            </label>
            <input className="mb-2 w-60 h-6 border-2 rounded-sm pl-1" type="text" 
            value={userData.email} 
            onChange={(e) => handleDataChange('email', e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-xs" htmlFor="">
              Street
            </label>
            <input className="mb-2 w-60 h-6 border-2 rounded-sm pl-1" type="text" 
            value={userData.street} 
            onChange={(e) => handleDataChange('street', e.target.value)} />
          </div>
          <div className="flex gap-4">
            <div>
              <label className="block font-semibold text-xs pl-1" htmlFor="">
                Postal Code
              </label>
              <input className="mb-2 w-35 h-6 border-2 rounded-sm pl-1" type="number" 
                   value={userData.postalCode} 
                   onChange={(e) => handleDataChange('postalCode', e.target.value)} />
            </div>
            <div>
              <label className="block font-semibold text-xs pl-1" htmlFor="">
                City
              </label>
              <input className="mb-2 w-35 h-6 border-2 rounded-sm" type="text"
              value={userData.city} 
              onChange={(e) => handleDataChange('city', e.target.value)} 
              />
            </div>
          </div>
        <div className="text-right">
          <button onClick={onClose}>Close</button>
          <button className="bg-yellow-400 px-3 py-1 rounded-md mx-4">
            Submit Order
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}
