import { createContext, useState } from "react";

const Context = createContext({});

export function UserContextProvider({ children }) {
    const [token, setToken] = useState(() =>
        JSON.parse(localStorage.getItem("token"))
    );

    return (
        <Context.Provider value={{ token, setToken }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
