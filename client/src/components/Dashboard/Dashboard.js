import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Dashcard from '../layout/Dashcards/Dashcards';
import '../layout/Dashcards/Dashcards.css';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
      // <Fragment>
      //   <h1 className='large text-primary'>Dashboard</h1>
      //   <p className='lead'>
      //     <i className='fas fa-user' /> Welcome {user && user.name}
      //   </p>
      //   {profile !== null ? (
      //     <Fragment>
      //       <DashboardActions />

      //       <div className='my-2'>
      //         {/* <button className='btn btn-danger' onClick={() => deleteAccount()}>
      //         <i className='fas fa-user-minus' /> Delete My Account
      //       </button> */}
      //       </div>
      //     </Fragment>
      //   ) : (
      //       <Fragment>
      //         <p>You have not yet setup a profile, please add some info</p>
      //         <Link to='/create-profile' className='btn btn-primary my-1'>
      //           Create Profile
      //     </Link>
      //       </Fragment>
      //     )}

      // </Fragment>

      <div>
        <div className="container">
          <div className="dashboard-container">
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
              <i className='fas fa-user' /> Welcome {user && user.name}
            </p>
            {profile !== null ? (
              <div className="dashboardactions">
                <DashboardActions />

                <div className='my-2'>
                  {/* <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus' /> Delete My Account
            </button> */}
                </div>
              </div>
            ) : (
              <Fragment>
                  {/* <p>You have not yet setup a profile, please add some info</p>
                  <Link to='/create-profile' className='btn btn-primary my-1'>
                    Create Profile
          </Link> */}
                </Fragment>
              )}
          </div>
        </div>
              <Dashcard />
      </div>
    );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
