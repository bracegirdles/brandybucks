import React from 'react';
import {Link} from 'react-router';
import css from '../../css/panel.css';

const Panel = props => (
  <div className="row">
    <div className="panel-icon top-15">
      <Link to={`/${props.title.toLowerCase()}`}>
        <i onMouseOver={() => { props.hover(props.title.toLowerCase()); }} className={`fa fa-${props.icon} fa-5x`}></i>
        <h1>{props.title}</h1>
      </Link>
    </div>
  </div>
);

export default Panel;
