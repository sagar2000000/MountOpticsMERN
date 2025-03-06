import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets"; 

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [cartData, setCartData] = useState({});
  
  
  const addToCart = (_id) => {
    if (!cartData[_id]) {
      setCartData((prev) => ({ ...prev, [_id]: 1 }));
    } else {
      setCartData((prev) => ({ ...prev, [_id]: prev[_id] + 1 }));
    }
    console.log(cartData)
  };

  const removeFromCart = (_id) => {
    if (cartData[_id] > 0) {
      setCartData((prev) => ({ ...prev, [_id]: prev[_id] - 1 }));
    }
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const i in cartData) {
      console.log(i);
      if (cartData[i] > 0) {
        products.map((product) => {
          if (product._id == i) {
            let price = product.price;
            totalAmount += price * cartData[i];
          }
        });
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartData,
    addToCart,
    removeFromCart,
    getTotalAmount, 
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
