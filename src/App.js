import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {count: 0};
    this.counterUpdate = this.counterUpdate.bind(this)
  }

  counterUpdate(e){
    this.setState({
      count: e.target.value.length
    })
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
