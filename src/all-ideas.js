import _ from 'lodash';
import React from 'react';
import Idea from './idea';

class AllIdeas extends React.Component {
  renderIdeas() {
    return _.map(this.props.ideas, (idea, index) => <Idea key={index
    } {...idea} />);
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>
              Headery
            </th>
          </tr>  
        </thead>
          <tbody>
            {this.renderIdeas()}
          </tbody>
      </table>
    )
  }
}

export default AllIdeas;
