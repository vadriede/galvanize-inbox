import { initialState, reducer } from './reducers'
import { UPDATE_MESSAGE } from '../actions/actions'
describe('reducer', () => {
    it('should have an initial state', () => {
        const actual = reducer(undefined, {});

        expect(actual).toEqual(initialState);
    })

    it('should have an update message statement', () => {
        const msg = { id: 1, subject: 'NetSuite is down', isRead: true, isSelected: false, labels: [], isStarred: false }

        msg.isStarred = !msg.isStarred

        const action = {
            type: UPDATE_MESSAGE,
            msg
        }


        const actual = reducer(undefined, action)
        expect(actual.messages[0].isStarred).toEqual(true)

    })
})