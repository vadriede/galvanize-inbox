import React from 'react';

const Message = ({ message }) => {
    return (

        <div class="row message read">
            <div class="col-xs-1">
                <div class="row">
                    <div class="col-xs-2">
                        <input id='isSelected' type="checkbox" />
                    </div>
                    <div class="col-xs-2">
                        <i id='isStarred' class="star fa fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="col-xs-11">
                <span id='label' class="label label-warning">dev</span>
                <span id='label' class="label label-warning">gschool</span>
                <a id="subject" href="#">
                    {message.subject}
                </a>
            </div>
        </div>
        // <div className="message">
        //     {message.subject}
        // </div>
    )
}
export default Message;