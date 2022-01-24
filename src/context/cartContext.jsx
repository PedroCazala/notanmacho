import { createContext, useContext, useState } from "react";

export const CartContext = createContext ([])

export const useCartContext=()=>{
    return useContext(CartContext) 
}

export const CartContexProvider = ({children})=>{
    //Estados y funciones
    const [cartList, setCartList] = useState([])

    const isInCart =(items)=>{
        return cartList.some(producto=>producto.id === items.id)
    }


    const agregarAlCarrito = (items)=>{

        // if(isInCart(items)){
        //     let array3= 
        //     cartList.forEach(producto=>{
        //         if(isInCart(items)){
        //             // let array2 = cartList.map(producto=>{
        //                 if(isInCart(items)){
        //                     return({...producto,cantidad:10}) 
        //                 }else{
        //                     return(producto)
        //                 }
        //             // })
        //             // setCartList(array2)
        //         //     console.log('se actualizo la canridad de', producto.name)
        //         //     let cantidadNueva = producto.cantidad + items.cantidad
        //         //     console.log('cantidad nueva', cantidadNueva)
        //         //  return({...producto})
        //         // console.log('el id es:',producto.id)
        //         // }
        //         // else{
        //         //     console.log('el id es:',producto.id)
        //         //     // console.log('se dejó igual a:', producto.name)
        //         //     // return({...producto})
        //         // }
        //         }
        //     })
        //     setCartList(array3)
        //         }else{
        //             console.log('se agregó un producto que no estaba en cart', items.name)
        //             setCartList([...cartList,{...items}])
        //         }
        //     // })
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