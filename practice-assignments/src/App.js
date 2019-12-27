import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/validationComponent';
import CharComponent from './CharComponent/charComponent';

class App extends Component {
  state = {
    charArray: [],
    textLength: null
  }

  getLength = (event) => {
    const entry = event.target.value.split('')
    const textLength = entry.length;
    this.setState({ textLength: textLength, charArray: entry });
  }

  deleteChar = (event, charIndex) => {
    const charArray = [...this.state.charArray];
    charArray.splice(charIndex, 1);
    this.setState({ charArray: charArray })
  }

  render() {
    return (
      <div>
        <input
          onChange={(event) => this.getLength(event)}
          value={this.state.charArray.join('')}></input>

        <ValidationComponent
          length={this.state.textLength} />

        {this.state.charArray.map((char, index) => {
          return <CharComponent
            letter={char}
            changed={(event) => this.deleteChar(event, index)} />
        })}
      </div>
    );
  }
}

export default App;
