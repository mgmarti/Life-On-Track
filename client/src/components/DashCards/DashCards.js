import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DashCards.css';

class DashCard extends Component {
    render() {
        return (
            <div>
                <div className="dash-container">
                    <div className="dashcard-container">
                        <div id="dashcard-container">
                            <div className="dashcard">
                                <div className="dashcard-body">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon='tasks' size="5x" className="icons" />
                                    </div>
                                    <h5 className="dashcard-title"> To - dos </h5>
                                    <p className="dashcard-text">
                                        Every to do that has been set to be repeated on a given day is shown on the daily page.
                                    </p>
                                </div>
                            </div>
                            <div className="dashcard">

                                <div className="dashcard-body">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon='heartbeat' size="5x" className="icons" />
                                    </div> <h5 className="dashcard-title" >
                                        Health
                                    </h5>
                                </div>
                            </div>
                            <div className="dashcard">
                                <div className="dashcard-body">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon='male' size="5x" className="icons" /> <FontAwesomeIcon icon='child' size="3x" className="icons" />
                                        <FontAwesomeIcon icon='female' size="5x" className="icons" />
                                    </div>
                                    <h5 className="dashcard-title"> Family </h5>
                                    <p className="dashcard-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel eaque, magnam soluta consectetur repudiandae voluptas. </p>
                                </div>
                            </div>
                            <div className="dashcard">
                                <div className="dashcard-body">
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon='dollar-sign' size="5x" className="icons" />
                                    </div>
                                    <h5 className="dashcard-title"> Finances </h5>
                                    <p className="dashcard-text">
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

export default DashCard;