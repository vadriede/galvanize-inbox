import React from 'react';
import '../index.css'

const Toolbar = ({
    selector,
    selection,
    markRead,
    unreadCount,
    countUnread,
    deleteMessages,
    addLabel,
}) => {

    const clickRead = (isRead) => {
        return () => {
            markRead(isRead);
            countUnread();
        }
    }

    const buttonsEnabled = () => (selection === 'none' ? true : false)

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
                    <span id="unreadCount" className="badge badge">{unreadCount}</span>
                    {'unread message' + (unreadCount != 1 ? 's' : '')}
                </p>

                <button id="selectAll" className="btn btn-default" onClick={selector}>
                    <i id="selectAllIcon" className={buttonClass()}></i>
                </button>

                <button id="markRead" className="btn btn-default" disabled={buttonsEnabled()} onClick={clickRead(true)}>
                    Mark As Read
                </button>

                <button id="markUnread" className="btn btn-default" disabled={buttonsEnabled()} onClick={clickRead(false)}>
                    Mark As Unread
                </button>

                <select id="addLabel" onChange={addLabel} className="form-control label-select" disabled={buttonsEnabled()}>
                    <option>Apply label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <select className="form-control label-select" disabled={buttonsEnabled()}>
                    <option>Remove label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <button className="btn btn-default" id='deleteBtn' disabled={buttonsEnabled()} onClick={deleteMessages}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    )


}
export default Toolbar