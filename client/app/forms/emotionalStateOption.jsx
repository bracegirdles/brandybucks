import React, {Component, PropTypes} from 'react';
import EmotionalStateRadio from './EmotionalStateRadio.jsx';
import css from '../../css/forms.css';

const EmotionalStateOption = function({ name, value, handleOptionChange, emotionalSpectrum }) {
  return (
    <div className="radio-group">
      {emotionalSpectrum.map((emotion, index) =>
        <EmotionalStateRadio name={name}
                             value={emotion.score}
                             hexCode={emotion.hexCode}
                             checked={emotion.score === value}
                             handleOptionChange={handleOptionChange}
                             key={index}
        >
        </EmotionalStateRadio>
      )}
    </div>
  );  
}

EmotionalStateOption.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  emotionalSpectrum: PropTypes.array.isRequired
};

export default EmotionalStateOption;
