import io from 'Socket.IO-client';
import {createContext, useContext, useEffect, useState} from 'react';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('/api/socketio').finally(() => {
            const socket = io();

            socket.on('connect', () => {
                console.log('connect');
                socket.emit('hello');
            });

            socket.on('hello', data => {
                console.log('hello', data);
            });

            socket.on('a user connected', () => {
                console.log('a user connected');
            });

            socket.on('disconnect', () => {
                console.log('disconnect');
            });

            socket.on('chat message', msg => {
                console.log('message: ' + msg);
                setMessages(messages => [...messages, msg]);
            });

            setSocket(socket);
        });
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}

export const useSocket = () => {
    return useContext(SocketContext);
}