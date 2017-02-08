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
          <AllIdeas ideas={this.state.ideas}
                    updateIdea={this.updateIdea.bind(this)}
                    deleteIdea={this.deleteIdea.bind(this)}/>
        </div>
      </div>
    );
  }

  handleSubmit(response) {
    this.state.ideas.unshift(response.data);
    this.setState({ ideas: this.state.ideas });
  }

  updateIdea(idea) {
    Axios.put(`https://idea-box-ks.herokuapp.com/api/v1/ideas/${idea.id}`,
             { id: idea.id, title: idea.title, body: idea.body })
         .then((response) => {
           this.handleUpdate(response.data);
         });
  }

  handleUpdate(newIdea) {
    const ideas = this.state.ideas.filter((idea) => {
      return idea.id !== newIdea.id;
    })
    ideas.unshift(newIdea);
    this.setState( {ideas: ideas });
  }

  deleteIdea(id) {
    Axios.delete(`https://idea-box-ks.herokuapp.com/api/v1/ideas/${id}`, { id: id })
         .then((response) => {
           this.handleDelete(id);
         })
         .catch((error) => {
           alert(error);
         });
  }

  handleDelete(id) {
    const ideas = this.state.ideas.filter((idea) => {
      return idea.id !== id;
    });
    this.setState({ ideas: ideas })
  }
}

export default App;
