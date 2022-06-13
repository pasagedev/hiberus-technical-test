function getUsers(token) {
    const { tokenType, accessToken } = token;
    return fetch("http://51.38.51.187:5050/api/v1/users", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: `${tokenType} ${accessToken}`,
        },
    })
        .then(res => {
            if (!res.ok) {
                const err = new Error(
                    res.status === 401
                        ? "Sin autorización"
                        : "Error desconocido"
                );
                err.errCode = 401;
                throw err;
            }
            return res.json();
        })
        .then(data => data.items);
}

function deleteUser(id, token) {
    const { tokenType, accessToken } = token;
    return fetch(`http://51.38.51.187:5050/api/v1/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            Authorization: `${tokenType} ${accessToken}`,
        },
    }).then(res => {
        if (res.ok) return { message: "Usuario eliminado" };
        throw new Error(
            res.status === 404 ? "Usuario no encontrado" : "Error desconocido"
        );
    });
}

export { getUsers, deleteUser };
