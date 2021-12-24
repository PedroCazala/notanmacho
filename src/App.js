import './App.css';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <ItemListContainer greeting="Hola soy Item List Container"/>
    </div>
  );
}

export default App;
