
import './App.css';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import {Form} from './components/Form';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path= '/'>
              <ItemListContainer greeting= '¡Elige lo mejor, sientete mejor!'/>
            </Route>

            <Route exact path='/category/:categoryId'>
              <ItemListContainer greeting= 'Shoes' />
            </Route>

            <Route path= '/item/:itemId'>
              <ItemDetailContainer/>
            </Route>

            <Route path= '/cart'>
              <Cart/>
            </Route>

            <Route path= '/form'>
              <Form/>
            </Route>

          </Switch>      
        </div>    

      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
