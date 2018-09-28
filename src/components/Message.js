import React from 'react';

const Message = ({ message, updateMessage }) => {

    const clickStar = () => {
        message.starred = !message.starred
        updateMessage(message);
    }

    const selectMessage = () => {
        message.selected = !message.selected
        updateMessage(message);
    }

    return (

        <div className={'row message' +
            (message.read ? ' read' : ' unread') +
            (message.selected ? ' selected' : '')}>
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        <input id='isSelected' type="checkbox" checked={message.selected} onClick={selectMessage} />
                    </div>
                    <div className="col-xs-2">
                        <i id='isStarred' className={'star fa' +
                            (message.starred ? ' fa-star' : ' fa-star-o')} onClick={clickStar}></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-11">
                {
                    message.labels.map((l, idx) => <span key={idx} id='label' className="label label-warning">{l}</span>)
                }

                <a id="subject" href="#">
                    {message.subject}
                </a>
            </div>
        </div>
    )
}
export default Message;