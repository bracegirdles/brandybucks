import React from 'react';
import {Link} from 'react-router';

const NavSide = props => (
  <div className="side-nav">
    <ul className="side-nav">
      <li className="studentInfo">
        <img alt="Student Picture" src={props.choosePic()} width="150" />
        <p>{props.chooseName()}</p>
      </li>
      {props.list.map((item, i) => (
        <li key={i}>
          <Link
            to={item.endpoint}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default NavSide;
