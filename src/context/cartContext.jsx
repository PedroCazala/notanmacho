import { createContext, useContext, useEffect, useState } from "react";

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
                    console.log('itemsId',items.id)
                    console.log('productoId',producto.id)
                    if(items.id===producto.id){
                        let cant=producto.cantidad + items.cantidad
                        console.log(cant);
                        return({...producto,cantidad:cant})
                    }else{
                        return({...producto})
                    }
            })
            // cartList.forEach(
            //     isInCart(items)?
            //         producto=>
            //             nuevoArray.push({...producto,cantidad:producto.cantidad+items.cantidad})
            //             // console.log('entro al if')
            //         :
            //         producto=> nuevoArray.push({producto})
            // )
            setCartList(nuevoArray)
        }


        // const productoAModificar =cartList.find(producto=>producto.id === items.id)
        // const productosQueQuedan =cartList.filter(producto=>producto.id !== items.id)
        // if(productoAModificar){
        //     const cantidadVieja = productoAModificar.cantidad
        //     let cantidadNueva = cantidadVieja + items.cantidad
        
        //     let array = [...productosQueQuedan, {...productoAModificar, cantidad: cantidadNueva}]
        //     setCartList(array)
            
        // }
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

    function sumarTotalCart() {
        let arrayDeTotales = cartList.map(valor=>valor.price*valor.cantidad)
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