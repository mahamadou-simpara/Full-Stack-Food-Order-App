import { createContext } from "react"; 


const Context = createContext({
    cartItems: [],
    userData: [],
    totalPrice: 0,

}
    
);

export default Context;