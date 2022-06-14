import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

import Login from "./pages/Login";
import { UserContextProvider } from "./context/UserContext";
import Users from "./pages/Users";
import Logout from "./pages/Logout";
import SingUp from "./pages/SingUp";
import Header from "./components/Header";

function App() {
    return (
        <Container className="container-sm">
            <Col>
                <UserContextProvider>
                    <Router>
                        <Row className="mt-2">
                            <Header />
                        </Row>
                        <Row className="mt-3">
                            <Routes>
                                <Route path="/register" element={<SingUp />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/logout" element={<Logout />} />
                                <Route path="/users" element={<Users />} />
                                <Route
                                    path="/"
                                    element={<Navigate to="/users" />}
                                />
                            </Routes>
                        </Row>
                    </Router>
                </UserContextProvider>
            </Col>
        </Container>
    );
}

export default App;
