import React from 'react';
import {Link} from 'react-router';
import StudentEntry from './StudentEntry.jsx';

class StudentList extends React.Component {
  constructor(props) {
    super(props);

    this.selectSideBarLinks = this.selectSideBarLinks.bind(this);
  }

  componentWillUnmount() {
    this.props.handleSideBarLinks([])
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sideBarLinks.length === 0) {
      this.props.handleSideBarLinks(this.selectSideBarLinks(this.props.status))
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
        }
      ]
    }
  }

  render() {
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="alignleft">View All Students</h1>
              <h3 className="alignright"><Link to="/addstudent"><img src="add.png" height="25px" />Student</Link></h3>
              <table className="table table-hover table-striped" >
                <thead>
                  <tr>
                    <th className="col-md-4">Photo</th>
                    <th className="col-md-2">Last Name</th>
                    <th className="col-md-2">First Name</th>
                    <th className="col-md-2">Grade</th>
                    <th className="col-md-2"># Logs</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.students.map((s, i) => <StudentEntry handleClickedStudent={this.props.handleClickedStudent} student={s} key={i} />)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentList;
