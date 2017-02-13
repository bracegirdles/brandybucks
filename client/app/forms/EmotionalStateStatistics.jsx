import React from 'react';
import axios from 'axios';
// import {getAllStudents} from '../helper/auth.js'
import EmotionalStatePlot from './EmotionalStatePlot.jsx';
// import emotionalSpectrum from './emotionalSpectrumData.js';
import { getAllEmotionalStateData } from '../helper/formHelpers.js';
import css from '../../css/forms.css';

class EmotionalStateStatistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // date: null,
      // morningMood: 4,
      // noonMood: 4,
      // endMood: 4,
      // teacherNotes: null
    };
  }

  render() {
    return (
      <div>
        <h3>Here is my practice plot:</h3>
        <EmotionalStatePlot name="Practice"
                            id={this.props.student.id} 
        />
      </div>
    );
  }
}

export default EmotionalStateStatistics;