import React from 'react';
import axios from 'axios';
import {getAllStudents} from '../helper/auth.js'
import {addLog} from '../helper/auth.js';
import EmotionalStateOption from './EmotionalStateOption.jsx';
import EmotionalStateRadio from './EmotionalStateRadio.jsx';
import emotionalSpectrum from './emotionalSpectrumData.js';
import formStyles from './forms.css';

class EmotionalStateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      morningMood: 'So Fucking Happy',
      noonMood: 'So Fucking Happy',
      endMood: 'So Fucking Happy'
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleOptionChange(changeEvent) {
    this.setState({
      [changeEvent.target.name]: changeEvent.target.value
    });
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();

    console.log('You have selected: ', this.state.morningMood, this.state.noonMood, ' and ', this.state.endMood);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={this.handleFormSubmit}>  
              <EmotionalStateOption name="morningMood"
                                    value={this.state.morningMood}
                                    handleOptionChange={this.handleOptionChange} 
                                    emotionalSpectrum={emotionalSpectrum}
              />
              <EmotionalStateOption name="noonMood"
                                    value={this.state.noonMood}
                                    handleOptionChange={this.handleOptionChange} 
                                    emotionalSpectrum={emotionalSpectrum}
              />
              <EmotionalStateOption name="endMood"
                                    value={this.state.endMood}
                                    handleOptionChange={this.handleOptionChange} 
                                    emotionalSpectrum={emotionalSpectrum}
              />
              <button className="btn btn-default" type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EmotionalStateForm;
