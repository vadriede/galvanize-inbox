export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const MARK_READ = 'MARK_READ'
export const SELECT_ALL = 'SELECT_ALL'
export const updateMessage = (msg) => {
    return { type: UPDATE_MESSAGE, msg }
}

export const selectAll = (buttonState) => ({ type: SELECT_ALL, payload: buttonState })

export const markRead = () => ({ type: MARK_READ })