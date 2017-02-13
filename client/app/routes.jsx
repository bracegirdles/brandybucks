import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import CreateLog from './CreateLog.jsx';
import CreateNote from './CreateNote.jsx';
import CreateGoal from './CreateGoal.jsx';
import SendEmail from './SendEmail.jsx';
import {Goals} from './Goals.jsx';
import {IEP} from './IEP.jsx';
import {MeetingNotes} from './MeetingNotes.jsx';
import {ViewLogs} from './ViewLogs.jsx';
import {StudentForm} from './StudentForm.jsx';

// Dashboard Components
import Dashboard from './Dashboard/Dashboard.jsx';
import StudentList from './StudentList/StudentList.jsx';
import Charts from './Statistics/Charts.jsx';
import Schedule from './Schedule/Schedule.jsx';
import Calendar from './Schedule/Calendar.jsx';
import Settings from './Settings/Settings.jsx';

// StudentProfile Components
import StudentProfile from './StudentProfile/StudentProfile.jsx';

// These should be refactored later into a common re-usable component:
// Make a higher order component "Page", given some input
// that returns components studentpage, parentpage, emergencypage
import StudentPage from './StudentProfile/StudentPage.jsx'
import ParentPage from './StudentProfile/ParentPage.jsx';
import EmergencyPage from './StudentProfile/EmergencyPage.jsx';

// Stats Pages (contain input forms)
import EmotionalStatePage from './StudentProfile/EmotionalStatePage.jsx';
import EmotionalStateStatistics from './forms/EmotionalStateStatistics.jsx';


export default (
  <Route path="/" component={App}>
    { /* Routes for the Dashboard */}
    <IndexRoute component={Dashboard} />
    <Route path="students" component={StudentList} />
    <Route path="schedule" component={Schedule} />
    <Route path="calendar" component={Calendar} />
    <Route path="settings" component={Settings} />
    <Route path="message" component={SendEmail} />


    { /* Routes for the Student Profile     */}
    <Route path="student" component={StudentProfile} >
      <IndexRoute component={StudentPage} />
      <Route path="parent" component={ParentPage} />
      <Route path="emergency" component={EmergencyPage} />
      <Route path="emotionalstatepage" component={EmotionalStatePage} />
      <Route path="emotionalstatestatistics" component={EmotionalStateStatistics} />
      {
        /*

        Move these routes up with the proper Pages, similar to above
        <Route path="attendence" component={Attendence} />
        <Route path="engagement" component={Engagement} />
        <Route path="interpersonal" component={Interpersonal} />
        <Route path="maturity" component={Maturity} />

        */
      }
    </Route>



    <Route path="statistics" component={Charts} />
    <Route path="createlog" component={CreateLog} />
    <Route path="goals" component={Goals} />
    <Route path="iep" component={IEP} />
    <Route path="meetingnotes" component={MeetingNotes} />
    <Route path="createnote" component={CreateNote} />
    <Route path="viewlogs" component={ViewLogs} />

    <Route path="creategoal" component={CreateGoal} />
    <Route path="addstudent" component={StudentForm} />

    <Route path="students" component={StudentList} />
    <Route path="children" component={StudentList} />
    <Route path="statistics" component={Charts} />
    <Route path="schedule" component={Schedule} />
    <Route path="settings" component={Settings} />
  </Route>
)
