import React from 'react';
import { shallow } from 'enzyme';
import MessageList from './MessageList';

describe('test message list component', () => {
    it('it renders something', () => {
        const messageList = shallow(<MessageList />)
    })
})