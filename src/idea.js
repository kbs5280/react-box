import React from 'react';

class Idea extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <button>Edit</button>
        <button>Delete</button>
        <div>{this.props.body}</div>
      </div>
    );
  }
}

export default Idea;
