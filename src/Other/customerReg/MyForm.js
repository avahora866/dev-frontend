import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        {selectedDay && <div>Day: {selectedDay.toLocaleDateString()}</div>}
        {!selectedDay && <div>D.O.B </div>}
        <DayPickerInput onDayChange={this.handleDayChange} />
      </div>
    );
  }
}