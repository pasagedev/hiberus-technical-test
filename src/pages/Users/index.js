import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Context from "../../context/UserContext";
import { deleteUser, getUsers } from "../../services/users";
import User from "../../components/User";
import { ListGroup, Row, Alert } from "react-bootstrap";
import Notification from "../../components/Notification";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState(false);
    const { token, setToken } = useContext(Context);

    useEffect(() => {
        !token
            ? setUsers([])
            : getUsers(token)
                  .then(data => setUsers(data))
                  .catch(e => {
                      if (e.errCode === 401) {
                          setToken(null);
                          localStorage.removeItem("token");
                      }
                  });
    }, [token, setToken]);

    const handlerDeleteUser = id => {
        deleteUser(id, token)
            .then(res => {
                setUsers(users => users.filter(user => user.id !== id));
                setMessage({
                    text: res.message,
                    type: "success",
                });
            })
            .catch(e => {
                setMessage({
                    text: e.message,
                    type: "danger",
                });
            });
        // necesario para re-renderizar si hay el mismo mensaje
        setMessage(false);
    };

    return (
        <Row>
            <Notification text={message.text} type={message.type} />
            {!token ? (
                <>
                    <Alert variant="warning">
                        Necesita estar logueado para ver el listado de usuarios
                    </Alert>
                    <Link to="/login">Iniciar sesión</Link>
                </>
            ) : (
                <>
                    <h2>Listado de usuarios</h2>
                    <ListGroup as="ul">
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
                    </ListGroup>
                </>
            )}
        </Row>
    );
}
