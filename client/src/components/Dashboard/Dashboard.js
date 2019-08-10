import React, { Component } from 'react';
import DashCard from '../DashCards/DashCards';
import Navbar2 from '../Navbar/Navbar2';
import './Dashboard.css';

class Dashboard extends Component {
    render(){
        return (
            <div>
                <div className="dashboard-container">
                    <Navbar2 />
                   <DashCard /> 
                </div>
            </div>
        )
    }
}

export default Dashboard;