import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/menu/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import Cart from './components/cart/Cart';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import { CartContexProvider } from './context/cartContext';

function App() {
  return (
    <CartContexProvider
      value={[]}>
      
    <BrowserRouter className="App">
      <NavBar/>
      <Routes>
        <Route exact  path='/' element={<ItemListContainer/>}/>
        <Route exact  path='/categoria' element={<ItemListContainer/>}/>
        <Route exact  path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route exact  path='/categoria/:categoria/:subcategoria' element={<ItemListContainer/>}/>
        
        <Route exact path='/detalle/:idDetalle'element={<ItemDetailContainer/>}/>
        
        <Route exact path='/carrito'element={<Cart/>}/>
        {/* <Route exact  path='/' element={}/>}/> */}
      </Routes>
    </BrowserRouter>

    </CartContexProvider>
  );
}

export default App;
