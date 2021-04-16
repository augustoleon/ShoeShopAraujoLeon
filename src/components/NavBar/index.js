import React from 'react';
import { CardWidget } from '../CardWidget';
import {Link} from 'react-router-dom';

export const NavBar = ({item}) => {
    return <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand">ShoeShop</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to='/category/nike'>Nike</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to='/category/adidas'>Adidas</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to='/' className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Shoes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/item/1`} className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Detail</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <CardWidget/>
                    </form>
                </div>
                </nav>            
        </div>;
    
}