import React, { Component } from 'react';

export default class App extends Component {
  state = {
    name: 'world',
    inputName: '',
  };

  handleInputChange = e => {
    this.setState({ inputName: e.target.value });
  };
  handleButtonClick = () => {
    this.setState({ name: this.state.inputName });
  };

  render() {
    const { inputName, name } = this.state;
    return (
      <>
        <h1>Hello, {name}!</h1>
        <input value={inputName} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>Click me</button>
      </>
    );
  }
}
