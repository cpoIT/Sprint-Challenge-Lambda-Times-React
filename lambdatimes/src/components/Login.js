import React from 'react';
// import './Login.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      username: '',
      password: '',
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
        dispatch(userActions.login(username, password));
    }
  }


  render() {
    return (
      <div>
        <div>
          <h1>Lambda Times Login</h1>
        </div>
          <input
            type='text'
            placeholder='username'
            name='username'
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            type='text'
            placeholder='username'
            name='password'
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleLoginSubmit} >Login</button>
      </div>
    ) // return
  } // render

}

export default LoginPage

// import React, {Component} from 'react';
// import './Login.css';
// import { StyledButton } from '../../Styles';


// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }

//   handleInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleLoginSubmit = e => {
//     const user = this.state.username;
//     localStorage.setItem('user', user);
//     window.location.reload();
//   };

//   render() {
//     return (
//       <div className='login-form'>
//       <div className='login-border'>
//         <h3>Welcome to React Insta Clone</h3>
//         <p>Please Login</p>
//         <div>
//           <input
//             type="text"
//             placeholder="User Name"
//             name="username"
//             value={this.state.username}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleInputChange}
//           />
//           <br />
//           <StyledButton onClick={this.handleLoginSubmit}>
//             Log In
//           </StyledButton>
//         </div>
//       </div>
//       </div>
//     );
//   }
// }

// export default Login;