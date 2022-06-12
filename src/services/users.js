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
            if (!res.ok) return Promise.reject(res.json());
            return res.json();
        })
        .then(data => data.items);
}

export { getUsers };
