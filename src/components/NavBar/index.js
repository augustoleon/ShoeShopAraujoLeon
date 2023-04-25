import React from 'react';
import { CartWidget } from '../CartWidget';
import {Link} from 'react-router-dom';

import './navBarStyle.css';

export const NavBar = () => {
    return <div>
                <nav className="navbar navbar-expand-lg navbar-black bg-dark navBarStyle">
                    <div className='shoeShopButton'>
                        <Link to='/' className="navbar-brand">ShoeShop</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home
                            </Link>                    </li>
                        <li className="nav-item">
                            <Link  className="nav-link" to='/category/nike'>Nike</Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link" to='/category/adidas'>Adidas</Link>
                        </li>
                        
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <CartWidget/>
                        </form>
                    </div>
                </nav>            
            </div>;
    
}