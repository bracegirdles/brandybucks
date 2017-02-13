import React from 'react';
import axios from 'axios';
import {getAllStudents, getParent, getStudentName, getStudentEmail} from './helper/auth';
import Checkbox from './Checkbox.jsx';

class SendEmail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      author: this.props.userName,
      email: '',
      subject: '',
      message: '',
      student: 'Select Student',
      isChecked: true
    };
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleStudent = this.handleStudent.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleParentEmail = this.handleParentEmail.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.submitClick = this.submitClick.bind(this);
  }

  componentWillUnmount() {
    this.props.handleSideBarLinks([])
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sideBarLinks.length === 0) {
      this.props.handleSideBarLinks(this.selectSideBarLinks(nextProps.status));
    }
  }

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

  componentWillMount() {
    getAllStudents(this.props.user_id)
    .then((resp) => {
      this.setState({
        students: resp.data,
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }

  handleEmail(e) {
    if (this.state.email.length > 0) {
      this.setState({
        email: this.state.email + ', ' + e.target.value
      })
    } else {
      this.setState({
        email: e.target.value,
      });
    }
  }

  handleParentEmail(e) {
    const parentEmail = this.state.email.split(', ')[1];
    this.setState({
      email: this.state.email.split(', ')[0]
    })
  }

  handleSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  handleStudent(e) {
    this.setState({
      email: ''
    })
    var id = e.target.value;
    getStudentName(id).then((resp) => {
      this.setState({
        student: resp.data[0].full_name
      })
      getStudentEmail(id).then((resp) => {
        const email = {target: {
          value: resp.data[0].email
        }};
        this.handleEmail(email);
      }).catch((err) => {
        console.log(err);
      });
      getParent(id).then((resp) => {
        const email = {target: {
          value: resp.data[0].email
        }};
        this.handleEmail(email);
      }).catch((err) => {
        console.log(err);
      });
    });



  }

  toggleCheckbox(label) {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

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
      student: 'Select Student',
      students: []

    });
    return axios({
      method: 'POST',
      url: '/message/sendEmail',
      data: log
    })
  }

  render() {
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
                    <select className="form-control custom-select" name="student" value={this.state.student} onChange={this.handleStudent} required>
                      <option>{this.state.student}</option>
                      {this.state.students.map((student, index) => {
                        return (
                          <option value={student.id} key={index}>{student.first_name} {student.last_name}</option>
                        )
                      })
                      }
                    </select>
                    <Checkbox label={"Include Parent Email"} handleCheckboxChange={this.toggleCheckbox} />
                  </div>
                  <div className="form-group">
                    <label>
                      To:
                    </label>
                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleEmail} required/>
                    <label>
                      Subject:
                    </label>
                    <input type="text" className="form-control" name="subject" value={this.state.subject} onChange={this.handleSubject} required/>
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
    )
  }
}

export default SendEmail;

// <div className="form-group">
//                       <input type="checkbox" value="parent-email" onChange={this.handleParentEmail}/>
//                       <label>Include Parent Email
//                       </label>
//                     </div>