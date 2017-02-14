import React, {Component, PropTypes} from 'react';
import InterestEngagementRadio from './InterestEngagementRadio.jsx';
import emotionalSpectrum from './emotionalSpectrumData.js';
import css from '../../css/forms.css';

const InterestEngagementRadioGroup = function({ name, value, handleOptionChange }) {
  return (
    <div className="row">
      <div className="radio-group">
        {emotionalSpectrum.map((ie, index) =>
          <InterestEngagementRadio name={name}
                               value={ie.score}
                               checked={ie.score === value}
                               handleOptionChange={handleOptionChange}
                               key={index}
          >
          </InterestEngagementRadio>
        )}
      </div>
    </div>
  );  
}

InterestEngagementRadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
};

export default InterestEngagementRadioGroup;