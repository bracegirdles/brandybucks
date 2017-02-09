import React from 'react';
import axios from 'axios';
import {getAllStudents} from './helper/auth.js'
import {addLog} from './helper/auth.js';

let emotionalSpectrum = 
  [{affect: 'Crying', 
    score: -4,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE2D'
             }
    },
    {affect: 'Tear Drop', 
    score: -3,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE22'
             }
    },
    {affect: 'Frown', 
    score: -2,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE41'
             }
    },
    {affect: 'Slant', 
    score: -1,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE15'
             }
    },
    {affect: 'Neutral', 
    score: 0,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE10'
             }
    },
    {affect: 'Small Smile', 
    score: 1,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE42'
             }
    },
    {affect: 'Big Smile', 
    score: 2,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE0A'
             }
    },
    {affect: 'Really Big Smile', 
    score: 3,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE00'
             }
    },
    {affect: 'So Fucking Happy', 
    score: 4,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE04'
             }
    },]

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
import React from 'react';
import axios from 'axios';
import {getAllStudents} from './helper/auth.js'
import {addLog} from './helper/auth.js';

let emotionalSpectrum = 
  [{affect: 'Crying', 
    score: -4,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE2D'
             }
    },
    {affect: 'Tear Drop', 
    score: -3,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE22'
             }
    },
    {affect: 'Frown', 
    score: -2,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE41'
             }
    },
    {affect: 'Slant', 
    score: -1,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE15'
             }
    },
    {affect: 'Neutral', 
    score: 0,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE10'
             }
    },
    {affect: 'Small Smile', 
    score: 1,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE42'
             }
    },
    {affect: 'Big Smile', 
    score: 2,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE0A'
             }
    },
    {affect: 'Really Big Smile', 
    score: 3,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE00'
             }
    },
    {affect: 'So Fucking Happy', 
    score: 4,
    hexCode: {surr1: '0xD83D', 
              surr2: '0xDE04'
             }
    },]

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
class EmotionalStateForm extends React.Component {  // CHANGE NAME!!!!
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      morningMood: 'option1',
      noonMood: 'option1',
      endMood: 'option1'
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
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              
              <div className="radio">
                <label>
                  <input type="radio" name="morningMood" value="option1" checked={this.state.morningMood === 'option1'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE04)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="morningMood" value="option2" checked={this.state.morningMood === 'option2'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE00)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="morningMood" value="option3" checked={this.state.morningMood === 'option3'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE0A)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="morningMood" value="option4" checked={this.state.morningMood === 'option4'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE42)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="morningMood" value="option5" checked={this.state.morningMood === 'option5'} onChange={this.handleOptionChange}/>
                  {String.fromCharCode(0xD83D, 0xDE10)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="morningMood" value="option6" checked={this.state.morningMood === 'option6'} onChange={this.handleOptionChange}/>
                  {String.fromCharCode(0xD83D, 0xDE15)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="morningMood" value="option7" checked={this.state.morningMood === 'option7'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE41)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="morningMood" value="option8" checked={this.state.morningMood === 'option8'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE22)}
                </label>
              </div>                                          
              <div className="radio">
                <label>
                  <input type="radio" name="morningMood" value="option9" checked={this.state.morningMood === 'option9'} onChange={this.handleOptionChange}/>
                  {String.fromCharCode(0xD83D, 0xDE2D)}
                </label>
              </div>

              <br/><br/><br/>

              <div className="radio">
                <label>
                  <input type="radio" name="noonMood" value="option1" checked={this.state.noonMood === 'option1'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE04)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="noonMood" value="option2" checked={this.state.noonMood === 'option2'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE00)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="noonMood" value="option3" checked={this.state.noonMood === 'option3'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE0A)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="noonMood" value="option4" checked={this.state.noonMood === 'option4'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE42)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="noonMood" value="option5" checked={this.state.noonMood === 'option5'} onChange={this.handleOptionChange}/>
                  {String.fromCharCode(0xD83D, 0xDE10)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="noonMood" value="option6" checked={this.state.noonMood === 'option6'} onChange={this.handleOptionChange}/>
                  {String.fromCharCode(0xD83D, 0xDE15)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="noonMood" value="option7" checked={this.state.noonMood === 'option7'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE41)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="noonMood" value="option8" checked={this.state.noonMood === 'option8'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE22)}
                </label>
              </div>                                          
              <div className="radio">
                <label>
                  <input type="radio" name="noonMood" value="option9" checked={this.state.noonMood === 'option9'} onChange={this.handleOptionChange}/>
                  {String.fromCharCode(0xD83D, 0xDE2D)}
                </label>
              </div>

              <br/><br/><br/>

              <div className="radio">
                <label>
                  <input type="radio" name="endMood" value="option1" checked={this.state.endMood === 'option1'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE04)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="endMood" value="option2" checked={this.state.endMood === 'option2'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE00)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="endMood" value="option3" checked={this.state.endMood === 'option3'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE0A)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="endMood" value="option4" checked={this.state.endMood === 'option4'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE42)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="endMood" value="option5" checked={this.state.endMood === 'option5'} onChange={this.handleOptionChange}/>
                  {String.fromCharCode(0xD83D, 0xDE10)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="endMood" value="option6" checked={this.state.endMood === 'option6'} onChange={this.handleOptionChange}/>
                  {String.fromCharCode(0xD83D, 0xDE15)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="endMood" value="option7" checked={this.state.endMood === 'option7'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE41)}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="endMood" value="option8" checked={this.state.endMood === 'option8'} onChange={this.handleOptionChange} />
                  {String.fromCharCode(0xD83D, 0xDE22)}
                </label>
              </div>                                          
              <div className="radio">
                <label>
                  <input type="radio" name="endMood" value="option9" checked={this.state.endMood === 'option9'} onChange={this.handleOptionChange}/>
                  {String.fromCharCode(0xD83D, 0xDE2D)}
                </label>
              </div>


              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default EmotionalStateForm;  // CHANGE NAME!!!
