export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const updateMessage = (msg) => {
    console.log('updateMessage')
    return { type: UPDATE_MESSAGE, msg }
}