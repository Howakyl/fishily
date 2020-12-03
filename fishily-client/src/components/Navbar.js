import { Link } from 'react-router-dom';
import UserModel from '../models/user';

const Navbar = (props) => {
    
    function logOutClick() {
        
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
                    <li >
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

    function renderCreatePost() {
        if(props.user.username) {
            return (
                <>
                    <li className="nav-item active">
                        <Link className="nav-link" to='/posts/new'>New Post</Link>
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
                <li className="nav-item active">
                    <Link className="nav-link" to="/posts">All Posts</Link>
                </li>

                {renderCreatePost()}
                {loginNav()}
                </ul>
                {/* <form className="form-inline my-2 my-md-0">
                <input className="form-control" type="text" placeholder="Search"/>
                </form> */}
            </div>
        </nav>
    )
}

export default Navbar;