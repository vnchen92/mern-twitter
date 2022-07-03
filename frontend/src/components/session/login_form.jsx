// import React, { useEffect, useState } from 'react';
// import withRouter from 'react-router-dom';

// const SessionForm = ({errors, login}) => {
//     const [state, setState] = useState({email: "", password: ""});

//     useEffect(() => {

//     }, [])

//     const handleSubmit = e => {
//         e.preventDefault();
//         login({...state});
//     }

//     const renderErrors = () => {
//         return (
//             <ul>
//                 {Object.keys(errors).map((error, i) => (
//                     <li key={`error-${i}`}>
//                         {this.state.errors[error]}
//                     </li>
//                 ))}
//             </ul>
//         )
//     }
 
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Email</label>
//                 <input type="text" value={state.email} onChange={e => setState({...state, email: e.target.value})} />
//                 <label>Password</label>
//                 <input type="text" value={state.password} onChange={e => setState({...state, password: e.target.value})} />
//                 <button>Log In</button>
//                 {renderErrors}
//             </form>
//         </div>
//     )
// }

// export default withRouter(SessionForm);

import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/tweets');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);