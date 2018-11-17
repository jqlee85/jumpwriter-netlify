import React, {Component} from 'react'
import styles from './Header.css';
import MenuToggle from '../MenuToggle/MenuToggle';
import LoginForm from '../LoginForm/LoginForm';
import { Link } from 'react-router-dom';

class Header extends Component {



  render(){
    return <header id="header">
      <MenuToggle menuToggled={this.props.menuToggled} />
      <Link className="site-title" to='/'><h1>JumpWriter</h1></Link>
    </header>
  }

}

export default Header
