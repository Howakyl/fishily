import React from 'react';

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
                <h5 className="card-title">{props.user.username}</h5>
                <p className="card-text">{bioText()}</p>
                <a href="/" className="btn btn-primary">View Profile</a>
            </div>
        </div>
    )
}

export default UserCard;