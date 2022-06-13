import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Context from "../../context/UserContext";
import { deleteUser, getUsers } from "../../services/users";
import User from "../../components/User";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState(false);
    const { token } = useContext(Context);

    useEffect(() => {
        !token ? setUsers([]) : getUsers(token).then(data => setUsers(data));
    }, [token]);

    const handlerDeleteUser = id => {
        deleteUser(id, token)
            .then(res => {
                setMessage(res.message);
                setUsers(users => users.filter(user => user.id !== id));
            })
            .catch(e => setMessage(e.message));
    };

    return (
        <>
            {message && <p>{message}</p>}
            {!token ? (
                <Link to="/login">Iniciar sesión</Link>
            ) : (
                <ul>
                    {users.map(user => (
                        <User
                            key={user.id}
                            name={user.name}
                            surname={user.surname}
                            email={user.email}
                            id={user.id}
                            onDeleteHandler={handlerDeleteUser}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}
