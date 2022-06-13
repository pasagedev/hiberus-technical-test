import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

export default function Notification({ text, type }) {
    const [isShowed, setIsShowed] = useState(false);
    useEffect(() => {
        if (text) {
            setIsShowed(true);
            setTimeout(() => {
                setIsShowed(false);
            }, 2000);
        }
    }, [text]);
    return isShowed ? <Alert variant={type}>{text}</Alert> : <></>;
}
