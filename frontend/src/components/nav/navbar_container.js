import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         logout: () => dispatch(logout())
//     }
// }

export default connect(mapStateToProps, {logout})(NavBar);