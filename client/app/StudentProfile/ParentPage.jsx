import React from 'react';
import Panel from '../Dashboard/Panel.jsx';
import ParentInfo from './ParentInfo.jsx';

const ParentPage = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
        <ParentInfo student={props.student} />
      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-6">
            <Panel key={1} title="Engagement" hover={()=>{}} icon="assistive-listening-systems" />
            <Panel key={2} title="Emotional State" hover={()=>{}} icon="heart-o" />
          </div>
          <div className="col-md-6">
            <Panel key={3} title="Interpersonal" hover={()=>{}} icon="commenting-o" />
            <Panel key={4} title="Maturity" hover={()=>{}} icon="smile-o" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ParentPage;
