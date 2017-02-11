import React from 'react';
import {Link} from 'react-router';
import css from '../../css/nav.css';

const NavSide = props => (
  <div className="side-nav">
    <ul className="side-nav">
      <li className="userInfo">
        <img className="left-12" alt="User Picture" src={'../llama.png'} width="150" />
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
