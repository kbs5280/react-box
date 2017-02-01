import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Header from './header';
import Intro from './intro';
import AllIdeas from './all-ideas';
import NewIdea from './new-idea';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ideas: []
    };
  }

  componentDidMount() {
    Axios.get('https://idea-box-ks.herokuapp.com/api/v1/ideas')
         .then((response) => {
           this.setState({ ideas: response.data });
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
          <NewIdea handleSubmit={this.handleSubmit.bind(this)} />
        </div>
        <div className="ideas">
          <AllIdeas ideas={this.state.ideas} />
        </div>
      </div>
    );
  }

  handleSubmit(response) {
    this.state.ideas.unshift(response.data);
    this.setState({ ideas: this.state.ideas });
  }
}


export default App;
