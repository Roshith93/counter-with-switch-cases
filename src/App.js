import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter : 0
  }
  handleChange = (action, value) => {
    switch(action){
      case 'add':
        this.setState(prevState => { return{ counter : prevState.counter + 1} })
        break;
      case 'sub':
        this.setState(prevState => { return {counter:prevState.counter -1}})
        break;
      case 'inc5':
      this.setState(prevState => {return {counter : prevState.counter + value}})
      break;
      case 'dec5':
      this.setState(prevState => { return {counter : prevState.counter - value}})
      break;
      default : 
        return this.state.counter;
    }
   
  }
  render() {
    return (
      <div className="App">
       <h1>Counter</h1>
       <button onClick={() => this.handleChange('add')}>+ 1</button>
       <button onClick={() => this.handleChange('sub')}> -1 </button>

       <h3>{this.state.counter}</h3>
       <button onClick={() => this.handleChange('inc5',5)}> + 5</button>
       <button onClick={() => this.handleChange('dec5',5)}> -5</button>
      </div>
    );
  }
}

export default App;
