import React, {Component, PropTypes} from 'react';
import EmotionalStateRadio from './EmotionalStateRadio.jsx';
import formStyles from './forms.css';

const EmotionalStateOption = function({ name, value, handleOptionChange, emotionalSpectrum }) {
  return (
    <div className="radio-group">
      {emotionalSpectrum.map(({affect: affectValue, hexCode}, index) =>
        <EmotionalStateRadio name={name}
                             value={affectValue}
                             hexCode={hexCode}
                             checked={affectValue === value}
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
  value: PropTypes.string.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  emotionalSpectrum: PropTypes.array.isRequired
};

export default EmotionalStateOption;
