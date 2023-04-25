import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { CartProvider } from './context/CartContext';

import { NavBar } from './components/NavBar';
import { CarouselView } from './components//CarouselView';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import {Form} from './components/Form';

import { Cart } from './components/Cart';
import './App.css';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <div className="App">
          <NavBar/>
          <CarouselView />
          <Switch>
            <Route exact path= '/'>
              <ItemListContainer greeting= '¡Elige lo mejor!'/>
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
