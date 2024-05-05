import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

export function StoreContextProvider(props) {
    const [cartitems, setcartitems] = useState({})

    const addTocart = (itemId) => {
        if (!cartitems[itemId]) {
            setcartitems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromcart = (itemId) => {
        setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartitems[item];
            }
        }
        return totalAmount;
    }
    // const value = useContext(MyContext);
    const contextvalue = {
        food_list,
        cartitems,
        setcartitems,
        addTocart,
        removeFromcart,
        getTotalCartAmount,
    }
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}
