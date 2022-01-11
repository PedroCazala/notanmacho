// import imagenPrueba from '../public/./assets/images/productos/1.png'
const productos = [
    {id:'1',
    nombre:'Remera Narnaja',
    precio:230,
    img1:'./assets/images/productos/1.png',
    img2:'f',
    categoria:'remeras',
    stock:10},

    {id:'2',
    nombre:'Remera Verde',
    precio:230,
    img1:'./assets/images/productos/remeraVerde.jpg',
    img2:'f',
    categoria:'remeras',
    stock:10},

    {id:'3',
    nombre:'Pantalon Babucha',
    precio:250,
    img1:'./assets/images/productos/pantalonBabucha.jpg',
    img2:'f',
    categoria:'pantalones',
    stock:45},

    {id:'4',
    nombre:'Pantalon Babucha',
    precio:250,
    img1:'./assets/images/productos/pantalonCalsa.jpg',
    img2:'f',
    categoria:'pantalones',
    stock:45},

    {id:'5',
    nombre:'Ojotas',
    precio:800,
    img1:'./assets/images/productos/1.png',
    img2:'f',
    categoria:'ojotas',
    stock:5},

    {id:'6',
    nombre:'Ojotas',
    precio:800,
    img1:'./assets/images/productos/1.png',
    img2:'f',
    categoria:'ojotas',
    stock:5},
    // {id:'5',nombre:'Mochila', precio:460, img1:'./assets/images/productos/1.png',img2:'f',categoria:'ropa',stock:2},
    // {id:'6',nombre:'Riñonera', precio:120, img1:'./assets/images/productos/1.png',img2:'f',categoria:'ropa',stock:7}
]

export const getFetch = new Promise(
    (resolve,reject) =>{
        const condicion =true;
        if(condicion){
            setTimeout(()=>{
                resolve(productos)
            }, 1000)
        }else{
            reject('Error')
        }
    }
)