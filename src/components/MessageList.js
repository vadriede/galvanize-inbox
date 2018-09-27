import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
    return (
        <div>
            {messages.map((m) => <li key={m.id}><Message message={m} /></li>)}
        </div>
    )
}

export default MessageList