import React from 'react';
import Panel from '../Dashboard/Panel.jsx';
import StudentInfo from './StudentInfo.jsx';

const StudentPage = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
        <StudentInfo student={props.student} teacher={props.teacher} />
      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-6">
            <Panel key={1} title="Engagement" inStudentPage={true} hover={()=>{}} icon="assistive-listening-systems" />
            <Panel key={2} title="Emotional State" inStudentPage={true} hover={()=>{}} icon="heart-o" />
          </div>
          <div className="col-md-6">
            <Panel key={3} title="Interpersonal" inStudentPage={true} hover={()=>{}} icon="commenting-o" />
            <Panel key={4} title="Maturity" inStudentPage={true} hover={()=>{}} icon="smile-o" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StudentPage;







/*
Emergency Contact fields:
- Emergency contact #1
- Emergency contact #2
- Doctor Information
- Health Insurance
*/
