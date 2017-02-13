import React from 'react';
import {Link} from 'react-router';
import css from '../../css/settings.css';

class Settings extends React.Component {

  // ----------------------------------------------
  // Lifecycle Methods
  // ----------------------------------------------
  componentWillUnmount() {
    this.props.handleSideBarLinks([]);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sideBarLinks.length === 0) {
      this.props.handleSideBarLinks(this.selectSideBarLinks(nextProps.status));
    }
  }

  // ----------------------------------------------
  // Helper Methods
  // ----------------------------------------------
  selectSideBarLinks(status) {
    if (status === 'teacher') {
      return [
        {
          name: 'Home',
          endpoint: '/'
        },
        {
          name: 'Students',
          endpoint: '/students'
        },
        {
          name: 'Calendar',
          endpoint: '/calendar'
        },
        {
          name: 'Settings',
          endpoint: '/settings'
        },
        {
          name: 'Message',
          endpoint: '/message'
        }
      ]
    } else {
      return [
        {
          name: 'Home',
          endpoint: '/'
        },
        {
          name: 'Children',
          endpoint: '/children'
        },
        {
          name: 'Schedule',
          endpoint: '/schedule'
        },
        {
          name: 'Settings',
          endpoint: '/settings'
        },
        {
          name: 'Message',
          endpoint: '/message'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <div>
          <i className="fa fa-wrench fa-5x set-center"></i>
          <h1 className="header-center">Currently under construction!</h1>
        </div>
        <div className="btn-center">
          <Link to="/"><button className="btn btn-primary" type="text">Back to Dashboard</button></Link>
        </div>
      </div>
    );
  }

}

export default Settings;
