import { createContext, useContext, useState } from "react";

export const CartContext = createContext ([])

export const useCartContext=()=>{
    return useContext(CartContext) 
}

export const CartContexProvider = ({children})=>{
    //Estados y funciones
    const [cartList, setCartList] = useState([])



    const agregarAlCarrito = (items)=>{
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
    const modificarEnCarrito = (contador,id)=>{
        let array2 = cartList.map((producto)=>{
            if(producto.id ===id){
                return {...producto,cantidad:contador}
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
    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            eliminarItemDelCarrito,
            modificarEnCarrito
            // isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}