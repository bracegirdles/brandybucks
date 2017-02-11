import React from 'react';
import Panel from '../Dashboard/Panel.jsx';
import EmergencyInfo from './EmergencyInfo.jsx';

const EmergencyPage = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
        <EmergencyInfo student={props.student} />
      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-6">
            <Panel key={1} title="Engagement" icon="assistive-listening-systems" />
            <Panel key={2} title="Emotional State" icon="heart-o" />
          </div>
          <div className="col-md-6">
            <Panel key={3} title="Interpersonal Skills" icon="commenting-o" />
            <Panel key={4} title="Maturity" icon="smile-o" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EmergencyPage;
