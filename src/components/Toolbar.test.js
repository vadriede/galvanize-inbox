import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';

describe('test toolbar component', () => {
    it('it renders with the required elements', () => {
        // setup
        const toolbar = shallow(<Toolbar />)

        // assert
        expect(toolbar.find("#selectAll")).toHaveLength(1);
    })

    it('should call the supplied selector function when selectAll is clicked', () => {
        // setup
        const fakeFunc = jest.fn();
        const toolbar = shallow(<Toolbar selector={fakeFunc} />)

        // exercise
        toolbar.find("#selectAll").simulate('click');

        // assert
        expect(fakeFunc).toHaveBeenCalledTimes(1);
        expect(fakeFunc).toHaveBeenCalledWith()

    })

    it('should render different icons in the select all button based on the currentSelectionState', () => {
        // setup
        const toolbarNone = shallow(<Toolbar selection='none' />)
        const toolbarSome = shallow(<Toolbar selection='some' />)
        const toolbarAll = shallow(<Toolbar selection='all' />)

        // exercise

        // assert
        expect(toolbarNone.find('#selectAllIcon').hasClass('fa-square-o')).toEqual(true)
        expect(toolbarNone.find('#selectAllIcon').hasClass('fa-minus-square-o')).toEqual(false)
        expect(toolbarNone.find('#selectAllIcon').hasClass('fa-check-square-o')).toEqual(false)

        expect(toolbarSome.find('#selectAllIcon').hasClass('fa-square-o')).toEqual(false)
        expect(toolbarSome.find('#selectAllIcon').hasClass('fa-minus-square-o')).toEqual(true)
        expect(toolbarSome.find('#selectAllIcon').hasClass('fa-check-square-o')).toEqual(false)

        expect(toolbarAll.find('#selectAllIcon').hasClass('fa-square-o')).toEqual(false)
        expect(toolbarAll.find('#selectAllIcon').hasClass('fa-minus-square-o')).toEqual(false)
        expect(toolbarAll.find('#selectAllIcon').hasClass('fa-check-square-o')).toEqual(true)

    })

    it('should call the function supplied for markRead with parameter for read/unread', () => {
        // setup
        const fakeFunc = jest.fn();
        const fakeFuncUnread = jest.fn();
        const countUnread1 = jest.fn();
        const countUnread2 = jest.fn();
        const toolbar = shallow(<Toolbar markRead={fakeFunc} countUnread={countUnread1} />)
        const toolbarUnread = shallow(<Toolbar markRead={fakeFuncUnread} countUnread={countUnread2} />)


        // exercise
        toolbar.find("#markRead").simulate('click');
        toolbarUnread.find("#markUnread").simulate('click');

        // assert
        expect(fakeFunc).toHaveBeenCalledTimes(1);
        expect(fakeFunc).toHaveBeenCalledWith(true);
        expect(fakeFuncUnread).toHaveBeenCalledWith(false);
        expect(countUnread1).toHaveBeenCalledTimes(1);
        expect(countUnread2).toHaveBeenCalledTimes(1);

    })

    it('should only have enabled edit buttons when more than zero messages selected', () => {
        const toolbarNone = shallow(<Toolbar selection='none' />)
        const toolbarSome = shallow(<Toolbar selection='some' />)
        const toolbarAll = shallow(<Toolbar selection='all' />)

        expect(toolbarNone.find('#markRead').prop('disabled')).toEqual(true)
        expect(toolbarSome.find('#markRead').prop('disabled')).toEqual(false)
        expect(toolbarAll.find('#markRead').prop('disabled')).toEqual(false)
    })

    it('should display the current count of unread messages', () => {
        const toolbar = shallow(<Toolbar unreadCount='4' />)

        expect(toolbar.find('#unreadCount').text()).toEqual('4')
    })

    it('should call the delete function when the delete button is pushed', () => {
        // setup
        const fake = jest.fn();
        const toolbar = shallow(<Toolbar deleteMessages={fake} />);

        // exercise
        toolbar.find('#deleteBtn').simulate('click');

        // assert
        expect(fake).toHaveBeenCalledTimes(1);
    })

    it('should call the addLabel function when the addLabel button is pushed', () => {
        // setup
        const fake = jest.fn();
        const toolbar = shallow(<Toolbar addLabel={fake} />)

        // exercise
        toolbar.find('#addLabel').simulate('change', { target: { value: 'dev' } })

        // assert
        expect(fake).toHaveBeenCalledTimes(1)
        expect(fake).toHaveBeenCalledWith({ target: { value: 'dev' } })
    })
})