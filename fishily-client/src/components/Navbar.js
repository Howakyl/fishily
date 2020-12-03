import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserModel from '../models/user';

const Navbar = (props) => {
    
    // let [ logOutUser ] = useState({props})

    function logOutClick() {
        // eslint-disable-next-line
        UserModel.logout(props)
        .then((res) => {
            console.log( 'THIS THING:', props);
            props.setUser({})
        })
    }

    function loginNav() {
        if(!props.user.username) {
            return (
                <>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/login">Log In</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                </>
            )
        } else {
            return (
                <>
                <li className="nav-item active">
                    <Link className="nav-link" to="/" onClick={logOutClick}>Log Out</Link>
                </li>
                </>
            )
        }
    }

    console.log(loginNav())
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Fishily</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/users">All users</Link>
                </li>
                
                {loginNav()}
                {/* <li className="nav-item active">
                    <Link className="nav-link" to="/login">Log In</Link>
                </li> */}
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li> */}
                </ul>
                {/* <form className="form-inline my-2 my-md-0">
                <input className="form-control" type="text" placeholder="Search"/>
                </form> */}
            </div>
        </nav>
    )
}

export default Navbar;