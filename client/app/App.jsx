import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.jsx';
import {getSearchStudents} from './helper/auth.js';
import {getAllStudents} from './helper/auth.js';
import {compareLastName} from './helper/helpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student_id: '',
      studentObj: '',
      student_array: [],
      searchInput: ''
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

  searchClicked (e) {
    let queryName = this.capitalizeName(this.state.searchInput);

    if (e.key === "Enter") {
      this.searchStudent(queryName);
      this.setState({
        searchInput: '',
      })
    } else if (e.button === 0) {
      this.searchStudent(queryName);
      this.setState({
        searchInput: '',
      })
    }

  };

  handleGetSearch(e) {
    getSearchStudents(e).then((resp) => {
      this.setState({
        student_array: resp.data,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  componentWillMount() {
    getAllStudents().then((resp) => {
      this.setState({
        student_array: resp.data.sort(compareLastName),
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render () {
    var childrenWithProps = React.cloneElement(this.props.children, {
      student_id: this.state.student_id,
      studentObj: this.state.studentObj,
      clickedStudent: this.clickedStudent,
      student_array: this.state.student_array,
      handleGetSearch: this.handleGetSearch.bind(this),
      searchClicked: this.searchClicked.bind(this)
    });
    // console.log('$$$$$$$$$$$$$$$$**', this.state.student_id);
    return (
      <div className="container">
        <Nav handleSearchInputChange={this.getStudentId.bind(this)} studentObj={this.state.studentObj}
          handleGetSearch={this.handleGetSearch.bind(this)} />
        {childrenWithProps}
      </div>
    );
  }
}

export default App;