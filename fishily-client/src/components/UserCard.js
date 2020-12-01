import React from 'react';

const UserCard = (props) => {
    return (
        <li>
            <h2>{props.user.firstName}</h2>
        </li>
    )
}

export default UserCard;