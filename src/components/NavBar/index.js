import React from 'react';
import { CardWidget } from '../CardWidget';
import {Link} from 'react-router-dom';

export const NavBar = ({item}) => {
    return <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' class="navbar-brand">ShoeShop</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <Link  class="nav-link" to='/category/nike'>Nike</Link>
                    </li>
                    <li class="nav-item">
                        <Link  class="nav-link" to='/category/adidas'>Adidas</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <Link to='/' class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Shoes
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`/item/1`} class="nav-link" href="#" tabindex="-1" aria-disabled="true">Detail</Link>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <CardWidget/>
                    </form>
                </div>
                </nav>            
        </div>;
    
}