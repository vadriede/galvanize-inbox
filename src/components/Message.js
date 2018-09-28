import React from 'react';

const Message = ({ message, starMessage }) => {

    const clickStar = () => {
        // console.log('clickStar')
        message.isStarred = !message.isStarred
        starMessage(message);
    }

    return (

        <div className={'row message' +
            (message.isRead ? ' read' : ' unread') +
            (message.isSelected ? ' selected' : '')}>
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        <input id='isSelected' type="checkbox" checked={message.isSelected} />
                    </div>
                    <div className="col-xs-2">
                        <i id='isStarred' className={'star fa' +
                            (message.isStarred ? ' fa-star' : ' fa-star-o')} onClick={clickStar}></i>
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