import { createContext, useContext, useState } from "react";

export const CartContext = createContext ([])

export const useCartContext=()=>{
    return useContext(CartContext) 
}

export const CartContexProvider = ({children})=>{
    //Estados y funciones
    const [cartList, setCartList] = useState([])
    const [totalCart, setTotalCart] =useState(0)

    const isInCart =(items)=>{
        return cartList.some(producto=>producto.id === items.id)
    }


    const agregarAlCarrito = (items)=>{
        if(isInCart(items)){
            let nuevoArray = cartList.map(
                (producto)=>{
                    if(items.id===producto.id){
                        let cant=producto.quantity + items.quantity
                        return({...producto,quantity:cant})
                    }else{
                        return({...producto})
                    }
            })
            setCartList(nuevoArray)
        }else{
            setCartList([...cartList, items])
        }
    }
    
    const modificarEnCarrito = (contador,id)=>{
        let array2 = cartList.map((producto)=>{
            if(producto.id ===id){
                return {...producto,quantity:contador}
            }else{
                return producto
            }
        })
        setCartList(array2)
    }


    const vaciarCarrito = ()=>{
        setCartList([])
    }
    
    const eliminarItemDelCarrito = (items)=>{
        let quedan = cartList.filter(producto=>producto.id !== items.id)
        setCartList(quedan)
    }

    function sumarTotalCart() {
        let arrayDeTotales = cartList.map(valor=>valor.price*valor.quantity)
        let total = arrayDeTotales.reduce((a,b)=>a+b)
        setTotalCart(total)
    }

    return(
        <CartContext.Provider value={{
            cartList,
            totalCart,
            agregarAlCarrito,
            vaciarCarrito,
            eliminarItemDelCarrito,
            modificarEnCarrito,
            sumarTotalCart
            // isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
