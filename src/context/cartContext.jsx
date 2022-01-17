import { createContext, useState } from "react";

export const cartContext = createContext ([])


export const CartContexProvider = ({children})=>{
    //Estados y funciones
    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (items)=>{
        setCartList(items)
    }
    return(
        <cartContext.Provider value={{
            cartList,
            agregarAlCarrito
        }}>
            {children}
        </cartContext.Provider>
    )
}