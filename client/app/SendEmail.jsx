import React from 'react';
import axios from 'axios';
import {getAllStudents} from './helper/auth.js'
import {addLog} from './helper/auth.js';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      students: [],
      id: '',
      author: '',
      log: '',
      types: 3,
      action: 'mailto:parent@example.com?subject=Update from llama&body='
    }
  },

  componentWillMount() {
    getAllStudents()
    .then((resp) => {
      this.setState({
        students: resp.data,
      });
    })
    .catch((err) => {
      console.log(err);
    })
  },

  handleAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  },

  handleStudent(e) {
    this.setState({
      id: e.target.value,
    });
  },

  handleLog(e) {
    this.setState({
      log: e.target.value,
    });
    var action = this.state.action.slice(0,57) + this.state.log;
    this.setState({
      action: action,
    });
  },

  submitClick(e) {
    e.preventDefault();
    let log = {
      id: this.state.id,
      author: this.state.author,
      log: this.state.log,
      types: this.state.types
    }
    addLog(log)
      .then(function(resp) {
      console.log('log added');
      })
      .catch(function(err) {
        console.log('could not add log', err);
      });
    this.setState({
      author: '',
      log: ''
    });
  },

  render: function() {
    return (
      <div id="wrapper">
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-12">
      <div className="formWidth">
      <h1>Send Email</h1>
      <form onSubmit={this.submitClick}>
        <div className="form-group">
        <label>
        Author:
        </label>
        <input type="text" className="form-control" value={this.state.author} onChange={this.handleAuthor} required />
        </div>
        <div className="form-group">
        <label>
        Student:
        </label>
        <select className="form-control custom-select" onChange={this.handleStudent} required>
          <option defaultValue >Select Student</option>
          {this.state.students.map((student, index) => {
            return (
              <option value={student.id} key={index}>{student.first_name} {student.last_name}</option>
              )
            })
          }
        </select>
        </div>
        <div className="form-group">
        <label>
        Message
        </label>
        <input type="text" className="form-control" value={this.state.log} onChange={this.handleLog} required/>
        </div>
      </form>
      <div className="alignright2">
      <form action={this.state.action} method="post" encType="text/plain">
      <input type="submit" className="btn search-btn" value="Email parent" />
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
})