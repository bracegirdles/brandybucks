import React from 'react';
import axios from 'axios';
import {getAllStudents} from '../helper/auth.js'
import {addLog} from '../helper/auth.js';
import InterpersonalSkillsRadioGroup from './InterpersonalSkillsRadioGroup.jsx';
import InterpersonalSkillsRadio from './InterpersonalSkillsRadio.jsx';
// import emotionalSpectrum from './emotionalSpectrumData.js';
import css from '../../css/forms.css';

class InterpersonalSkillsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      coop_listen_to_instruction_score:
      one_on_one_cheering_up_others_score: 
      one_on_one_empowering_others_score: 
      one_on_one_helping_others_score: 
      one_on_one_sharing_score: 
      cd_behavior_score: 
      cd_morale_score: 
      coop_notes: null,
      one_on_one_notes: null,
      cd_notes: null
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
    
    const interpersonalSkills = {
      date: this.state.date,
      coop_listen_to_instruction_score: this.state.coop_listen_to_instruction_score,
      one_on_one_cheering_up_others_score:  this.state.one_on_one_cheering_up_others_score,
      one_on_one_empowering_others_score:  this.state.one_on_one_empowering_others_score,
      one_on_one_helping_others_score:  this.state.one_on_one_helping_others_score,
      one_on_one_sharing_score:  this.state.one_on_one_sharing_score,
      cd_behavior_score:  this.state.cd_behavior_score,
      cd_morale_score:  this.state.cd_morale_score,
      coop_notes: null, this.state.coop_notes,
      one_on_one_notes: null, this.state.one_on_one_notes,
      cd_notes: null this.state.cd_notes,
      student_id: this.props.student.student_id,
      teacher_id: this.props.student.teacher_id
    }
    
    addInterpersonalSkillsData(interpersonalSkills);
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

export default IntepersonalSkillsForm;
