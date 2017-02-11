import React from 'react';

const StudentInfo = props => (
  <div>
    <ul className="list-group">
      <li className="list-group-item">Grade: {props.student.grade}</li>
      <li className="list-group-item">Teacher: {props.student.teacher}</li>
      <li className="list-group-item">Aide: {props.student.aide}</li>
    </ul>
    <hr />
    <ul className="list-group">
      <li className="list-group-item">Phone #: {props.student.phonenumber}</li>
      <li className="list-group-item">Email: {props.student.email}</li>
      <li className="list-group-item">Address: {props.student.address}</li>
      <li className="list-group-item">Student ID: {props.student.studentID}</li>
    </ul>
    <hr />
    <div className="list-group">
      <div className="list-group-item flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Disability: {props.student.disability_1}</h5>
          <p className="mb-1">Trigger: {props.student.trigger_1}</p>
      </div>
      </div>
      <div className="list-group-item flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Disability: {props.student.disability_2}</h5>
          <p className="mb-1">Trigger: {props.student.trigger_2}</p>
        </div>
      </div>
      <div className="list-group-item flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Disability: {props.student.disability_3}</h5>
          <p className="mb-1">Trigger: {props.student.trigger_3}</p>
        </div>
      </div>
    </div>
  </div>
);

export default StudentInfo;
