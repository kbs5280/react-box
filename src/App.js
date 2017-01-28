import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Header from './header';
import Intro from './intro';
import AllIdeas from './all-ideas';
import NewIdea from './new-idea';

// const ideas = []
//   {
//     title: 'Idea One',
//     body: 'This is the body of idea one.'
//   },
//   {
//     title: 'Idea Two',
//     body: 'This is the body of idea two.'
//   },
//   {
//     title: 'Idea Three',
//     body: 'This the body of idea three.'
//   }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ideas: []
    };
  }

  componentWillMount() {
    Axios.get('https://idea-box-ks.herokuapp.com/api/v1/ideas')
         .then((response) => {
           console.log( response);
           this.setState({ ideas: response.data });
           console.log(this.state.ideas);
    });
  }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-intro">
          <Intro />
        </div>
        <div>
          <NewIdea />
        </div>
        <div className="ideas">
          <AllIdeas ideas={this.state.ideas} />
        </div>
      </div>
    );
  }
}

export default App;
