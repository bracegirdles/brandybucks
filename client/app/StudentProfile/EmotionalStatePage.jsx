import React from 'react';
import {Link} from 'react-router';
import EmotionalStateEntryList from '../forms/EmotionalStateEntryList.jsx';
import EmotionalStateForm from '../forms/EmotionalStateForm.jsx';

const EmotionalStatePage = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <EmotionalStateForm student={props.student} />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <Link to="/student/emotionalstatestatistics" className="btn btn-default">Statistics</Link>
      </div>
    </div>
  </div>
);

export default EmotionalStatePage;

      // <div className="col-lg-4">
      //   <EmotionalStateEntryList student={props.student} />
      // </div>