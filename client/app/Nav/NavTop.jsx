import React from 'react';
import {Link} from 'react-router';

export default class NavTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ----------------------------------------------
  // Helper methods
  // ----------------------------------------------
  capitalizeName(name) {
    return name.split(' ')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ');
  }

  // ----------------------------------------------
  // Event Handlers
  // ----------------------------------------------
  handleSearchChange (e) {
    this.setState({
      searchInput: e.target.value
    });
  }

  handleSubmit(e) {
    let queryName = this.capitalizeName(name);
    this.props.searchStudent(queryName);
    this.setState({
      searchInput: ''
    })
  }

  render() {
    return (
      <div>
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">llama</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav navbar-right">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <a href="/login" onClick={this.props.logOut} className="nav-link">Logout</a>
            </li>
            <li className="nav-item">
              <input className="student-search" type="text" placeholder="&nbsp;Search Student"
                value={this.state.searchInput}
                onKeyPress={this.handleSubmit}
                onChange={this.handleSearchChange} />
                <button className="btn search-btn" onClick={this.handleSubmit} >Find</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
