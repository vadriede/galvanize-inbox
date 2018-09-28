import React from 'react';
import Message from './Message';
import '../index.css'


const MessageList = ({ messages }) => {
    return (
        <div>
            {messages.map((m) => <Message className="message" message={m} />)}
        </div>
    )
}


export default MessageList