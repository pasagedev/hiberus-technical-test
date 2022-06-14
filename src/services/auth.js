function login(email, password) {
    return fetch("http://51.38.51.187:5050/api/v1/auth/log-in", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    }).then(res => {
        if (!res.ok) {
            let message = "Error desconocido";
            switch (res.status) {
                case 404: {
                    message = "Usuario o contraseña incorrectos";
                    break;
                }
                case 601: {
                    message = "Usuario no válido";
                    break;
                }
                default:
                    break;
            }

            throw new Error(message);
        }
        return res.json();
    });
}

function register(email, password, name, surname) {
    return fetch("http://51.38.51.187:5050/api/v1/auth/sign-up", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
            name,
            surname,
        }),
    }).then(res => {
        if (res.ok) return { message: "Registro creado correctamente" };
        throw new Error(
            res.status === 409 ? "El email ya existe" : "Error desconocido"
        );
    });
}

export { login, register };
