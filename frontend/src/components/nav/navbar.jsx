import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({loggedIn, logout}) => {
    const handleClick = e => {
        e.preventDefault();
        logout();
    }

    let getLinks;
    if (loggedIn) {
        getLinks = 
            <div>
                <Link to={'/tweets'}>All Tweets</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_tweet'}>Write a Tweet</Link>
                <button onClick={handleClick}>Log Out</button>
            </div>
    } else {
        getLinks =
            <div>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
    }

    return (
        <div>
            <h1>Chirper</h1>
            {getLinks}
        </div>
    )
}

export default NavBar;