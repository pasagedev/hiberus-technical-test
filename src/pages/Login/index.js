import { useContext, useState } from "react";
import { login } from "../../services/auth";
import Context from "../../context/UserContext";
import { Navigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { token, setToken } = useContext(Context);

    const handleEmailChange = ({ target }) => setEmail(target.value);
    const handlePasswordChange = ({ target }) => setPassword(target.value);

    const handleSubmit = e => {
        e.preventDefault();
        login(email, password)
            .then(res => {
                setToken(res);
                localStorage.setItem("token", JSON.stringify(res));
            })
            .catch(err => console.log(err));
    };

    return token ? (
        <Navigate to="/users" />
    ) : (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">email:</label>
                <input
                    id="email"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div>
                <label htmlFor="password">contraseña:</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Ingrese su contraseña..."
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button>Iniciar sesión</button>
        </form>
    );
}
