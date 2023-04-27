import {useSocket} from "@/contexts/SocketContext";
import Message from "@/components/InGameChat/Message";
import {useEffect, useState} from "react";

export default function MessagesDisplay(){
    const socket = useSocket();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (socket) {
            socket.on('chat message', msg => {
                setMessages(messages => [...messages, msg]);
            });
        }
        console.log('messages', messages);
        return () => {
            if (socket) {
                socket.off('chat message');
            }
        }
    }, [messages, socket]);

    return (
        <div className="messages">
            {messages.map((msg, i) => (
                <Message key={i} message={msg} />
            ))}
        </div>
    );
}