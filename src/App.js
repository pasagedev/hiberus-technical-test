import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import { UserContextProvider } from "./context/UserContext";
import Users from "./pages/Users";
import Logout from "./pages/Logout";
import SingUp from "./pages/SingUp";

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <Router>
                    <Routes>
                        <Route path="/register" element={<SingUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/" element={<Navigate to="/users" />} />
                    </Routes>
                </Router>
            </UserContextProvider>
        </div>
    );
}

export default App;
