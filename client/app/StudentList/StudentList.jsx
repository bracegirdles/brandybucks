import React from 'react';
import axios from 'axios';
import {getAllStudents} from '../helper/auth.js'
import {StudentEntry} from './StudentEntry.jsx';
import {Link} from 'react-router';

export default class StudentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: this.props.student_array,
      //clickedStudent: {}
    };

    // this.clickedStudent = this.clickedStudent.bind(this);
  }

  //method to retrieve student from database once page load.
  componentWillMount() {
    function compareLastName(a,b) {
      if (a.last_name < b.last_name)
        return -1;
      if (a.last_name > b.last_name)
        return 1;
      return 0;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        students: nextProps.student_array});
    }
  }

  render () {
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
                      {
                        this.props.student_array.map((student, index) => {

                          return (
                            <StudentEntry clickedStudent={this.props.clickedStudent} eachStudent={student} key={index} />
                          )
                        })
                      }
                    </tbody>
                  </table>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
