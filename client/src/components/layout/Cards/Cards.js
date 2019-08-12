import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cards.css';

class Cards extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card-container">
                        <div className="title-container">
                            <h1 className='x-large'>Welcome to Life on Track</h1>
                        </div>
                        <div id="card-container">
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon='list' size="5x" className="icons" />
                                    </div>
                                    <h5 className="card-title"> Keep track of daily to - dos </h5>
                                    <p className="card-text">
                                        Every to do that has been set to be repeated on a given day is shown on the daily page.
                                    </p>
                                </div>
                            </div>
                            <div className="card">

                                <div className="card-body">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon='thumbs-up' size="5x" className="icons" />
                                    </div> <h5 className="card-title" > Lorem ipsum dolor sit. </h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel eaque, magnam soluta consectetur. </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon='check' size="5x" className="icons" />
                                    </div> <h5 className="card-title"> Lorem ipsum dolor sit. </h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel eaque, magnam soluta consectetur repudiandae voluptas. </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;