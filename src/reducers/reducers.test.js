import { initialState, reducer } from './reducers'
import { UPDATE_MESSAGE } from '../actions/actions'
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
})