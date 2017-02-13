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
            <Panel key={1} title="Engagement" icon="assistive-listening-systems" hover={()=>{}}/>
            <Panel key={2} title="Emotional State" icon="heart-o" hover={()=>{}}/>
          </div>
          <div className="col-md-6">
            <Panel key={3} title="Interpersonal Skills" icon="commenting-o" hover={()=>{}}/>
            <Panel key={4} title="Maturity" icon="smile-o" hover={()=>{}}/>
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
