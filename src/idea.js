import React from 'react';

class Idea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false
    }
  }

  renderOptions() {
    if (this.state.editable) {
      return (
        <div>
          <div>
            <input type='text' ref='title' defaultValue={this.props.title}></input>
          </div>
          <div>
            <textarea type='text' ref='body' defaultValue={this.props.body}></textarea>
          </div>
          <div>
            <button onClick={this.updateIdea.bind(this)}>Submit</button>
          </div>
        </div>
      )
    }

    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <button onClick={this.editIdea.bind(this)}>Edit</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderOptions()}
        <button>Delete</button>
      </div>
    );
  }

  editIdea() {
    this.setState({ editable: true });
  }

  updateIdea() {
    this.setState({ editable: !this.state.editable })
    let id = this.props.id
    let title = this.refs.title.value
    let body = this.refs.body.value

    let idea = {id: id, title: title, body: body}

    this.props.updateIdea(idea);
  }
}

export default Idea;
