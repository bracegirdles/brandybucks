import React from 'react';
import StudentHeader from './StudentHeader.jsx';

class StudentProfile extends React.Component {
  // ----------------------------------------------
  // Lifecycle Functions
  // ----------------------------------------------

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevState', prevState);
  //   console.log('this.props', this.props);
  // }

  componentWillUnmount() {
    this.props.handleSideBarLinks([]);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sideBarLinks.length === 0) {
      this.props.handleSideBarLinks([
        {
          name: 'Student',
          endpoint: '/student/'
        },
        {
          name: 'Parent',
          endpoint: '/student/parent'
        },
        {
          name: 'Emergency Contact',
          endpoint: '/student/emergency'
        },
        {
          name: 'Attendence',
          endpoint: '/student/attendence'
        },
        {
          name: 'Engagement',
          endpoint: '/student/engagement'
        },
        {
          name: 'Emotional State',
          endpoint: '/student/emotionalstate'
        },
        {
          name: 'Interpersonal Skills',
          endpoint: '/student/interpersonal'
        },
        {
          name: 'Maturity',
          endpoint: '/student/maturity'
        }
      ])
    }
  }

  render() {
    var childrenWithProps = React.cloneElement(this.props.children, {
      student: this.props.studentObj,
      status: this.props.status,
      teacher: this.props.userName
    });

    return (
      <div>
        <StudentHeader student={this.props.studentObj}/>
        <hr />
        {childrenWithProps}
      </div>
    );
  }
}

export default StudentProfile;
