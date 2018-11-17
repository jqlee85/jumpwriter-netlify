import React, {Component} from 'react';
import styles from './Nav.css';
import { Link } from 'react-router-dom';
// import LoginForm from '../LoginForm/LoginForm';


class Nav extends Component {

  render() {
    let theClasses = 'main-nav';
    if (this.props.menuToggled) theClasses += ' toggled';
    return <nav id="main-nav" className={theClasses}>
        
        <ul className="menu">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li className="login-item">
            {/* <LoginForm 
              userLogin={this.props.userLogin}
              userData={this.props.userData}
              userLogout={this.props.userLogout}
            /> */}
          </li>
        </ul>
        
    </nav>;
  }

}

export default Nav
