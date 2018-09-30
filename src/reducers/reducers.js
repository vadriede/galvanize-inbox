import { actionTypes } from "../actions/actions";

export const initialState = {
    messages: [
        {
            "id": 1,
            "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
            "read": false,
            "starred": true,
            "labels": ["dev", "personal"]
        },
        {
            "id": 2,
            "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
            "read": false,
            "starred": false,
            "selected": true,
            "labels": []
        },
        {
            "id": 3,
            "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
            "read": false,
            "starred": true,
            "labels": ["dev"]
        },
        {
            "id": 4,
            "subject": "We need to program the primary TCP hard drive!",
            "read": true,
            "starred": false,
            "selected": true,
            "labels": []
        },
        {
            "id": 5,
            "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
            "read": false,
            "starred": false,
            "labels": ["personal"]
        },
        {
            "id": 6,
            "subject": "We need to back up the wireless GB driver!",
            "read": true,
            "starred": true,
            "labels": []
        },
        {
            "id": 7,
            "subject": "We need to index the mobile PCI bus!",
            "read": true,
            "starred": false,
            "labels": ["dev", "personal"]
        },
        {
            "id": 8,
            "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
            "read": true,
            "starred": true,
            "labels": []
        }
    ],
    currentSelectionState: "some",
    unreadCount: 4
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.UPDATE_MESSAGE:
            return updateAllTakeAction(state, action)

        case actionTypes.SELECT_ALL:
            return selectAllTakeAction(state)

        case actionTypes.MARK_READ:
            return markReadTakeAction(state, action)

        case actionTypes.COUNT_UNREAD:
            return countUnreadTakeAction(state)

        case actionTypes.DELETE_MESSAGES:
            return deleteMessagesTakeAction(state)

        case actionTypes.UPDATE_SELECTION_STATE:
            return updateSelectionState(state)

        case actionTypes.ADD_LABEL:
            return addLabelTakeAction(state, action)

        default:
            return state;
    }
}

const updateAllTakeAction = (state, action) => {
    const currentSelectionState = getCurrentlySelectedState(state)
    return ({
        ...state,
        messages: state.messages.map((m) => (m.id === action.msg.id) ? action.msg : m),
        currentSelectionState,
    })
}

const getCurrentlySelectedState = (state) => {
    const currentlySelected = state.messages.filter((m) => m.selected)
    if (currentlySelected.length === 0) {
        return 'none'
    } else if (currentlySelected.length < state.messages.length) {
        return 'some'
    } else {
        return 'all'
    }
}

const selectAllTakeAction = (state) => {
    let currentSelectionState = getCurrentlySelectedState(state)

    let newMessages;
    if (currentSelectionState === 'all') {
        newMessages = state.messages.map((m) => ({ ...m, selected: false }))
        currentSelectionState = 'none'
    } else {
        newMessages = state.messages.map((m) => ({ ...m, selected: true }))
        currentSelectionState = 'all'
    }
    return ({
        ...state,
        messages: newMessages,
        currentSelectionState,
    })
}

const markReadTakeAction = (state, action) => {
    return ({
        ...state,
        messages: state.messages.map((m) => (m.selected ? { ...m, read: action.payload } : m))
    })
}

const countUnreadTakeAction = (state) => {
    return ({
        ...state,
        unreadCount: state.messages.reduce((acc, m) => (m.read ? acc : acc + 1), 0)
    })
}

const deleteMessagesTakeAction = (state) => {
    return ({
        ...state,
        messages: state.messages.filter((m) => !m.selected)
    })
}

const updateSelectionState = (state) => {
    return ({
        ...state,
        currentSelectionState: getCurrentlySelectedState(state)
    })
}

const addLabelTakeAction = (state, action) => {
    return state
}