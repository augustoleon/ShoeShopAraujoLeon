
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
        <Route exact path= '/'>
        <ItemListContainer greeting= 'Component List here'/>
        </Route>

        <Route exact path='/category/:categoryId'>
          <ItemListContainer greeting= 'Shoe/es' />
        </Route>

        <Route path= '/item/:itemId'>
        <ItemDetailContainer/>
        </Route>


      </Switch>      
    </div>    
    </BrowserRouter>
  );
}

export default App;
