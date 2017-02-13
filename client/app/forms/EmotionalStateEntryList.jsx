import React from 'react';
import axios from 'axios';
// import {getAllStudents} from '../helper/auth.js'
// import {addLog} from '../helper/auth.js';
// import EmotionalStateRadioGroup from './EmotionalStateRadioGroup.jsx';
// import EmotionalStateRadio from './EmotionalStateRadio.jsx';
// import EmotionalStatePlot from './EmotionalStatePlot.jsx';
// import emotionalSpectrum from './emotionalSpectrumData.js';
import { getAllEmotionalStateData } from '../helper/formHelpers.js';
import css from '../../css/forms.css';

class EmotionalStateEntryList extends React.Component {
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
      <div style={{width: "100%", height: "auto", background: 'green'}}>
        What's good, I'm a list of data!
      </div>
    );
  }
}

export default EmotionalStateEntryList;
