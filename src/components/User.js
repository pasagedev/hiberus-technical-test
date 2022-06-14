import { useState } from "react";
import { ListGroup, Button, Card } from "react-bootstrap";

export default function User({ email, name, surname, id, onDeleteHandler }) {
    const [showDetail, setShowDetail] = useState(false);

    const handleShowDetail = () => setShowDetail(!showDetail);

    return (
        <ListGroup.Item
            action
            as={ListGroup.Item}
            variant="ligth"
            onClick={handleShowDetail}
        >
            <Card>
                <Card.Header>
                    {name && surname ? `${name} ${surname}` : "Usuario Anónimo"}
                </Card.Header>
                {showDetail && (
                    <Card.Body>
                        <Card.Text>Correo: {email}</Card.Text>
                        <Card.Text>ID: {id}</Card.Text>
                        <Button
                            variant="danger"
                            onClick={() => onDeleteHandler(id)}
                        >
                            Eliminar
                        </Button>
                    </Card.Body>
                )}
            </Card>
        </ListGroup.Item>
    );
}
