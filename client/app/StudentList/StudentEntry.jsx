import React from 'react';
import {Link} from 'react-router';

class StudentEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr onClick={()=>this.props.clickedStudent(this.props)}>
        <td><img src=
        {this.props.eachStudent.pic} width="40%" /></td>
        <td>{this.props.eachStudent.last_name}</td>
        <td>{this.props.eachStudent.first_name}</td>
        <td>{this.props.eachStudent.grade}</td>
        <td><Link to="/viewlogs">{this.props.eachStudent.logCount}</Link></td>
      </tr>
    )
  }
}

export {StudentEntry};