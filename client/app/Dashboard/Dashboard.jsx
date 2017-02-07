import {Component} from 'react';
import Panel from './Panel.jsx';

export default Dashboard = props => (
  <div className="container">
    <div className="row">
      <Panel title="Students" icon="graduation-cap" />
      <Panel title="Statistics" icon="bar-chart" />
    </div>
    <div className="row">
      <Panel title="Schedule" icon="calendar-check-o"/>
      <Panel title="Settings" icon="cog"/>
    </div>
  </div>
);
