import React from 'react';
import Idea from './idea';

class AllIdeas extends React.Component {
  renderIdeas() {

    return this.props.ideas.map((idea, index) =>
      <Idea key={index}
            id={idea.id}
            title={idea.title}
            body={idea.body}
            updateIdea={this.updateIdea}/>);
            // {...idea}/>);
  }

  updateIdea(idea) {
    console.log(this.props)
    // this.props.updateIdea(idea);
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
