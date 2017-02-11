import React from 'react';
import axios from 'axios';
import {getAllStudents} from './helper/auth.js'
import {addLog} from './helper/auth.js';
// import controller from '../../server/controllers/dataControllers.js';
// var message = require('../../server/controllers/dataControllers.js');
// var message: require('../../server/controllers/dataControllers.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      students: [],
      author: '',
      email: '',
      subject: '',
      message: '',
      student: 'select student'

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
  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  },
  handleSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  },

  handleStudent(e) {
    this.setState({
      student: e.target.value,
    });
  },

  handleMessage(e) {
    this.setState({
      message: e.target.value,
    });
  },

  submitClick(e) {
    e.preventDefault();
    let log = {
      id: this.state.id,
      author: this.state.author,
      message: this.state.message,
      email: this.state.email,
      subject: this.state.subject,

    }
    this.setState({
      author: '',
      message: '',
      email: '',
      subject: '',
      student: 'select student',
      students: []

    });
    return axios({
      method: 'POST',
      url: '/message/sendEmail',
      data: log
    })
  },

  render: function() {
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="formWidth">
                <h1>Send Email</h1>
                <form  method="post" encType="text/plain" onSubmit={this.submitClick}>
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
                    <select className="form-control custom-select" name="student" onChange={this.handleStudent} required>
                      <option >{this.state.student}</option>
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
                      Subject:
                    </label>
                    <input type="text" className="form-control" name="subject" value={this.state.subject} onChange={this.handleSubject} required/>
                    <label>
                      To:
                    </label>
                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleEmail} required/>
                    <label>
                      Message
                    </label>
                    <input type="text" className="form-control" name="message"  value={this.state.message} onChange={this.handleMessage} required/>
                  </div>

                  <div className="alignright2">
                    <input type="submit" className="btn search-btn" value="Email parent" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
})