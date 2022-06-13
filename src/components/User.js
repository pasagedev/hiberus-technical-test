import { useState } from "react";

export default function User({ email, name, surname, id, onDeleteHandler }) {
    const [showDetail, setShowDetail] = useState(false);

    const handleShowDetail = () => setShowDetail(!showDetail);

    return (
        <li>
            <p>
                {name} {surname}
            </p>
            {showDetail && (
                <div>
                    <p>Correo: {email}</p>
                    <p>ID: {id}</p>
                    <button onClick={() => onDeleteHandler(id)}>
                        Eliminar
                    </button>
                </div>
            )}
            <button onClick={handleShowDetail}>
                {showDetail ? "Ocultar detalle" : "Mostrar detalle"}
            </button>
        </li>
    );
}
