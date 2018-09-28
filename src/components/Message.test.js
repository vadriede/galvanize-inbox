import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message', () => {
    it('renders a message with the subject displayed', () => {
        // setup
        const msg = { id: 1, subject: 'abdfe', isRead: false, isSelected: false, labels: ['dev', 'gschool'], isStarred: false }
        const message = shallow(<Message message={msg} />)

        // assert
        expect(message.find('#subject').text()).toEqual(msg.subject);
        expect(message.find('#subject')).toHaveLength(1);
        expect(message.find('#isSelected')).toHaveLength(1);
        expect(message.find('#isStarred')).toHaveLength(1);
        expect(message.find('#label')).toHaveLength(msg.labels.length);
    })
})