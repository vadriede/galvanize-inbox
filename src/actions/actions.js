export const actionTypes = {
    UPDATE_MESSAGE: 'UPDATE_MESSAGE',
    SELECT_ALL: 'SELECT_ALL',
    MARK_READ: 'MARK_READ',
    COUNT_UNREAD: 'COUNT_UNREAD',
    DELETE_MESSAGES: 'DELETE_MESSAGES',
    UPDATE_SELECTION_STATE: 'UPDATE_SELECTION_STATE',
    ADD_LABEL: 'ADD_LABEL',
    REMOVE_LABEL: 'REMOVE_LABEL',
}

export const updateMessage = (msg) => {
    return { type: actionTypes.UPDATE_MESSAGE, msg }
}

export const selectAll = (buttonState) => ({ type: actionTypes.SELECT_ALL, payload: buttonState })

export const markRead = (isRead) => ({ type: actionTypes.MARK_READ, payload: isRead })

export const countUnread = () => ({ type: actionTypes.COUNT_UNREAD })

export const deleteMessages = () => ({ type: actionTypes.DELETE_MESSAGES })

export const updateSelectionState = () => ({ type: actionTypes.UPDATE_SELECTION_STATE })

export const addLabel = (label) => ({ type: actionTypes.ADD_LABEL, label })

export const removeLabel = (label) => ({ type: actionTypes.REMOVE_LABEL, label })