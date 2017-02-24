import React from 'react';
import Axios from 'axios';

class NewIdea extends React.Component {

  handleClick(event) {
    event.preventDefault();

    let title = this.refs.title.value;
    let body = this.refs.body.value;

    Axios.post('http://localhost:3001', {idea: {title: title, body: body }})
         .then((response) => {
           console.log(response);
           this.props.handleSubmit(response);
           this.refs.title.value = '';
           this.refs.body.value = '';
         });
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
