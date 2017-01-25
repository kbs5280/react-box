import React, { Component } from 'react';
import './App.css';
import AllIdeas from './all-ideas';

//////////////////////////////////

// hardcoded ideas objects will be replaced with API calls
// using Axios

const ideas = [
  {
    title: 'Idea One',
    body: 'This is the body of idea one.'
  },
  {
    title: 'Idea Two',
    body: 'This is the body of idea two.'
  },
  {
    title: 'Idea Three',
    body: 'This the body of idea three.'
  }
]
//////////////////////////////////

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ideas
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Box</h2>
        </div>
        <div className="App-intro">
          An idea collection app built with React.
        </div>
        <div className="ideas">
          <AllIdeas ideas={this.state.ideas} />
        </div>
      </div>
    );
  }
}

export default App;
