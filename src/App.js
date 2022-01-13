import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/menu/Menu';
import ItemListContainer from './components/Item/ItemListContainer';
import Cart from './components/cart/Cart';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter className="App">
      <Menu/>
      <Routes>
        <Route exact  path='/' element={<ItemListContainer greeting="Hola soy Item List Container"/>}/>
        <Route exact  path='/categoria/:categoria' element={<ItemListContainer greeting="Esto es una Categoria"/>}/>
        <Route exact  path='/categoria/:categoria/:subcategoria' element={<ItemListContainer greeting="Esto es una subcategoria"/>}/>
        
        <Route exact path='/detalle/:idDetalle'element={<ItemDetailContainer/>}/>
        
        <Route exact path='/carrito'element={<Cart/>}/>
        {/* <Route exact  path='/' element={}/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
