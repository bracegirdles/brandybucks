import React, {Component, PropTypes} from 'react';
import emotionalSpectrum from './emotionalSpectrumData.js'
import css from '../../css/forms.css';

const EmotionalStateRadio = function({ name, value, hexCode, checked, handleOptionChange }) {
  return (
    <div className="radio">
      <label>
        <input type="radio" 
               name={name}
               value={value} 
               checked={checked} 
               onChange={handleOptionChange} />
        {String.fromCharCode(hexCode.surr1, hexCode.surr2)}
      </label>
    </div>
  );
}

EmotionalStateRadio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  hexCode: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
}

export default EmotionalStateRadio;