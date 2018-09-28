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
})