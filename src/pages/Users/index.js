import { useContext, useEffect, useState } from "react";

import Context from "../../context/UserContext";
import { getUsers } from "../../services/users";

export default function Users() {
    const [users, setUsers] = useState([]);
    const { token } = useContext(Context);

    useEffect(() => {
        !token ? setUsers([]) : getUsers(token).then(data => setUsers(data));
    }, [token]);

    return (
        <ul>
            {users.map(user => (
                <li key={user.email}>
                    <p>{user.name}</p>
                    <p>{user.surname}</p>
                    <p>{user.email}</p>
                    <p>{user.id}</p>
                </li>
            ))}
        </ul>
    );
}
