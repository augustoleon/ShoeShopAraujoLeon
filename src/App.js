
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
              <ItemListContainer greeting= 'Component List here'/>
            </Route>

            <Route exact path='/category/:categoryId'>
              <ItemListContainer greeting= 'Shoe/es' />
            </Route>

            <Route path= '/item/:itemId'>
              <ItemDetailContainer/>
            </Route>

            <Route path= '/cart'>
              {/* <div style={{fontFamily: 'Zen Dots', fontSize: '28px'}}> ¡Estamos a punto de terminar!</div> */}
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
