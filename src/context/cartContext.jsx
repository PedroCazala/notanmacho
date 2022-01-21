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
        // console.log('isInCart',isInCart(items.id));
        // if(isInCart(items.id)){
            

        //     setCartList( 
        //         cartList.map((productoEnCart)=>{
        //             if(items.id === productoEnCart.id){
        //                 console.log('modicacion de productoEnCart')
        //                 console.log('modicacion de productoEnCart', productoEnCart)
        //                 return {...items, cantidad: items.cantidad+productoEnCart.cantidad}
        //             }else{
        //                 console.log('Se agregó de producto')
        //                 console.log('Se agregó de producto', productoEnCart)
        //                 return items
        //             }
        //         })
        //     )
        // }
        const productoAModificar =cartList.find(producto=>producto.id === items.id)
        const productosQueQuedan =cartList.filter(producto=>producto.id !== items.id)
        if(productoAModificar){
            const cantidadVieja = productoAModificar.cantidad
            let cantidadNueva = cantidadVieja + items.cantidad

            let array = [...productosQueQuedan, {...productoAModificar, cantidad: cantidadNueva}]
            setCartList(array)
        }
        else{
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