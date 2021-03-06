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
        <button onClick={this.deleteIdea.bind(this)}>Delete</button>
      </div>
    );
  }

  editIdea() {
    this.setState({ editable: true });
  }

  updateIdea() {
    this.setState({ editable: !this.state.editable })
    const id = this.props.id;
    const title = this.refs.title.value;
    const body = this.refs.body.value;

    const idea = {id: id, title: title, body: body}

    this.props.updateIdea(idea);
  }

  deleteIdea() {
    const id = this.props.id;

    this.props.deleteIdea(id);
  }
}

export default Idea;
