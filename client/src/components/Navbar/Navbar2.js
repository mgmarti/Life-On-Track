import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Navbar/Navbar2.css';


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav id="navigation" className="navbar dash-navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon2"><FontAwesomeIcon icon="bars" size="lg" id="menu-toggler" /></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto" id="navbar-right">
                            <Link to="/dashboard">
                                <button className="btn dash-btn">HOME</button>
                            </Link>
                            <Link to="/">
                                <button className="btn dash-btn">LOGOUT</button>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;