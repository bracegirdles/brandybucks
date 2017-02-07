import React from 'react';
import {Link} from 'react-router';

export default Panel = props => (
  <div className="col-mid-6">
    <Link to={`/${props.title.toLowerCase()}`}>
      <i className={`fa fa-${props.icon} fa-5x`}></i>
      <h3>{props.title}</h3>
    </Link>
  </div>
);
