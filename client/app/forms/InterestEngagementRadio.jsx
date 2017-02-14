import React, {Component, PropTypes} from 'react';
import css from '../../css/forms.css';

const InterestEngagementRadio = function({ name, value, checked, handleOptionChange }) {
  return (
    <div className="radio">
      <label>
        <input type="radio" 
               name={name}
               value={value} 
               checked={checked} 
               onChange={handleOptionChange} />
      </label>
    </div>
  );
}

InterestEngagementRadio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
}

export default InterestEngagementRadio;