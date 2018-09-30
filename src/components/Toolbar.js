import React from 'react';
import '../index.css'

const Toolbar = ({ selector, selection, markRead }) => {

    const clickRead = (isRead) => {
        return () => {
            markRead(isRead)
        }
    }

    const buttonClass = () => {
        if (selection === 'none')
            return 'fa fa-square-o'
        if (selection === 'some')
            return 'fa fa-minus-square-o'
        return 'fa fa-check-square-o'
    }

    return (
        <div className="row toolbar">
            <div className="col-md-12">
                <p className="pull-right">
                    <span id="unreadCount" className="badge badge">2</span>
                    unread messages
                </p>

                <button id="selectAll" className="btn btn-default" onClick={selector}>
                    <i id="selectAllIcon" className={buttonClass()}></i>
                </button>

                <button id="markRead" className="btn btn-default" disabled={(selection === 'none' ? true : false)} onClick={clickRead(true)}>
                    Mark As Read
                </button>

                <button id="markUnread" className="btn btn-default" disabled={(selection === 'none' ? true : false)} onClick={clickRead(false)}>
                    Mark As Unread
                </button>

                <select className="form-control label-select" disabled="disabled">
                    <option>Apply label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <select className="form-control label-select" disabled="disabled">
                    <option>Remove label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <button className="btn btn-default" disabled="disabled">
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    )


}
export default Toolbar