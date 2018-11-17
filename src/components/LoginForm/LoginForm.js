import React, {Component} from 'react'
import styles from './LoginForm.css';

class LoginForm extends Component {

  userLogin = (e) => {
    e.preventDefault();
    let userName = this.userName.value;
    let password = this.password.value;
    this.props.userLogin(userName,password);
  }

  render() {
    return <form className="login-form" id="login-form" onSubmit={this.userLogin}>
      { this.props.userData.auth_status != 'logged_in' && 
      <div><input name="userName" type="text" ref={ function(node){ this.userName = node }.bind(this) }/>
      <input name="password" type="text" ref={ function(node){ this.password = node }.bind(this) }/>
      <input type="submit" className="button" value="Login" /></div>
      }
      { this.props.userData.auth_status == 'failed' &&
        <span className="form-error">{this.props.userData.data.message}</span>
      }
      { this.props.userData.auth_status == 'logged_in' &&
        <button className="logout-button" onClick={this.props.userLogout}>Logout</button>
      }
      { this.props.userData.auth_status != 'logged_in' && 
        <span className="register">or <a className="signup">Sign Up</a></span>
      }
    </form>
  }
}

export default LoginForm;