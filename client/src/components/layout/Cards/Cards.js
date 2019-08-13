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
                            <h1 className='x-large'>Welcome to Life On Track</h1>
                        </div>
                        <div id="card-container">
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon='list' size="5x" className="icons" />
                                    </div>
                                    <h3 className="card-title"> Track of daily to - dos </h3>
                                    <p className="card-text">
                                        Every to do that has been set to be repeated on a given day is shown on the daily page.
                                    </p>
                                </div>
                            </div>
                            <div className="card">

                                <div className="card-body">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon='thumbs-up' size="3x" className="icons" />
                                    </div> <h3 className="card-title" > Smash Through Your Goals! </h3>
                                    <p className="card-text">
                                        Easily break bad habits like smoking, drinking or nail biting, or build positive habits like fitness, meditation or reading.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon='check' size="3x" className="icons" />
                                    </div> <h3 className="card-title"> Log your progress anywhere. </h3>
                                    <p className="card-text">
                                        Life on Track lets you log progress everywhere.
                                    </p>
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