import React from 'react';

const Message = ({ message }) => {
    return (
        <div className="message">
            {message.subject}
        </div>
    )
}
export default Message;