import React from 'react';
import Idea from './idea';

class AllIdeas extends React.Component {
  renderIdeas() {

    console.log(this.props.ideas);

    return this.props.ideas.map((idea, index) =>
      <Idea key={index}
            title={idea.title}
            body={idea.body}/>);
            // {...idea}/>);
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
