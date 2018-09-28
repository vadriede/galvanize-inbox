import React from 'react';
import Message from '../containers/Message';
import '../index.css'


const MessageList = ({ messages }) => {

    return (
        <ul>
            {messages.map((m) => <Message key={m.id} className="message" message={m} />)}
        </ul>
    )
}


export default MessageList