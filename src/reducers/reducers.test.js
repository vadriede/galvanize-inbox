import { initialState, reducer } from './reducers'
import { actionTypes, countUnread } from '../actions/actions'
import deepFreeze from 'deep-freeze'
import Toolbar from '../containers/Toolbar';
describe('reducer', () => {
    it('should have an initial state', () => {
        const actual = reducer(undefined, {});

        expect(actual).toEqual(initialState);
    })

    it('should have an update message statement', () => {
        const msg = { id: 1, subject: 'NetSuite is down', isRead: true, isSelected: false, labels: [], isStarred: true }
        const originalState = {
            messages: [{ id: 1, subject: 'NetSuite is down', isRead: true, isSelected: false, labels: [], isStarred: false }]
        }
        deepFreeze(originalState)

        const action = {
            type: actionTypes.UPDATE_MESSAGE,
            msg
        }


        const actual = reducer(originalState, action)
        expect(actual.messages[0].isStarred).toEqual(true)

    })

    it('should select all messages if not all messages are already selected', () => {

        const originalState = { messages: [{ selected: false }, { selected: false }, { selected: true }] }
        deepFreeze(originalState)

        const action = {
            type: actionTypes.SELECT_ALL,
        }

        const actual = reducer(originalState, action).messages
        expect(actual).toEqual([{ selected: true }, { selected: true }, { selected: true }])
    })

    it('should deselect all messages if all messages are already selected', () => {

        const originalState = { messages: [{ selected: true }, { selected: true }, { selected: true }] }
        deepFreeze(originalState)

        const action = {
            type: actionTypes.SELECT_ALL,
        }

        const actual = reducer(originalState, action).messages
        expect(actual).toEqual([{ selected: false }, { selected: false }, { selected: false }])
    })

    it('updates read state on messages selected', () => {
        const originalState = {
            messages: [
                { selected: true, read: false },
                { selected: true, read: false },
                { selected: false, read: false }
            ]
        }
        const originalStateToUnread = {
            messages: [
                { selected: true, read: true },
                { selected: true, read: true },
                { selected: true, read: false },
                { selected: false, read: true }
            ]
        }
        deepFreeze(originalState)
        deepFreeze(originalStateToUnread)

        const action = { type: actionTypes.MARK_READ, payload: true }
        const actionToUnread = { type: actionTypes.MARK_READ, payload: false }

        const actual = reducer(originalState, action).messages;
        const actualUnread = reducer(originalStateToUnread, actionToUnread).messages;
        expect(actual).toEqual([
            { selected: true, read: true },
            { selected: true, read: true },
            { selected: false, read: false }
        ])
        expect(actualUnread).toEqual([
            { selected: true, read: false },
            { selected: true, read: false },
            { selected: true, read: false },
            { selected: false, read: true }
        ])
    })

    it('updates unread count when COUNT_UNREAD action triggered', () => {
        // setup
        const expected = 1
        const originalState = {
            messages: [
                { read: true, },
                { read: false, },
                { read: true }
            ],
            unreadCount: 3,
        }
        deepFreeze(originalState)
        const action = countUnread();

        // exercise
        const actual = reducer(originalState, action).unreadCount

        // assert
        expect(actual).toEqual(expected);
    })

    it('deletes any selected messages when the DELETE_MESSAGES action is triggered', () => {
        // setup
        const originalState = {
            messages: [
                {
                    id: 1,
                    selected: true,
                },
                {
                    id: 2,
                    selected: true,
                },
                {
                    id: 3,
                    selected: false,
                },
                {
                    id: 4,
                    selected: true,
                },
            ]
        }
        deepFreeze(originalState);
        const action = { type: actionTypes.DELETE_MESSAGES }

        // exercise
        const actual = reducer(originalState, action)

        // assert
        expect(actual.messages).toEqual([{ id: 3, selected: false }])

    })

    it('adds a submitted label where needed on selected messages when ADD_LABEL fired', () => {
        // setup
        const action = { type: actionTypes.ADD_LABEL, label: 'dev' }
        const originalState = {
            messages: [
                { selected: true, labels: [] },
                { selected: true, labels: ['cdc'] },
                { selected: false, labels: [] },
                { selected: true, labels: ['dev'] },
            ]
        }

        // exercise
        const actual = reducer(originalState, action)

        // assert
        expect(actual.messages).toEqual([
            { selected: true, labels: ['dev'] },
            { selected: true, labels: ['cdc', 'dev'] },
            { selected: false, labels: [] },
            { selected: true, labels: ['dev'] },
        ])
    })
})