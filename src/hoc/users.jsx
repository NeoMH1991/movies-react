import React, { useEffect, useState } from 'react'; //rsf - functional component
import axios from 'axios';
import { result } from 'lodash';

function Users(props) {
    let [users, setUsers] = useState([]); //this.state, empty arr

    useEffect(() => {
        async function getUsers() {
        const result = await axios('https://jsonplaceholder.typicode.com/users');
        setUsers(result.data);
        }
        getUsers();
    })

    return (
        <div>
            <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
        </div>
    );
}

export default Users;