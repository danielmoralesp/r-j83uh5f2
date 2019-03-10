import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {count: 0};
    this.counterUpdate = this.counterUpdate.bind(this)
  }

  counterUpdate(){
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.counterUpdate}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
