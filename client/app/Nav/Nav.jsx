import React from 'react';
import {Link} from 'react-router';
import {getStudentByName, logout} from '../helper/auth.js';
import NavTop from './NavTop.jsx';
import NavSide from './NavSide.jsx';


class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: '',
      studentPic: '../llama.png',
      searchInput: ''
    };

    //binding all the method to this context before pass down to components.
    this.searchStudent = this.searchStudent.bind(this);
    this.logOut = this.logOut.bind(this);
  };

  // ----------------------------------------------
  // Component Lifecycle Functions
  // ----------------------------------------------
  shouldComponentUpdate(nextState) {
    if (this.props.studentObj !== nextState) {
      return true;
    }
    return false;
  }

  // ----------------------------------------------
  // Axios calls
  // ----------------------------------------------
  searchStudent (e) {
    this.props.handleSearchStudent(e.target.value);
  };


  logOut() {
    logout()
    .then((resp) => {
      console.log('logged out');
    })
    .catch((err) => {
      console.log(err);
    });
  };

  render () {
    return(
      <div className="navbar navbar-inverse navbar-fixed-top">
        <NavTop logOut={this.logOut} searchStudent={this.searchStudent}/>
        <NavSide list={this.props.sideBarLinks}
                 />
      </div>
    );
  }
}

export default Nav;
