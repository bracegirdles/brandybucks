import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props)
      this.state = {
        isChecked: true,
      }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange() {
    const { handleCheckboxChange, label } = this.props;

    this.setState({
      isChecked: !this.state.isChecked
    });
    console.log(this.state.isChecked)
    // handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
