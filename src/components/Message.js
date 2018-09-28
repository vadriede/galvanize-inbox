import React from 'react';

const Message = ({ message }) => {
    return (

        <div className="row message read">
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        <input id='isSelected' type="checkbox" />
                    </div>
                    <div className="col-xs-2">
                        <i id='isStarred' className="star fa fa-star"></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-11">
                <span id='label' className="label label-warning">dev</span>
                <span id='label' className="label label-warning">gschool</span>
                <a id="subject" href="#">
                    {message.subject}
                </a>
            </div>
        </div>
    )
}
export default Message;