import { useContext, useState } from "react";

import { register } from "../../services/auth";
import Context from "../../context/UserContext";

export default function SingUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const handleEmailChange = ({ target }) => setEmail(target.value);
    const handlePasswordChange = ({ target }) => setPassword(target.value);
    const handleNameChange = ({ target }) => setName(target.value);
    const handleSurnameChange = ({ target }) => setSurname(target.value);

    const handleSubmit = e => {
        e.preventDefault();
        register(email, password, name, surname)
            .then(res => {
                setError(false);
                setMessage(res.message);
            })
            .catch(e => {
                setError(true);
                setMessage(e.message);
            });
    };
    console.log(message);
    return (
        <>
            {message && <div>{message}</div>}
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
                <div>
                    <label htmlFor="name">nombre:</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="escribe tu nombre"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="surname">apellido:</label>
                    <input
                        id="surname"
                        type="text"
                        placeholder="escribe tu nombre"
                        value={surname}
                        onChange={handleSurnameChange}
                    />
                </div>
                <button>Registrarse</button>
            </form>
        </>
    );
}
