export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const SELECT_ALL = 'SELECT_ALL'
export const updateMessage = (msg) => {
    return { type: UPDATE_MESSAGE, msg }
}

export const selectAll = (buttonState) => ({ type: SELECT_ALL, payload: buttonState })

