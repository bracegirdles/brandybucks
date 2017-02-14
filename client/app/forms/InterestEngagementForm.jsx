import React from 'react';
import axios from 'axios';
import {getAllStudents} from '../helper/auth.js'
import {addLog} from '../helper/auth.js';
import InterestEngagementRadioGroup from './InterestEngagementRadioGroup.jsx';
import InterestEngagementRadio from './InterestEngagementRadio.jsx';
import {addInterestEngagementData, getAllInterestEngagementData} from '../helper/formHelpers.js';
import css from '../../css/forms.css';

class InterestEngagementForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      r_performance_score: 0,
      r_participation_score: 0,
      r_enjoyment_score: 0,
      r_interest_score: 0,
      r_repeatability_score: 0,
      w_reading_performance_score: 0,
      w_participation_score: 0,
      w_enjoyment_score: 0,
      w_interest_score: 0,
      w_repeatability_score: 0,
      m_reading_performance_score: 0,
      m_participation_score: 0,
      m_enjoyment_score: 0,
      m_interest_score: 0,
      m_repeatability_score: 0,
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
      student_id: this.props.student.id,
      teacher_id: this.props.student.teacher_id
    }
    
    addInterestEngagementData(interestEngagement);
    // console.log('You have selected: ', this.state.morningMood, this.state.noonMood, this.state.endMood, ' and ', this.state.date);
  }

  render() {
    return (
      <div className="container">
      <h1>Interest and Engagement</h1>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={this.handleFormSubmit}>
              <div className="date">
                <label>
                  Today is:
                  <input type="date" name="date" onChange={this.handleDateChange} />
                </label>
              </div>
              <h2>Reading:</h2>

              <h3>Performance</h3>  
              <InterestEngagementRadioGroup name="r_performance_score"
                                    value={this.state.r_performance_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>Willingess to Participate</h3>
              <InterestEngagementRadioGroup name="r_participation_score"
                                    value={this.state.r_participation_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>"Was the task fun today?"</h3>
              <InterestEngagementRadioGroup name="r_enjoyment_score"
                                    value={this.state.r_enjoyment_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>"Was the task interesting today?"</h3>
              <InterestEngagementRadioGroup name="r_interest_score"
                                    value={this.state.r_interest_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>"Would you want to do it again tomorrow?"</h3>
              <InterestEngagementRadioGroup name="r_repeatability_score"
                                    value={this.state.r_repeatability_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h2>Writing</h2>

              <h3>Performance</h3>
              <InterestEngagementRadioGroup name="w_reading_performance_score"
                                    value={this.state.w_reading_performance_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>Willingess to Participate</h3>
              <InterestEngagementRadioGroup name="w_participation_score"
                                    value={this.state.w_participation_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>"Was the task fun today?"</h3>
              <InterestEngagementRadioGroup name="w_enjoyment_score"
                                    value={this.state.w_enjoyment_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>"Was the task interesting today?"</h3>
              <InterestEngagementRadioGroup name="w_interest_score"
                                    value={this.state.w_interest_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>"Would you want to do it again tomorrow?"</h3>
              <InterestEngagementRadioGroup name="w_repeatability_score"
                                    value={this.state.w_repeatability_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h2>Math</h2>

              <h3>Performance</h3>
              <InterestEngagementRadioGroup name="m_reading_performance_score"
                                    value={this.state.m_reading_performance_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>Willingess to Participate</h3>
              <InterestEngagementRadioGroup name="m_participation_score"
                                    value={this.state.m_participation_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>"Was the task fun today?"</h3>
              <InterestEngagementRadioGroup name="m_enjoyment_score"
                                    value={this.state.m_enjoyment_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>"Was the task interesting today?"</h3>
              <InterestEngagementRadioGroup name="m_interest_score"
                                    value={this.state.m_interest_score}
                                    handleOptionChange={this.handleOptionChange}
              />
              <h3>"Would you want to do it again tomorrow?"</h3>
              <InterestEngagementRadioGroup name="m_repeatability_score"
                                    value={this.state.m_repeatability_score}
                                    handleOptionChange={this.handleOptionChange}
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
