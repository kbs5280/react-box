import React from 'react';

class Idea extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.body}</td>
      </tr>
    );
  }
}

export default Idea;
