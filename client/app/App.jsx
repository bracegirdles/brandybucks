import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav/Nav.jsx';
import {getSearchStudents, getAllStudents, getUserStatus} from './helper/auth.js';
import {compareLastName} from './helper/helpers';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student_id: '',
      studentObj: '',
      status: '',
      students: [],
      sideBarLinks: []
    };

    this.handleClickedStudent = this.handleClickedStudent.bind(this);
    this.handleSideBarLinks = this.handleSideBarLinks.bind(this);
  }

  // ----------------------------------------------
  // Component Lifecycle Functions
  // ----------------------------------------------
  componentDidMount() {
    if (this.state.status === '') {
      getUserStatus().then(session => {
        this.setState({
          status: session.data.status
        });
      })
    }

    if (this.state.students.length === 0) {
      getAllStudents()
      .then(res => {
        this.setState({
          students: res.data.sort(compareLastName)
        });
      })
    }
  }

  // ----------------------------------------------
  // Event Handlers
  // ----------------------------------------------
  handleSideBarLinks(list) {       // this is passed down to NavSide
    this.setState({
      sideBarLinks: list
    });
  }


  handleClickedStudent(clickedProps) {
    this.setState({
      studentObj: clickedProps.student
    });
    console.log("student clicked", this.state.studentObj);
  }

  render () {
    var childrenWithProps = React.cloneElement(this.props.children, {
      student_id: this.state.student_id,
      studentObj: this.state.studentObj,
      status: this.state.status,
      students: this.state.students,
      handleClickedStudent: this.handleClickedStudent,
      handleSideBarLinks: this.handleSideBarLinks
    });

    return (
      <div>
        <Nav studentObj={this.state.studentObj}
             sideBarLinks={this.state.sideBarLinks} />
        {childrenWithProps}
      </div>
    );
  }
}

export default App;
