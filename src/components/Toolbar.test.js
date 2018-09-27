import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';

describe('test toolbar component', () => {
    it('it renders with the required elements', () => {
        // setup
        const toolbar = shallow(<Toolbar />)

        // assert
        expect(toolbar.find('#selectAllBtn')).toHaveLength(1);
        expect(toolbar.find('#markAsReadBtn')).toHaveLength(1);
        expect(toolbar.find('#markAsReadBtn').text()).toEqual('Mark as Read');
        expect(toolbar.find('#markAsUnreadBtn')).toHaveLength(1);
        expect(toolbar.find('#markAsUnreadBtn').text()).toEqual('Mark as Unread');
        expect(toolbar.find('#applyLabelBtn')).toHaveLength(1);
        expect(toolbar.find('#applyLabelBtn').text()).toEqual('Apply Label');
        expect(toolbar.find('#removeLabelBtn')).toHaveLength(1);
        expect(toolbar.find('#removeLabelBtn').text()).toEqual('Remove Label');
        expect(toolbar.find('#deleteBtn')).toHaveLength(1);
    })
})