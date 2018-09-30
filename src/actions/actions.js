export const actionTypes = {
    UPDATE_MESSAGE: 'UPDATE_MESSAGE',
    SELECT_ALL: 'SELECT_ALL',
    MARK_READ: 'MARK_READ',
}

export const updateMessage = (msg) => {
    return { type: actionTypes.UPDATE_MESSAGE, msg }
}

export const selectAll = (buttonState) => ({ type: actionTypes.SELECT_ALL, payload: buttonState })

export const markRead = (isRead) => ({ type: actionTypes.MARK_READ, payload: isRead })