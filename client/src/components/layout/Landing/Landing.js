import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Landing.css';


const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Welcome to Life on Track</h1>
        </div>
      </div>
    </section>

    // <div>
    //   <div className="jumbotron jumbotron-fluid">
    //     <div className="container">
    //       <h1 className="display-4">LIFEonTRACK</h1>
    //       <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    //     </div>
    //   </div>
    // </div>

    // <section className='landing'>
    //   <div className='dark-overlay'>
    //     <div className='landing-inner'>
    //       <h1 className='x-large'>Welcome to Life on Track</h1>

    //       <div className='buttons'>
    //         <Link to='/register' className='btn btn-primary'>
    //           Sign Up
    //         </Link>
    //         <Link to='/login' className='btn btn-light'>
    //           Login
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
