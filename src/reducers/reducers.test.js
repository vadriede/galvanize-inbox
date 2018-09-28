import { initialState, reducer } from './reducers'
import { UPDATE_MESSAGE, SELECT_ALL } from '../actions/actions'
import deepFreeze from 'deep-freeze'
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

        // msg.isStarred = !msg.isStarred
        // console.log('originalState:', originalState)

        const action = {
            type: UPDATE_MESSAGE,
            msg
        }


        const actual = reducer(originalState, action)
        expect(actual.messages[0].isStarred).toEqual(true)

    })

    it('should select all messages if not all messages are already selected', () => {

        const originalState = { messages: [{ selected: false }, { selected: false }, { selected: true }] }
        deepFreeze(originalState)

        const action = {
            type: SELECT_ALL,
            // payload: true
        }

        const actual = reducer(originalState, action).messages
        expect(actual).toEqual([{ selected: true }, { selected: true }, { selected: true }])
    })

    it('should deselect all messages if all messages are already selected', () => {

        const originalState = { messages: [{ selected: true }, { selected: true }, { selected: true }] }
        deepFreeze(originalState)

        const action = {
            type: SELECT_ALL,
            // payload: false
        }

        const actual = reducer(originalState, action).messages
        expect(actual).toEqual([{ selected: false }, { selected: false }, { selected: false }])
    })

    // it('should evaluate the current messages for selected status', () =>
    //     )
})