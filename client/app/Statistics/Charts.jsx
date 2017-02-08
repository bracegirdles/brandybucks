import React from 'react';
import axios from 'axios';
import {getAllLogs} from '../helper/auth.js'
import {VictoryBar, VictoryPie, VictoryChart, VictoryTheme} from 'victory';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      logs: [],
      studentName: '',
      data: [{
            id: 0,
            x: "Logs",
            contributions: 0
        }, {
            id: 1,
            x: "Meeting Notes",
            contributions: 0
        }, {
            id: 2,
            x: "Goals",
            contributions: 0
        }],
        data2: [{
            id: 0,
            x: "",
            contributions: 0
        }, {
            id: 1,
            x: "",
            contributions: 0
        }, {
            id: 2,
            x: "",
            contributions: 0
        }]
    }
  },

  componentWillMount() {
    getAllLogs()
    .then((resp) => {
      if (this.props.student_id === '') {
        this.setState({
          logs: resp.data,
          data: [{
              id: 0,
              x: "Logs",
              contributions: resp.data.filter((log) => {return log.types === 3}).length
          }, {
              id: 1,
              x: "Meeting Notes",
              contributions: resp.data.filter((log) => {return log.types === 2}).length
          }, {
              id: 2,
              x: "Goals",
              contributions: resp.data.filter((log) => {return log.types === 1}).length
          }],
          studentName: '',
          data2: [{
              id: 0,
              x: resp.data.filter((log) => {return log.other === "Not Started" && log.types === 1}).length > 0 ? "Not Started" : '',
              contributions: resp.data.filter((log) => {return log.other === "Not Started" && log.types === 1}).length
          }, {
              id: 1,
              x: resp.data.filter((log) => {return log.other === "In Progress" && log.types === 1}).length > 0 ? "In Progress" : '',
              contributions: resp.data.filter((log) => {return log.other === "In Progress" && log.types === 1}).length
          }, {
              id: 2,
              x: resp.data.filter((log) => {return log.other === "Complete" && log.types === 1}).length > 0 ? "Complete" : '',
              contributions: resp.data.filter((log) => {return log.other === "Complete" && log.types === 1}).length
          }]
        });
      } else {
        this.setState({
          logs: resp.data.filter((log) => {return log.student_id === this.props.student_id}),
          data: [{
              id: 0,
              x: "Logs",
              contributions: resp.data.filter((log) => {return log.types === 3 && log.student_id === this.props.student_id}).length
          }, {
              id: 1,
              x: "Meeting Notes",
              contributions: resp.data.filter((log) => {return log.types === 2 && log.student_id === this.props.student_id}).length
          }, {
              id: 2,
              x: "Goals",
              contributions: resp.data.filter((log) => {return log.types === 1 && log.student_id === this.props.student_id}).length
          }],
          studentName: resp.data.filter((log) => {return log.student_id === this.props.student_id})[0].first_name + ' ' + resp.data.filter((log) => {return log.student_id === this.props.student_id})[0].last_name,
          data2: [{
              id: 0,
              x: resp.data.filter((log) => {return log.other === "Not Started" && log.types === 1 && log.student_id === this.props.student_id}).length > 0 ? "Not Started" : '',
              contributions: resp.data.filter((log) => {return log.other === "Not Started" && log.types === 1 && log.student_id === this.props.student_id}).length
          }, {
              id: 1,
              x: resp.data.filter((log) => {return log.other === "In Progress" && log.types === 1 && log.student_id === this.props.student_id}).length > 0 ? "In Progress" : '',
              contributions: resp.data.filter((log) => {return log.other === "In Progress" && log.types === 1 && log.student_id === this.props.student_id}).length
          }, {
              id: 2,
              x: resp.data.filter((log) => {return log.other === "Complete" && log.types === 1 && log.student_id === this.props.student_id}).length > 0 ? "Complete" : '',
              contributions: resp.data.filter((log) => {return log.other === "Complete" && log.types === 1 && log.student_id === this.props.student_id}).length
          }]
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  },

  render: function() {
    return this.state.studentName.length === 0 ?
    (
      <div id="wrapper">
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-8">
      <h1>{this.state.studentName} Statistics</h1>
      <h3 className="goalTitle2">Total Entries</h3>
      <div className="pullup">
      <VictoryChart domainPadding={20} animate={{ duration: 2000, easing: "bounce" }}>
          <VictoryBar
            name="area-1"
            colorScale={"qualitative"}
            data={this.state.data}
            x="x"
            y={(datum) => datum.contributions}
          />
      </VictoryChart>
      <h3 className="goalTitle">{this.state.studentName} &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; Goals</h3>
      <div className="pullup">
          <VictoryPie
            name="area-1"
            colorScale={"qualitative"}
            width={450}
            height={300}
            data={this.state.data2}
            x="x"
            y={(datum) => datum.contributions}
          />
      </div>
      </div>
      </div>
      <div className="col-md-4"></div>
      </div>
      </div>
      </div>
    ) : (
      <div id="wrapper">
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-8">
      <h1>{this.state.studentName} Statistics</h1>
      <div className="pullup">
      <VictoryChart domainPadding={20} animate={{ duration: 2000, easing: "bounce" }}>
          <VictoryBar
            name="area-1"
            colorScale={"qualitative"}
            data={this.state.data}
            x="x"
            y={(datum) => datum.contributions}
          />
      </VictoryChart>
      <h3 className="goalTitle">{this.state.studentName} Goals</h3>
      <div className="pullup">
          <VictoryPie
            name="area-1"
            colorScale={"qualitative"}
            width={450}
            height={300}
            data={this.state.data2}
            x="x"
            y={(datum) => datum.contributions}
          />
      </div>
      </div>
      </div>
      <div className="col-md-4"></div>
      </div>
      </div>
      </div>

    );
  }
})
