import React from 'react';
import axios from 'axios';
import {getAllStudents} from '../helper/auth.js'
import {addLog} from '../helper/auth.js';
import InterestEngagementRadioGroup from './InterestEngagementRadioGroup.jsx';
import InterestEngagementRadio from './InterestEngagementRadio.jsx';
// import emotionalSpectrum from './emotionalSpectrumData.js';
import css from '../../css/forms.css';

class InterestEngagementForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      r_performance_score:
      r_participation_score:
      r_enjoyment_score:
      r_interest_score:
      r_repeatability_score:
      w_reading_performance_score:
      w_participation_score:
      w_enjoyment_score:
      w_interest_score:
      w_repeatability_score:
      m_reading_performance_score:
      m_participation_score:
      m_enjoyment_score:
      m_interest_score:
      m_repeatability_score:
      teacherNotes: null
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleDateChange(changeEvent) {
    this.setState({
      date: changeEvent.target.value
    });
  }

  handleOptionChange(changeEvent) {
    this.setState({
      [changeEvent.target.name]: Number(changeEvent.target.value)
    });
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    
    const interestEngagement = {
      date: this.state.date,
      r_performance_score: this.state.r_performance_score,
      r_participation_score: this.state.r_participation_score,
      r_enjoyment_score: this.state.r_enjoyment_score,
      r_interest_score: this.state.r_interest_score,
      r_repeatability_score: this.state.r_repeatability_score,
      w_reading_performance_score: this.state.w_reading_performance_score,
      w_participation_score: this.state.w_participation_score,
      w_enjoyment_score: this.state.w_enjoyment_score,
      w_interest_score: this.state.w_interest_score,
      w_repeatability_score: this.state.w_repeatability_score,
      m_reading_performance_score: this.state.m_reading_performance_score,
      m_participation_score: this.state.m_participation_score,
      m_enjoyment_score: this.state.m_enjoyment_score,
      m_interest_score: this.state.m_interest_score,
      m_repeatability_score: this.state.m_repeatability_score,
      teacherNotes: this.state.teacherNotes,
      student_id: this.props.student.student_id,
      teacher_id: this.props.student.teacher_id
    }
    
    addInterestEngagementData(interestEngagement);
    // console.log('You have selected: ', this.state.morningMood, this.state.noonMood, this.state.endMood, ' and ', this.state.date);
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
                  <input type="date" name="date" onChange={this.handleDateChange} />
                </label>
              </div>
              <h3>This morning, I'm feeling:</h3>  
              <EmotionalStateRadioGroup name="morningMood"
                                    value={this.state.morningMood}
                                    handleOptionChange={this.handleOptionChange} 
                                    emotionalSpectrum={emotionalSpectrum}
              />
              <h3>At lunch time today, I'm feeling:</h3>
              <EmotionalStateRadioGroup name="noonMood"
                                    value={this.state.noonMood}
                                    handleOptionChange={this.handleOptionChange} 
                                    emotionalSpectrum={emotionalSpectrum}
              />
              <h3>After school today, I'm feeling:</h3>
              <EmotionalStateRadioGroup name="endMood"
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

export default InterestEngagementForm;
