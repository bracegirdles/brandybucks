import React from 'react';

class emotionalState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };
  }

render() {
  return (
    <div className="radio">
    <label>
      <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
      {String.fromCharCode(0xD83D, 0xDE04)}
    </label>
  </div>
  );
}