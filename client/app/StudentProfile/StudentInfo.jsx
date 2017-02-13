import React from 'react';

const StudentInfo = props => (
  <div>
    <ul className="list-group">
      <li className="list-group-item"><b>Grade: </b> {props.student.grade}</li>
      <li className="list-group-item"><b>Teacher: </b>{props.teacher}</li>
      <li className="list-group-item"><b>Aide: </b>{props.student.aide}</li>
      <li className="list-group-item"><b>Parent: </b>{props.student.parent}</li>
    </ul>
    <hr />
    <ul className="list-group">
      <li className="list-group-item"><b>Phone #: </b>{props.student.phonenumber}</li>
      <li className="list-group-item"><b>Email: </b>{props.student.email}</li>
      <li className="list-group-item"><b>Address: </b>{props.student.address}</li>
      <li className="list-group-item"><b>Student ID: </b>{props.student.studentID}</li>
    </ul>
    <hr />
    <div className="list-group">
      <div className="list-group-item flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1"><b>Disability: </b>{props.student.disability_1}</h5>
          <p className="mb-1"><b>Trigger: </b>{props.student.trigger_1}</p>
      </div>
      </div>
      <div className="list-group-item flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1"><b>Disability: </b>{props.student.disability_2}</h5>
          <p className="mb-1"><b>Trigger: </b>{props.student.trigger_2}</p>
        </div>
      </div>
      <div className="list-group-item flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1"><b>Disability: </b>{props.student.disability_3}</h5>
          <p className="mb-1"><b>Trigger: </b>{props.student.trigger_3}</p>
        </div>
      </div>
    </div>
  </div>
);

export default StudentInfo;
