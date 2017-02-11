import React from 'react';

const ParentInfo = props => (
  <div>
    <ul className="list-group">
      <li className="list-group-item">Name: { /* props.parent.first_name + ' ' + props.parent.last_name */}</li>
      <li className="list-group-item">Address: { /*props.parent.address */}</li>
      <li className="list-group-item">Work #: { /*props.parent.work_phone_number */}</li>
      <li className="list-group-item">Mobile #: { /*props.parent.mobile_phobe_number */}</li>
      <li className="list-group-item">Email: { /*props.parent.email */}</li>
    </ul>
    <hr />
    <ul className="list-group">
      <li className="list-group-item">Name: { /* props.parent.first_name + ' ' + props.parent.last_name */}</li>
      <li className="list-group-item">Address: { /*props.parent.address */}</li>
      <li className="list-group-item">Work #: { /*props.parent.work_phone_number */}</li>
      <li className="list-group-item">Mobile #: { /*props.parent.mobile_phobe_number */}</li>
      <li className="list-group-item">Email: { /*props.parent.email */}</li>
    </ul>
  </div>
);

export default ParentInfo;
