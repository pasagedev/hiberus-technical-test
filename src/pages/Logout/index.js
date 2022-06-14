import { Button, Row, Col } from "react-bootstrap";
import { useContext, useState } from "react";
import Context from "../../context/UserContext";

import Notification from "../../components/Notification";

export default function Logout() {
    const { token, setToken } = useContext(Context);
    const [message, setMessage] = useState(false);

    const handleClick = () => {
        setMessage({ text: "Sesión terminada", type: "success" });
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <Col className="mx-auto">
            <Row>
                {message && (
                    <Notification text={message.text} type={message.type} />
                )}
            </Row>
            <Row className="mb-3">
                <h2 className="text-center">Logout</h2>
            </Row>
            <Row sm={2} className="justify-content-center">
                <Button
                    variant="danger"
                    onClick={handleClick}
                    disabled={token ? false : true}
                >
                    Cerrar sesión
                </Button>
            </Row>
        </Col>
    );
}
