import {useSocket} from "@/contexts/SocketContext";
import {useState} from "react";

export default function MessagesSendForm(){
    const socket = useSocket();
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('chat message', message);
        setMessage('');
    }

    return (
        <form className="message-send-form" onSubmit={handleSubmit}>
            <input
                className={"message-input"}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className={"message-send-button"}>Send</button>
        </form>
    );
}