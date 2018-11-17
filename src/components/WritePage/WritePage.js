import React, {Component} from 'react';
import styles from './WritePage.css';

class WritePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textContent : ''
    }

  }

  onChange = (event) => {
    this.setState({textContent: event.target.value});
  }

  saveWriting = () => {
    console.log(this.state.textContent);
  }

  render() {
    return <div className="write-page">
      <textarea className="write-textarea" onChange={this.onChange} value={this.state.textContent} />
      <button className="save-prompt" onClick={this.saveWriting}>Save</button>
  </div>
  }
}


export default WritePage
