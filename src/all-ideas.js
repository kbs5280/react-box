import React from 'react';
import Idea from './idea';

class AllIdeas extends React.Component {
  renderIdeas() {

    return this.props.ideas.map((idea, index) =>
      <Idea key={index}
            id={idea.id}
            title={idea.title}
            body={idea.body}
            updateIdea={this.updateIdea.bind(this)}
            deleteIdea={this.deleteIdea.bind(this)}/>);
            // {...idea}/>);
  }

  updateIdea(idea) {
    this.props.updateIdea(idea);
  }

  deleteIdea(id) {
    this.props.deleteIdea(id);
  }

  render() {
    return(
    <div>
      {this.renderIdeas()}
    </div>
    )
  }

}

export default AllIdeas;
