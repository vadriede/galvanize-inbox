const initialState = {
    messages: [
        { id: 1, subject: 'abdfe', isRead: false, isSelected: false, labels: [], isStarred: false },
        { id: 1, subject: 'alijalhi', isRead: false, isSelected: false, labels: [], isStarred: false },
        { id: 1, subject: 'aidjfaoiehfwij', isRead: false, isSelected: false, labels: [], isStarred: false },
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;