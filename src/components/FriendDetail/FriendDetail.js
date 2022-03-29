import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams(); or
    const { friendId } = useParams();
    const [details, setDetails] = useState({});
    // const { name, email, website, address } = details
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [friendId]);
    console.log(details)

    return (
        <div>
            <h1>This is the detail of my friend:{friendId}</h1>
            <h2>Name:{details.name}</h2>
            <h3>Email:{details.email}</h3>
            <p>Website:{details.website}</p>
            <p><small>City:{details.address?.city}</small></p>
            <p><small>lat:{details.address?.geo?.lat}</small></p>

        </div>
    );
};

export default FriendDetail;