import React from 'react';
import {Link} from 'react-router';

class StudentEntry extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClickedStudent(this.props.student)
  }

  render() {
    return (
      <tr onClick={this.handleClick} >
        <td><img src={this.props.student.pic} width="40%" /></td>
        <td>{this.props.student.last_name}</td>
        <td>{this.props.student.first_name}</td>
        <td>{this.props.student.grade}</td>
        <td><Link to="/viewlogs">{this.props.student.logCount || "None"}</Link></td>
      </tr>
    );
  }

}

export default StudentEntry;
