import imagenPrueba from '../assets/images/productos/1.png'
const productos = [
    {id:'1',nombre:'Remera', precio:230, img1:imagenPrueba,img2:'f',stock:10},
    {id:'2',nombre:'Pantalon', precio:250, img1:imagenPrueba,img2:'f',stock:45},
    {id:'3',nombre:'Ojotas', precio:800, img1:imagenPrueba,img2:'f',stock:5},
    {id:'4',nombre:'Mochila', precio:460, img1:imagenPrueba,img2:'f',stock:2},
    {id:'5',nombre:'Riñonera', precio:120, img1:imagenPrueba,img2:'f',stock:7}
]

export const getFetch = new Promise(
    (resolve,reject) =>{
        const condicion =true;
        if(condicion){
            setTimeout(()=>{
                resolve(productos)
            }, 2000)
        }else{
            reject('Error')
        }
    }
)