import React from 'react';
import {Link} from 'react-router';


const StudentEntry = props => (
  <tr onClick={() => { props.handleClickedStudent(props); }}>
    <td><img src=
      {props.student.pic} width="40%" /></td>
      <td>{props.student.last_name}</td>
      <td>{props.student.first_name}</td>
      <td>{props.student.grade}</td>
      <td><Link to="/viewlogs">{props.student.logCount || "None"}</Link></td>
    </tr>

);

export default StudentEntry;
