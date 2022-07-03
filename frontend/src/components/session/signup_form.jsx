import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// const SignupForm = ({signedIn, errors, signup, login}) => {
//   const [state, setState] = useState({email: "", handle: "", password: "", password2: "", errors: errors})

//   // useEffect(() => {
//   //   setState({...state, errors: errors})
//   // }, [errors])

//   const update = feild => {
//     return e => {
//       setState({...state, [feild]: e.target.value })
//     }
//   }

//   const history = useHistory();

//   const handleSubmit = e => {
//     e.preventDefault();
//     //debugger
//     signup({...state});
//     //debugger
//     if (state.errors.length === 0) {
//       login({email: state.email, password: state.password, errors: errors})
//       history.push('./tweets');
//     }
//   }

//   const renderErrors = () => {
//     return(
//       <ul>
//         {Object.keys(errors).map((error, i) => (
//           <li key={`error-${i}`}>
//             {errors[error]}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Handle</label>
//         <input type="text" value={state.handle} onChange={update('handle')} />
//         <label>Email</label>
//         <input type="text" value={state.email} onChange={update('email')} />
//         <label>Password</label>
//         <input type="password" value={state.password} onChange={update('password')} />
//         <label>Confirm your password</label>
//         <input type="password" value={state.password2} onChange={update('password2')} />
//         <button>Sign Up</button>
//         {renderErrors}
//       </form>
//     </div>
//   )
// }

// export default SignupForm;

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated === true) {
      this.props.history.push('/tweets');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
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

export default withRouter(SignupForm);