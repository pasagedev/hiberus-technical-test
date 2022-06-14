import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function LoginForm({ handlerSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = ({ target }) => setEmail(target.value);
    const handlePasswordChange = ({ target }) => setPassword(target.value);
    return (
        <Form onSubmit={e => handlerSubmit(e, email, password)}>
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
    );
}
