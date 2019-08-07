import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Navbar/Navbar.css';
import Jumbotron from '../Jumbotron/Jumbotron';
import Cards from '../Cards/Cards';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav id="navigation" className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><FontAwesomeIcon icon="bars" size="lg" id="menu-toggler" /></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto" id="navbar-right">
                            <Link to="/register">
                                <button className="btn">REGISTER</button>
                            </Link>
                            <Link to="/login">
                                <button className="btn">LOGIN</button>
                            </Link>
                        </ul>
                    </div>
                </nav>

                <Jumbotron />
                <Cards />
            </div>
        )
    }
}

export default Navbar;