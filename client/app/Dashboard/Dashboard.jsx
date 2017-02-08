import React from 'react';
import Panel from './Panel.jsx';
import Preview from './Preview.jsx'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panel: 'welcome',
      preview: '/imgs/welcome.jpg'
    }

    this.handleHover = this.handleHover.bind(this);
    this.selectDesc = this.selectDesc.bind(this);
  }

  handleHover(panel) {
    this.setState({
      panel: panel,
      preview: `/imgs/${panel}.jpg`
    });
  }

  selectDesc(panel) {
    const descriptions = {
      welcome: 'Welcome to the llama Teacher Dashboard',
      students: 'Check your students\' progress',
      statistics: 'Visualize classroom metrics with ease',
      schedule: 'Book appointments with parents as needed',
      settings: 'Update your personal and professional settings'
    }
    return descriptions[panel];
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Panel hover={this.handleHover} title="Students" icon="graduation-cap" />
            <Panel hover={this.handleHover} title="Statistics" icon="bar-chart" />
            <Panel hover={this.handleHover} title="Schedule" icon="calendar-check-o"/>
            <Panel hover={this.handleHover} title="Settings" icon="cog"/>
          </div>
          <div className="col-md-9">
            <Preview img={this.state.preview} desc={this.selectDesc(this.state.panel)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
