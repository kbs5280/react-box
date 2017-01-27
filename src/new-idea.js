import React from 'react';

class NewIdea extends React.Component {

  handleClick() {
    let title = this.refs.title.value;
    let body = this.refs.body.value;
    console.log(title, body);
    // remove console.log
    // add axios call to API
    // pass handleSubmit function in App.js, pass as props
    // call handleSubmit and pass the new skill to set state
  }

  render() {
    return (
      <form>
        <input ref="title" placeholder="Enter an idea title" />
        <input ref="body" placeholder="Enter an idea" />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </form>
    );
  }
}

export default NewIdea;
