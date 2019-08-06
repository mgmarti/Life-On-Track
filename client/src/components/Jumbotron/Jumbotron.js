import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">LIFEonTRACK</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron; 