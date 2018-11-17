import React, {Component} from 'react';
import styles from './Prompt.css';
import ImagePrompt from '../ImagePrompt/ImagePrompt';
import TextPrompt from '../TextPrompt/TextPrompt';
import CameraIcon from '../CameraIcon/CameraIcon';


class Prompt extends Component {

  render(){
    return <div className="prompt">

      { ( this.props.prompt.status == 'requested' || this.props.prompt.status == 'received' )  && this.props.prompt.type == 'text' &&
        <TextPrompt prompt={this.props.prompt}/>
      }
      { ( this.props.prompt.status == 'requested' || this.props.prompt.status == 'received' ) && this.props.prompt.type == 'image' &&
        <ImagePrompt prompt={this.props.prompt} />
      }
      { !this.props.prompt.status &&
        <div className="prompt-types">
          <button className="prompt-type-button jo-chasing-icon jo-icon-1" onClick={this.props.getTextPrompt}>
            <span>TEXT</span>
          </button>
          <button className="prompt-type-button prompt-image-button jo-chasing-icon jo-icon-2" onClick={this.props.getImagePrompt}>
            <CameraIcon iconWidth="30px" color="#ffffff" hoverColor="#005a99" />
          </button>
        </div>
      }
    </div>
  }
}


export default Prompt
