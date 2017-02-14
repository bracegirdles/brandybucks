import React from 'react';
import {Link} from 'react-router';
import InterestEngagementEntryList from '../forms/InterestEngagementEntryList.jsx';
import InterestEngagementForm from '../forms/InterestEngagementForm.jsx';

const InterestEngagementPage = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <InterestEngagementForm student={props.student} />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <Link to="/student/engagementstatistics" className="btn btn-default">Statistics</Link>
      </div>
    </div>
  </div>
);

export default InterestEngagementPage;

      // <div className="col-lg-4">
      //   <EmotionalStateEntryList student={props.student} />
      // </div>