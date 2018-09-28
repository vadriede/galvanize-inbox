import React from 'react';
import { shallow } from 'enzyme';
import MessageList from './MessageList';
import Message from '../containers/Message';

describe('MessageList', () => {
    it('renders a list of messages', () => {
        // setup
        const testMessages = [
            { id: 1, subject: 'abdfe', isRead: false, isSelected: false, labels: [], isStarred: false },
            { id: 1, subject: 'alijalhi', isRead: false, isSelected: false, labels: [], isStarred: false },
            { id: 1, subject: 'aidjfaoiehfwij', isRead: false, isSelected: false, labels: [], isStarred: false },
        ]
        const messageList = shallow(<MessageList messages={testMessages} />);

        // assert
        expect(messageList.find(Message)).toHaveLength(testMessages.length);
    })
})