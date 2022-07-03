import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const SessionForm = ({errors, login}) => {
    const [state, setState] = useState({email: "", password: "", errors: errors});

    const update = feild => {
      return e => {
        setState({...state, [feild]: e.target.value})
      }
    }

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        login({...state});
        history.push('./tweets');
    }

    const renderErrors = () => {
        return (
            <ul>
                {Object.keys(errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" value={state.email} onChange={update('email')} />
                <label>Password</label>
                <input type="text" value={state.password} onChange={update('password')} />
                <button>Log In</button>
                {renderErrors}
            </form>
        </div>
    )
}

export default SessionForm;