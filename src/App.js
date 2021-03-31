
import './App.css';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>

        <Route path= '/detail'>
        <ItemDetailContainer/>
        </Route>

        <Route path= '/list'>
        <ItemListContainer greeting= 'Component List here'/>
        </Route>

      </Switch>      
    </div>    
    </BrowserRouter>
  );
}

export default App;
