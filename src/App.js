import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/menu/Menu';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/itemDetail/ItemDetail';
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter className="App">
      <Menu/>
      <Routes>
        <Route exact  path='/' element={<ItemListContainer greeting="Hola soy Item List Container"/>}/>
        <Route exact path='/detalle'element={<ItemDetail/>}/>
        <Route exact path='/carrito'element={<Cart/>}/>
        {/* <Route exact  path='/' element={<ItemCount stock={20} initial={1} onAdd={'Ya no tenemos stock de este producto'}/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
