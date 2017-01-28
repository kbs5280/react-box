import React from 'react';
import Axios from 'axios';

class NewIdea extends React.Component {

  handleClick() {
    let title = this.refs.title.value;
    let body = this.refs.body.value;
    // remove console.log
    // console.log(title, body);
    // add axios call to API
    Axios.post('https://idea-box-ks.herokuapp.com/ideas', {idea: {title: title, body: body }})
         .then(function(response) {
          //  console.log('Response: ' + response)
         });
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
