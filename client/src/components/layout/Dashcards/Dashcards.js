import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Dashcards.css';

class Dashcard extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="dashcard-container">
                    <div className="dashcard-add">
                            <div className="dashcard-body">
                                <FontAwesomeIcon icon='plus' size="4x" className="icons" />
                                <h2 className="dashcard-title">Add New Category</h2>
                                {/* <div className="button-container">
                                    <Link to='/create-profile' className='my-1'>
                                        <button type="button" className="btn button-bg">Add Category</button>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                        <div className="dashcard">
                            <div className="dashcard-body">
                                <FontAwesomeIcon icon='male' size="4x" className="icons" /> <FontAwesomeIcon icon='child' size="3x" className="icons" />
                                <FontAwesomeIcon icon='female' size="4x" className="icons" />
                                <h2 className="dashcard-title">Family</h2>
                                <div className="button-container">
                                    <Link to='/goals' className='my-1'>
                                        <button type="button" className="btn button-bg">Add</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="dashcard">
                            <div className="dashcard-body">
                                <FontAwesomeIcon icon='dollar-sign' size="4x" className="icons" />
                                <h2 className="dashcard-title">Finances</h2>
                                <div className="button-container">
                                    <Link to='/goals' className='my-1'>
                                        <button type="button" className="btn button-bg">Add</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="dashcard">
                            <div className="dashcard-body">
                                <FontAwesomeIcon icon='tasks' size="4x" className="icons" />
                                <h2 className="dashcard-title">To-Do</h2>
                                <div className="button-container">
                                    <Link to='/goals' className='my-1'>
                                        <button type="button" className="btn button-bg">Add</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="dashcard">
                            <div className="dashcard-body">
                                <FontAwesomeIcon icon='heartbeat' size="4x" className="icons" />
                                <h2 className="dashcard-title">Health</h2>
                                <div className="button-container">
                                    <Link to='/goals' className='my-1'>
                                        <button type="button" className="btn button-bg">Add</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="dashcard">
                            <div className="dashcard-body">
                                <FontAwesomeIcon icon='ghost' size="4x" className="icons" />
                                <h2 className="dashcard-title">Spiritual</h2>
                                <div className="button-container">
                                    <Link to='/goals' className='my-1'>
                                        <button type="button" className="btn button-bg">Add</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashcard;