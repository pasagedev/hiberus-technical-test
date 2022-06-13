import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="mx-auto">
                    <Nav.Link className="mx-3" as={Link} to="/register">
                        Sing Up
                    </Nav.Link>
                    <Nav.Link className="mx-3" as={Link} to="/users">
                        Users
                    </Nav.Link>

                    <Nav.Link className="mx-3" as={Link} to="/login">
                        Login
                    </Nav.Link>
                    <Nav.Link className="mx-3" as={Link} to="/logout">
                        Logout
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
