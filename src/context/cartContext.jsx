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
        return cartList.some(product=>product.id === items.id)
    }


    const agregarAlCarrito = (items)=>{
        if(isInCart(items)){
            let nuevoArray = cartList.map(
                (product)=>{
                    if(items.id===product.id){
                        let cant=product.quantity + items.quantity
                        return({...product,quantity:cant})
                    }else{
                        return({...product})
                    }
            })
            setCartList(nuevoArray)
        }else{
            setCartList([...cartList, items])
        }
    }
    
    const modificarEnCarrito = (contador,id)=>{
        let array2 = cartList.map((product)=>{
            if(product.id ===id){
                return {...product,quantity:contador}
            }else{
                return product
            }
        })
        setCartList(array2)
    }


    const vaciarCarrito = ()=>{
        setCartList([])
    }
    
    const eliminarItemDelCarrito = (items)=>{
        let quedan = cartList.filter(product=>product.id !== items.id)
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
