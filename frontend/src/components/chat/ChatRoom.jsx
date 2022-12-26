import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import {serverUrl } from '../../utils/AppConfig';

const socket = io.connect(serverUrl);

export default function ChatRoom () {
     const [message, setMessage] = useState('');
     const [receivedMessage, setReceivedMessage] = useState('msg yet');
     const [roomNumber, setRoomNumber] = useState();

    const sendMessage = () => {
        socket.emit("send_message", {message , room: roomNumber});
    }

    const joinRoom = () => {
        if(roomNumber !== '') {
            socket.emit("join_room", roomNumber);
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {   setReceivedMessage(data.message);

        });
    }, [socket]);
    return (
        <>
            <input placeholder="Room Number..." value={roomNumber} onChange={(e)=> setRoomNumber(e.target.value)}/>
            <button onClick={joinRoom}>Join Room</button>
            <br /><br />
            <input placeholder="message..." value={message} onChange={(e)=> setMessage(e.target.value)}/>
            <button onClick={sendMessage}>Send Message</button>

            <br /><br />
            Received Message : {receivedMessage}
        </>
    );
}
