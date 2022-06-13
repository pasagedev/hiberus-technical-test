import { useContext } from "react";
import Context from "../../context/UserContext";

export default function Logout() {
    const { setToken } = useContext(Context);

    const handleClick = () => {
        setToken(null);
        localStorage.removeItem("token");
    };
    return <button onClick={handleClick}>Cerrar sesión</button>;
}
