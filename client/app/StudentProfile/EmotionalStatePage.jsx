import React from 'react';
import {Link} from 'react-router';
import EmotionalStateEntryList from '../forms/EmotionalStateEntryList.jsx';
import EmotionalStateForm from '../forms/EmotionalStateForm.jsx';

const EmotionalStatePage = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
        <EmotionalStateEntryList student={props.student} />
      </div>
      <div className="col-md-8">
        <EmotionalStateForm student={props.student} />
      </div>
    </div>
    <div className="row-md-12">
      <Link to="/student/emotionalstatestatistics" className="btn">Statistics</Link>
    </div>
  </div>
);

export default EmotionalStatePage;