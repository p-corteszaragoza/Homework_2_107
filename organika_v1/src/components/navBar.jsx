import React, { Component } from 'react'; //imrc
import "./navBar.css"
import Catalog from './catalog';

class NavBar extends Component { //cc
    state = {  };

    render() { 
        return ( 
           /* <div classNameName="navbar-page">
                <ul>
                    <li><a className="active" href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>*/


            <nav className="navbar-page navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'rgb(100 170 130)'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">Organika</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/#">Catalog</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">About us</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>


         );
    }
}
 
export default NavBar;