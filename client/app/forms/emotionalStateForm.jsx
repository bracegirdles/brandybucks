import React from 'react';
import axios from 'axios';
import {getAllStudents} from '../helper/auth.js'
import {addLog} from '../helper/auth.js';
import EmotionalStateOption from './EmotionalStateOption.jsx';
import EmotionalStateRadio from './EmotionalStateRadio.jsx';
import emotionalSpectrum from './emotionalSpectrumData.js';
import css from '../../css/forms.css';

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
      <h1>How are you feeling?</h1>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={this.handleFormSubmit}>
              <div className="date">
                <label>
                  Today is:
                  <input type="date" name="date" />
                </label>
              </div>
              <h3>This morning, I'm feeling:</h3>  
              <EmotionalStateOption name="morningMood"
                                    value={this.state.morningMood}
                                    handleOptionChange={this.handleOptionChange} 
                                    emotionalSpectrum={emotionalSpectrum}
              />
              <h3>At lunch time today, I'm feeling:</h3>
              <EmotionalStateOption name="noonMood"
                                    value={this.state.noonMood}
                                    handleOptionChange={this.handleOptionChange} 
                                    emotionalSpectrum={emotionalSpectrum}
              />
              <h3>After school today, I'm feeling:</h3>
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
