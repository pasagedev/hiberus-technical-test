import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import Notification from "../../components/Notification";
import { register } from "../../services/auth";

export default function SingUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [message, setMessage] = useState(false);

    const handleEmailChange = ({ target }) => setEmail(target.value);
    const handlePasswordChange = ({ target }) => setPassword(target.value);
    const handleNameChange = ({ target }) => setName(target.value);
    const handleSurnameChange = ({ target }) => setSurname(target.value);

    function handleSubmit(e) {
        e.preventDefault();
        register(email, password, name, surname)
            .then(res => {
                setMessage({ text: res.message, type: "success" });
            })
            .catch(e => {
                setMessage({ text: e.message, type: "danger" });
            });
        // necesario para re-renderizar si hay el mismo mensaje
        setMessage(false);
    }

    return (
        <>
            {message && (
                <Notification text={message.text} type={message.type} />
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3 justify-content-center">
                    <Form.Label column sm={2} htmlFor="email">
                        Email:
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            id="email"
                            type="email"
                            placeholder="ejemplo@correo.com"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 justify-content-center">
                    <Form.Label column sm={2} htmlFor="password">
                        Contraseña:
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            id="password"
                            type="password"
                            placeholder="Ingrese su contraseña..."
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 justify-content-center">
                    <Form.Label column sm={2} htmlFor="name">
                        Nombre:
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            id="name"
                            type="text"
                            placeholder="escribe tu nombre"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 justify-content-center">
                    <Form.Label column sm={2} htmlFor="surname">
                        Apellido:
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            id="surname"
                            type="text"
                            placeholder="escribe tu nombre"
                            value={surname}
                            onChange={handleSurnameChange}
                        />
                    </Col>
                </Form.Group>
                <Row sm={2} className="justify-content-center">
                    <Button type="submit" variant="primary" size="sm">
                        Registrarse
                    </Button>
                </Row>
            </Form>
        </>
    );
}
