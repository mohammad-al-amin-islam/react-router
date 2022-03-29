import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { name, username, id } = friend;
    const navigate = useNavigate();
    /* const showFriendDetails = () => {
        const path = `/friends/${id}`;
        navigate(path);
    } */
    return (
        <div>
            <h2>{name}</h2>
            <Link to={'/friends/' + id}>Show Detail of : {id}</Link>
            {/* <button onClick={showFriendDetails}>{username} id :{id}</button> */}
        </div >
    );
};

export default Friend;