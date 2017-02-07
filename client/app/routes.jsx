import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import CreateLog from './CreateLog.jsx';
import CreateNote from './CreateNote.jsx';
import CreateGoal from './CreateGoal.jsx';
import {Goals} from './Goals.jsx';
import {IEP} from './IEP.jsx';
import {MeetingNotes} from './MeetingNotes.jsx';
import {ViewLogs} from './ViewLogs.jsx';
import {StudentForm} from './StudentForm.jsx';

// Dashboard Related Components
import Dashboard from './Dashboard/Dashboard.jsx';
import StudentList from './StudentList/StudentList.jsx';
import Charts from './Statistics/Charts.jsx';
import Schedule from './Schedule/Schedule.jsx';
import Settings from './Settings/Settings.jsx';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="createlog" component={CreateLog} />
    <Route path="goals" component={Goals} />
    <Route path="iep" component={IEP} />
    <Route path="meetingnotes" component={MeetingNotes} />
    <Route path="createnote" component={CreateNote} />
    <Route path="creategoal" component={CreateGoal} />
    <Route path="viewlogs" component={ViewLogs} />
    <Route path="addstudent" component={StudentForm} />



    <Route path="students" component={StudentList} />
    <Route path="statistics" component={Charts} />
    <Route path="schedule" component={Schedule} />
    <Route path="settings" component={Settings} />
  </Route>
)
