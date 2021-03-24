
import './App.css';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer greeting= 'Component List here'/>
    </div>
  );
}

export default App;
