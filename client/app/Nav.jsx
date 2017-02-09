import React from 'react';
import {Link} from 'react-router';
import {getStudentByName} from './helper/auth.js';
import {logout} from './helper/auth.js';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: '',
      studentPic: '../llama.png',
      searchInput: ''
    };

    //binding all the method to this context before pass down to components.
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.searchStudent = this.searchStudent.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
    this.logOut = this.logOut.bind(this);
    this.choosePic = this.choosePic.bind(this);
    this.chooseName = this.chooseName.bind(this);
  };

  shouldComponentUpdate(nextState) {
  if (this.props.studentObj !== nextState) {
    return true;
  }
  return false
  }

  //create handler method to extract search input box value.
  handleChangeSearch (e) {
    this.props.handleGetSearch(e.target.value);
    this.setState({
      searchInput: e.target.value,
    });
  };

  //method to capitalize input name before sent to query search.
  capitalizeName (name) {
    let fullName = name.split(" ");
    let cappedName = fullName.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ");
    return cappedName;
  };

  //axios call to server to search student by name.
  searchStudent (name) {
    let context = this;
    getStudentByName(name)
    .then((resp) => {
      if (typeof resp.data === 'string') {
        console.log(resp.data);
      } else {
        context.setState({
          studentName: resp.data.first_name + ' ' + resp.data.last_name,
          studentPic: resp.data.pic,
        });
        this.props.handleSearchInputChange(resp.data.id);
      }
    })
    .catch((err) => {
      console.log('sorry could not get student');
    })
  };

  //create handler method for search if actived by key press or by button clicked.
  searchClicked (e) {
    let queryName = this.capitalizeName(this.state.searchInput);

    if (e.key === "Enter") {
      this.searchStudent(queryName);
      this.setState({
        searchInput: '',
      })
    } else if (e.button === 0) {
      this.searchStudent(queryName);
      this.setState({
        searchInput: '',
      })
    }

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

  choosePic() {
    if (this.props.studentObj === '') {
      return this.state.studentPic;
    } else {
      return this.props.studentObj.pic;
    }
  };

  chooseName() {
    if (this.props.studentObj === '') {
      return this.state.studentName;
    } else {
      return `${this.props.studentObj.first_name} ${this.props.studentObj.last_name}`;
    }
  };

  render () {
    return(
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">llama</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/createlog" className="nav-link">Create Log</Link>
              </li>
              <li className="nav-item">
                <a href="/login" onClick={this.logOut} className="nav-link">Logout</a>
              </li>
              <li className="nav-item">
                <input className="student-search" type="text" placeholder="&nbsp;Search Student" value={this.state.searchInput} onKeyPress={this.searchClicked} onChange={this.handleChangeSearch} />&nbsp;
                <button className="btn search-btn" onClick={this.searchClicked} >Find</button>
              </li>
            </ul>
        </div>
        <div className="side-nav">
          <ul className="side-nav">
            <li className="studentInfo">
              <img alt="Student Picture"src={this.choosePic()} width="150" /><br />{this.chooseName()}<br />
            </li>
            <li>
              <Link to="/goals">Goals</Link>
            </li>
            <li>
              <Link to="/iep">IEP</Link>
            </li>
            <li>
              <Link to="/meetingnotes">Meeting Notes</Link>
            </li>
            <li>
              <Link to="/viewlogs">Updates / Logs</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;