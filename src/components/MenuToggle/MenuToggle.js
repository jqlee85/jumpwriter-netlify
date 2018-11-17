import React, {Component} from 'react'
import styles from './MenuToggle.css';
import {connect} from 'react-redux';
import {toggleNav} from '../../actions/appActions';

class MenuToggle extends Component {

  render() {
    let theClasses = 'menu-toggle';
    if (this.props.menuToggled) theClasses += ' toggled';
    return <button className={theClasses} id="nav-icon" onClick={this.props.toggleNav}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  }
}


// Application State
const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleNav: () => {
      dispatch(toggleNav());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MenuToggle);