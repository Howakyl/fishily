import { Link } from 'react-router-dom';
import UserModel from '../models/user';

const Navbar = (props) => {
    
    function logOutClick() {
        
        UserModel.logout(props)
        .then((res) => {
            props.setUser({});
            localStorage.clear();
        })
    }

    function confirmLogOut () {
        const confirmLogOut = window.confirm('are you sure you want to log out?');
        if (confirmLogOut === true) return logOutClick();
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
                    <Link className="nav-link" to="/" onClick={confirmLogOut}>Log Out</Link>
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
                        <Link className="nav-link" to='/posts/new'>New Catch</Link>
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
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#fishilyNav" aria-controls="fishilyNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="fishilyNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/posts">All Catches</Link>
                </li>

                {renderCreatePost()}
                {loginNav()}
                </ul>
                {renderProfileImg()}
            </div>
        </nav>
    )
}

export default Navbar;