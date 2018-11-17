import React, {Component} from 'react';
import Prompt from '../Prompt/Prompt';
import WritePage from '../WritePage/WritePage';

class Write extends Component {

  render() {
    return <div className="write">
      <Prompt 
        prompt={this.props.prompt}
        getImagePrompt={this.props.getImagePrompt}
        getTextPrompt={this.props.getTextPrompt}
      />
      <WritePage />
    </div>
  }
}


export default Write
