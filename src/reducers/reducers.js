import { UPDATE_MESSAGE } from "../actions/actions";

export const initialState = {
    messages: [
        { id: 1, subject: 'NetSuite is down', isRead: true, isSelected: false, labels: [], isStarred: false },
        { id: 2, subject: 'What We Owe to Each Other', isRead: false, isSelected: false, labels: [], isStarred: false },
        { id: 3, subject: 'Crazy idea - flux capacitor', isRead: false, isSelected: false, labels: [], isStarred: false },
        { id: 4, subject: 'Reqeust for assistance frmo Nigerian Prince', isRead: false, isSelected: false, labels: [], isStarred: false },
        { id: 5, subject: 'Yo', isRead: false, isSelected: false, labels: [], isStarred: true },
        { id: 6, subject: 'GDPR request counter update - averaging 2 per year!', isRead: false, isSelected: false, labels: [], isStarred: false },
        { id: 7, subject: 'the grasshopper lies heavy', isRead: false, isSelected: false, labels: [], isStarred: false },
    ],
}

export const reducer = (state = initialState, action) => {
    console.log('reducer')
    switch (action.type) {
        case UPDATE_MESSAGE:
            console.log('UPDATE_MESSAGE');
            console.log(action.msg)
            return ({
                ...state,
                messages: state.messages.map((m) => (m.id === action.msg.id) ? action.msg : m),
            })

        default:
            return state;
    }
}

//export default reducer;