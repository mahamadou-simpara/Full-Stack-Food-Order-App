// import React, { useContext, useEffect, useState } from "react";
// import Context from "../Context";

// export default function Checkout({ onClose }) {
//   const { cartItems } = useContext(Context);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [userData, setUserData] = useState({
//     fullName: {
//       value: "",
//       trigger: false,
//     },
//     email: {
//       value: "",
//       trigger: false,
//     },
//     street: {
//       value: "",
//       trigger: false,
//     },
//     postalCode: {
//       value: "",
//       trigger: false,
//     },
//     city: {
//       value: "",
//       trigger: false,
//     },
//   });

//   useEffect(() => {
//     calculateTotalAmount();
//   }, [cartItems]);

//   const calculateTotalAmount = () => {
//     const total = cartItems.reduce((acc, meal) => {
//       return acc + +meal.price * +meal.quantity;
//     }, 0);
//     setTotalAmount(total);
//   };

//   const handleDataChange = (type, value) => {
//     setUserData((prevData) => ({
//       ...prevData,
//       [type]: { ...prevData[type], value },
//     }));
//   };

//   const handleTrigger = (type) => {
//     setUserData((prevData) => ({
//       ...prevData,
//       [type]: { ...prevData[type], trigger: true },
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log(userData);
//     // Additional logic for submitting data
//   };

//   return (
//     <div className="fixed top-0 bottom-0 w-full flex justify-center items-center text-black">
//       <div className="absolute w-full h-full bg-black bg-opacity-60"></div>
//       <div className="relative bg-amber-100 h-3/5 w-7/12 rounded overflow-hidden p-4">
//         <h2 className="font-bold pb-2 text-xl">Checkout</h2>
//         <h3 className="mb-2 text-base">
//           Total Amount: <span>$ {totalAmount}</span>
//         </h3>
//         <form onSubmit={handleSubmit}>
//           <div>
//             {renderInputField(
//               "fullName",
//               "Full Name",
//               userData.fullName,
//               handleDataChange,
//               handleTrigger
//             )}
//           </div>
//           <div>
//             {renderInputField(
//               "email",
//               "E-Mail Address",
//               userData.email,
//               handleDataChange,
//               handleTrigger,
//               "email"
//             )}
//           </div>
//           <div>
//             {renderInputField(
//               "street",
//               "Street",
//               userData.street,
//               handleDataChange,
//               handleTrigger
//             )}
//           </div>
//           <div className="flex gap-4">
//             <div>
//               {renderInputField(
//                 "postalCode",
//                 "Postal Code",
//                 userData.postalCode,
//                 handleDataChange,
//                 handleTrigger,
//                 "number"
//               )}
//             </div>
//             <div>
//               {renderInputField(
//                 "city",
//                 "City",
//                 userData.city,
//                 handleDataChange,
//                 handleTrigger
//               )}
//             </div>
//           </div>
//           <div className="text-right">
//             <button onClick={onClose}>Close</button>
//             <button className="bg-yellow-400 px-3 py-1 rounded-md mx-4">
//               Submit Order
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// const renderInputField = (
//   type,
//   label,
//   userDataField,
//   handleDataChange,
//   handleTrigger,
//   inputType = "text"
// ) => (
//   <>
//     <label className="block font-semibold text-xs">{label}</label>
//     <input
//       className={`mb-2 w-60 h-6 border-2 rounded-sm pl-1 ${
//         userDataField.trigger && userDataField.value.length < 2
//           ? "border-red-500"
//           : ""
//       }`}
//       type={inputType}
//       onBlur={() => handleTrigger(type)}
//       value={userDataField.value}
//       onChange={(e) => handleDataChange(type, e.target.value)}
//     />
//   </>
// );















import { useContext, useEffect, useState } from "react";
import Context from "../Context";

export default function Checkout({ onClose }) {
  const { cartItems, CustomerData } = useContext(Context);
  const [totalAmount, setTotalAmount] = useState(0);
  const [userData, setUserData] = useState({
    fullName: {
      value: "",
      trigger: false,
    },
    email: {
      value: "",
      trigger: false,
    },
    street: {
      value: "",
      trigger: false,
    },
    postalCode: {
      value: "",
      trigger: false,
    },
    city: {
      value: "",
      trigger: false,
    },
  });

  const fullNameHasError =
    userData.fullName.trigger && userData.fullName.value.length < 4;
  const emailHasError =
    userData.email.trigger && !userData.email.value.includes("@");
    const streetHasError = userData.street.trigger && userData.street.value.length < 2;
  const cityHasError = userData.city.trigger && userData.city.value.length < 2;
  const postalCodeHasError = userData.postalCode.trigger && userData.postalCode.value.length < 2;

    useEffect(() => {
    calculateTotalAmount();
  }, [cartItems]);

  const calculateTotalAmount = () => {
    const total = cartItems.reduce((acc, meal) => {
      return acc + +meal.price * +meal.quantity;
    }, 0);
    setTotalAmount(total);
  };

  function handleSubmit(event) {
    event.preventDefault();

    
    if(userData.email.value.length < 4 || userData.fullName.value.length < 4 || fullNameHasError || emailHasError || cityHasError || streetHasError || postalCodeHasError){
      return;
    };

    const deriveData = {
      name: userData.fullName.value,
      email: userData.email.value,
      city: userData.city.value,
      ['postal-code']: +userData.postalCode.value,
      street: userData.street.value
    }
    CustomerData(deriveData);
  };

  function handleDataChange(type, value) {
    setUserData((prevData) => {
      return { ...prevData, [type]: { ...prevData[type], value: value } };
    });
  }

  function handleTrigger(type) {
    setUserData((prevData) => {
      return { ...prevData, [type]: { ...prevData[type], trigger: true } };
    });
  }


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
            <input
              className={`mb-2 w-60 h-6 border-2 rounded-sm pl-1 ${
                fullNameHasError ? "border-red-500" : ""
              }`}
              type="text"
              onBlur={() => handleTrigger("fullName")}
              value={userData.fullName.value}
              onChange={(e) => handleDataChange("fullName", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold text-xs" htmlFor="">
              E-Mail Address
            </label>
            <input
              className={`mb-2 w-60 h-6 border-2 rounded-sm pl-1 ${
                emailHasError ? "border-red-500" : ""
              }`}
              type="email"
              onBlur={() => handleTrigger("email")}
              value={userData.email.value}
              onChange={(e) => handleDataChange("email", e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-xs" htmlFor="">
              Street
            </label>
            <input
              className={`mb-2 w-60 h-6 border-2 rounded-sm pl-1 ${
                streetHasError ? "border-red-500" : ""
              }`}
              type="text"
              onBlur={() => handleTrigger("street")}
              value={userData.street.value}
              onChange={(e) => handleDataChange("street", e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <div>
              <label className="block font-semibold text-xs pl-1" htmlFor="">
                Postal Code
              </label>
              <input
                className={`mb-2 w-60 h-6 border-2 rounded-sm pl-1 ${
                  postalCodeHasError ? "border-red-500" : ""
                }`}
                type="number"
                onBlur={() => handleTrigger("postalCode")}
                value={userData.postalCode.value}
                onChange={(e) => handleDataChange("postalCode", e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold text-xs pl-1" htmlFor="">
                City
              </label>
              <input
                className={`mb-2 w-60 h-6 border-2 rounded-sm pl-1 ${
                  cityHasError ? "border-red-500" : ""
                }`}
                type="text"
                onBlur={() => handleTrigger("city")}
                value={userData.city.value}
                onChange={(e) => handleDataChange("city", e.target.value)}
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
