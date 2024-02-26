import { createContext } from "react"; 


const Context = createContext({
    cartItems: [],
    CustomerData: () => {},
    totalPrice: 0,

}
    
);

export default Context;