import { useState } from "react";

import Notification from "../../components/Notification";
import RegisterForm from "../../components/RegisterForm";
import { register } from "../../services/auth";

export default function SingUp() {
    const [message, setMessage] = useState(false);

    function handleSubmit(e, email, password, name, surname) {
        e.preventDefault();
        register(email, password, name, surname)
            .then(res => {
                setMessage({ text: res.message, type: "success" });
            })
            .catch(e => {
                setMessage({ text: e.message, type: "danger" });
            });
        // necesario para re-renderizar si hay el mismo mensaje
        setMessage(false);
    }

    return (
        <>
            {message && (
                <Notification text={message.text} type={message.type} />
            )}
            <RegisterForm handlerSubmit={handleSubmit} />
        </>
    );
}
