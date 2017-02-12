import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav/Nav.jsx';
import {getSearchStudents, getAllStudents, getUserStatus, getChildren} from './helper/auth.js';
import {compareLastName} from './helper/helpers';
import {browserHistory} from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student_id: '',
      studentObj: '',
      status: '',
      students: [],
      sideBarLinks: [],
      searchInput: '',
      userName: '',
      user_id: '',
    };

    this.handleClickedStudent = this.handleClickedStudent.bind(this);
    this.handleSideBarLinks = this.handleSideBarLinks.bind(this);
    this.handleSearchStudent = this.handleSearchStudent.bind(this);
  }

  // ----------------------------------------------
  // Component Lifecycle Functions
  // ----------------------------------------------

  componentDidMount() {
    if (this.state.status === '') {
      getUserStatus().then(session => {
        const user = session.data.user;
        this.setState({
          status: user.status,
          userName: user.first_name + ' ' + user.last_name,
          user_id: user.id,
        });

        if (this.state.searchInput.length === 0) {

            if (this.state.status === 'teacher') {
              getAllStudents(this.state.user_id)
              .then(res => {
                this.setState({
                  students: res.data.sort(compareLastName)
                });
              })
            }

            if (this.state.status === 'parent') {
              getChildren(this.state.user_id)
              .then(res => {
                this.setState({
                  students: res.data.sort(compareLastName)
                });
              });
            }
        }

      });
    }

  }

  // Debugging Utility Lifecycle Function
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('app prevState', prevState);
  //   console.log('app this.state', this.state);
  // }


  // ----------------------------------------------
  // Event Handlers
  // ----------------------------------------------
  handleSideBarLinks(list) {       // this is passed down to NavSide
    this.setState({
      sideBarLinks: list
    });
  }


  handleClickedStudent(student) {
    this.setState({
      studentObj: student
    });
    browserHistory.push('/student');
    console.log("student clicked", this.state.studentObj);
    console.log("current user is ", this.state.userName);
  }

  handleSearchStudent(e) {
    getSearchStudents(e, this.state.user_id, this.state.status).then((resp) => {
      this.setState({
        students: resp.data.sort(compareLastName)
      });
    }).catch((err) => {
      console.log(err);
    });
  }


  render () {
    var childrenWithProps = React.cloneElement(this.props.children, {
      student_id: this.state.student_id,
      studentObj: this.state.studentObj,
      status: this.state.status,
      students: this.state.students,
      handleClickedStudent: this.handleClickedStudent,
      handleSideBarLinks: this.handleSideBarLinks,
      sideBarLinks: this.state.sideBarLinks,
      handleSearchStudent: this.handleSearchStudent,
      handleSideBarLinks: this.handleSideBarLinks,
      userName: this.state.userName,
      user_id: this.state.user_id,
    });

    return (
      <div>
        <Nav studentObj={this.state.studentObj}
             sideBarLinks={this.state.sideBarLinks}
             handleSearchStudent={this.handleSearchStudent}
             handleClickedStudent={this.handleClickedStudent} />
        {childrenWithProps}
      </div>
    );
  }
}

export default App;
