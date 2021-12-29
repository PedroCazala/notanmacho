import './App.css';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <Menu/>
      <ItemListContainer greeting="Hola soy Item List Container"/>
      <ItemCount stock={20} initial={1} onAdd={'Ya no tenemos estock de este producto'}/>
    </div>
  );
}

export default App;
