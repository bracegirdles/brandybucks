import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student_id: '',
      studentObj: ''
    };

    this.clickedStudent = this.clickedStudent.bind(this);
  }

  //method to handle click on student
  clickedStudent(e) {
    this.setState({
      studentObj: e.eachStudent
    });
    console.log("student clicked", this.state.studentObj);
  }

  getStudentId(id) {
    this.setState({
      student_id: id
    });
  }

  render () {
    var childrenWithProps = React.cloneElement(this.props.children, {
      student_id: this.state.student_id,
      studentObj: this.state.studentObj,
      clickedStudent: this.clickedStudent
    });
    return (
      <div>
        <Nav handleSearchInputChange={this.getStudentId.bind(this)} studentObj={this.state.studentObj} />
        {childrenWithProps}
      </div>
    );
  }
}

export default App;
