import React, { Component } from 'react';

const Toolbar = () => {

    return (
        <div>
            <button id="selectAllBtn"></button>
            <button id="markAsReadBtn">Mark as Read</button>
            <button id="markAsUnreadBtn">Mark as Unread</button>
            <button id="applyLabelBtn">Apply Label</button>
            <button id="removeLabelBtn">Remove Label</button>
            <button id="deleteBtn"></button>

        </div>
    )


}
export default Toolbar