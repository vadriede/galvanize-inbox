import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';


const MessageList = ({ messages }) => {
    return (
        <div>
            {messages.map((m) => <li key={m.id}><Message message={m} /></li>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    }
}

export default connect(mapStateToProps)(MessageList)