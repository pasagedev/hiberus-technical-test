import { useContext, useState } from "react";
import Context from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";

import { login } from "../../services/auth";
import Notification from "../../components/Notification";
import LoginForm from "../../components/LoginForm";

export default function Login() {
    const { token, setToken } = useContext(Context);
    const [message, setMessage] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e, email, password) => {
        e.preventDefault();
        login(email, password)
            .then(res => {
                setToken(res);
                localStorage.setItem("token", JSON.stringify(res));
                navigate("/users");
            })
            .catch(err => setMessage({ text: err.message, type: "danger" }));
        //fuerza el re-renderizado en caso que exista el mismo mensaje
        setMessage(false);
    };

    return token ? (
        <Alert>Ya ha iniciado sesión</Alert>
    ) : (
        <Container className="container">
            {message && (
                <Notification text={message.text} type={message.type} />
            )}
            <LoginForm handlerSubmit={handleSubmit} />
        </Container>
    );
}
