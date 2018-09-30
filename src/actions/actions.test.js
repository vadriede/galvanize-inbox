import { updateMessage, actionTypes } from './actions'
describe('action', () => {
    describe('UPDATE_MESSAGE', () => {
        it('create the right type of action', () => {
            const fakeMessage = { subject: 'test', id: 2 };
            const expected = {
                type: actionTypes.UPDATE_MESSAGE,
                msg: fakeMessage,
            }
            expect(updateMessage(fakeMessage)).toEqual(expected);
        })
    })
})