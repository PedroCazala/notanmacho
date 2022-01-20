import { createContext, useState } from "react";

export const CartContext = createContext ([])


export const CartContexProvider = ({children})=>{
    //Estados y funciones
    const [cartList, setCartList] = useState([])

    const isInCart = (idProd)=>{
        if(cartList.find(producto=>producto.id === idProd)){
            return true
        }
        else{
            return false
        }
    }


    const agregarAlCarrito = (items)=>{
        console.log('isInCart',isInCart(items.id));
        if(isInCart(items.id)){
            // if(cartList.find(producto=>producto.id === items.id)){
            //     setCartList([cartList,{...producto, cantidad: items.cantidad+producto.cantidad}])
            // }
            setCartList( 
                cartList.map((productoEnCart)=>{
                    if(items.id === productoEnCart.id){
                        console.log('modicacion de productoEnCart')
                        console.log('modicacion de productoEnCart', productoEnCart)
                        return {...items, cantidad: items.cantidad+productoEnCart.cantidad}
                    }else{
                        console.log('Se agregó de producto')
                        console.log('Se agregó de producto', productoEnCart)
                        return items
                    }
                })
            )
        }else{
            setCartList([...cartList, items])
            console.log('un producto que no estaba');
        }
    }
    console.log(cartList);

    const vaciarCarrito = ()=>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}