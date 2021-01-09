import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = (props) => {

    function bioText () {
        if (props.user.bio) {
            return props.user.bio
        } else {
            return <p>This user has no bio.</p>
        }
    }

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={props.user.picture} className="card-img-top" alt='user'/>
            <div className="card-body">
                <h5 className="card-title text-truncate">{props.user.username}</h5>
                <div className="card-text text-truncate">{bioText()}</div>
                <Link to={`users/${props.user._id}`} className="btn btn-primary">View Profile</Link>
            </div>
        </div>
    )
}

export default UserCard;