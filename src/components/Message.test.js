import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message', () => {
    it('renders a message', () => {
        const message = shallow(<Message />)
    })
})