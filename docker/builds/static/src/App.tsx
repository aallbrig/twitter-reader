import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Twitter Reader for Target Twitter Account</h2>
        </div>
        <p className="App-intro">
          (Placeholder for filter input field) <br />
          (Placeholder for recent 10 tweets)
        </p>
      </div>
    );
  }
}

export default App;
