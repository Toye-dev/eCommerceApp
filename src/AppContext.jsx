// Centralized State Management:
// By using Context, the state (like navDrop) is now managed in one place (NavProvider).
// This makes it easy for any child component (like Home, NavDrop, etc.) to access and modify that state without having to pass it down as props manually.


import { createContext } from "react";
import { useState,  } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {  //passing all the children as props to give them access
    const [navDrop, setNavDrop] = useState(false);
     
    
    const handleNavView = () => {
        setNavDrop(true);
    }

    const handleNavHide = () => {
        setNavDrop(false);
    }

    const [cart, setCart] = useState([]); 

    const addToOrder = (item) => {
        setCart((prev) => {
            const existingItem = prev.find((product) => {return product.id === item.id})
            if (existingItem) {
                //if there is an existing item, return a new cart array of objetcs where we have increased the quantity of that item
                return prev.map((product) => {
                    return (
                    product.id === item.id 
                    ? {...product, quantity: product.quantity + 1 } 
                    : product //all products come back
                )
                })
            } else {
                // If item doesn't exist, add it to the cart with quantity 1
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    }

    const reduceOrder = (id) => {
        setCart(prev =>
            prev
                .map(item =>
                    item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item)
                .filter(item => item.quantity > 0 )
        );
    }

    console.log(cart);

    return (
        <AppContext.Provider value={{navDrop, handleNavHide, handleNavView, cart, addToOrder, reduceOrder}}>
            {children}
        </AppContext.Provider>
    );
}