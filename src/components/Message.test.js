import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message', () => {
    it('renders a message with the subject displayed', () => {
        // setup
        const msg = { id: 1, subject: 'abdfe', isRead: false, isSelected: false, labels: [], isStarred: false }
        const message = shallow(<Message message={msg} />)

        // assert
        expect(message.find('#subject').text()).toEqual(msg.subject);
    })
})