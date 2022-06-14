import { useContext, useState } from "react";
import Context from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Form, Alert, Container, Button } from "react-bootstrap";

import { login } from "../../services/auth";
import Notification from "../../components/Notification";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { token, setToken } = useContext(Context);
    const [message, setMessage] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = ({ target }) => setEmail(target.value);
    const handlePasswordChange = ({ target }) => setPassword(target.value);

    const handleSubmit = e => {
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
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 justify-content-center">
                    <Form.Label htmlFor="email">Email:</Form.Label>
                    <Form.Control
                        sm={6}
                        id="email"
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3 justify-content-center">
                    <Form.Label column htmlFor="password">
                        Contraseña:
                    </Form.Label>
                    <Form.Control
                        id="password"
                        type="password"
                        placeholder="Ingrese su contraseña..."
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary" size="sm">
                    Iniciar sesión
                </Button>
            </Form>
        </Container>
    );
}
