import { Link } from 'react-router-dom';
import UserModel from '../models/user';

const Navbar = (props) => {
    
    function logOutClick() {
        
        UserModel.logout(props)
        .then((res) => {
            console.log( 'THIS THING:', props);
            props.setUser({});
            localStorage.clear();
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
                <li className="nav-item ">
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

    function renderProfileImg () {
        if (props.user.username) {
            return (
                <Link to={`/users/${props.user._id}`}>
                    <img src={props.user.picture} alt="profile" className="navbar-user-img"/>
                </Link>
            )
        }
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="nav-title">
                <Link className="navbar-brand navbar-title" to="/">Fishily</Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/users">All Users</Link>
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
                {renderProfileImg()}
            </div>
        </nav>
    )
}

export default Navbar;