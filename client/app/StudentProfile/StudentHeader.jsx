import React from 'react';
import {Link} from 'react-router';
import css from '../../css/studentprofile.css'

const StudentHeader = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-2">
        <img src={props.student.pic} width="70%"/>
      </div>
      <div className="col-md-8">
        <h1>{props.student.first_name + ' ' + props.student.last_name}</h1>
      </div>
      <div className="col-md-1 top-2 left-3">
        <Link to="/message"><button className="btn btn-primary">Send Email</button></Link>
      </div>
    </div>
  </div>
);

export default StudentHeader;
