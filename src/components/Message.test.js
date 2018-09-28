import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message', () => {
    it('renders a message with the subject displayed', () => {
        // setup
        const msg = { id: 1, subject: 'abdfe', read: false, selected: false, labels: ['dev', 'gschool'], starred: false }
        const message = shallow(<Message message={msg} />)

        // assert
        expect(message.find('#subject').text()).toEqual(msg.subject);
        expect(message.find('#subject')).toHaveLength(1);
        expect(message.find('#isSelected')).toHaveLength(1);
        expect(message.find('#isStarred')).toHaveLength(1);
        expect(message.find('#label')).toHaveLength(msg.labels.length);
    })

    it('should have the read style if read', () => {
        const msg = { id: 1, subject: 'abdfe', read: false, selected: false, labels: ['dev', 'gschool'], starred: false }
        const message = shallow(<Message message={msg} />)

        expect(message.hasClass("read")).toEqual(false)
        expect(message.hasClass("unread")).toEqual(true)
    })

    it('should have the selected style and box checked only if selected', () => {
        const msgSelected = { id: 1, subject: 'abdfe', read: false, selected: true, labels: ['dev', 'gschool'], starred: false }
        const msgUnselected = { id: 1, subject: 'abdfe', read: false, selected: false, labels: ['dev', 'gschool'], starred: false }
        const messageSelected = shallow(<Message message={msgSelected} />)
        const messageUnselected = shallow(<Message message={msgUnselected} />)

        expect(messageSelected.hasClass("selected")).toEqual(true)
        expect(messageSelected.find("#isSelected").prop('checked')).toEqual(true)
        expect(messageUnselected.hasClass("selected")).toEqual(false)
        expect(messageUnselected.find("#isSelected").prop('checked')).toEqual(false)
    })

    it('should have the appropriate star style based on isStarred', () => {
        const msgStarred = { id: 1, subject: 'abdfe', read: false, selected: true, labels: ['dev', 'gschool'], starred: true }
        const msgUnStarred = { id: 1, subject: 'abdfe', read: false, selected: true, labels: ['dev', 'gschool'], starred: false }
        const messageStarred = shallow(<Message message={msgStarred} />)
        const messageUnStarred = shallow(<Message message={msgUnStarred} />)

        expect(messageStarred.find('#isStarred').hasClass('fa-star')).toEqual(true)
        expect(messageUnStarred.find('#isStarred').hasClass('fa-star-o')).toEqual(true)
    })

    it('should have a span per label', () => {
        const msgLabeled = { id: 1, subject: 'abdfe', read: false, selected: true, labels: ['dev'], starred: true }
        const msgLabeledNone = { id: 1, subject: 'abdfe', read: false, selected: true, labels: [], starred: true }
        const msgLabeledMultiple = { id: 1, subject: 'abdfe', read: false, selected: true, labels: ['dev', 'stage', 'prod'], starred: true }

        const messageLabeled = shallow(<Message message={msgLabeled} />)
        const messageLabeledNone = shallow(<Message message={msgLabeledNone} />)
        const messageLabeledMultiple = shallow(<Message message={msgLabeledMultiple} />)

        expect(messageLabeled.find('#label')).toHaveLength(msgLabeled.labels.length)
        expect(messageLabeledNone.find('#label')).toHaveLength(msgLabeledNone.labels.length)
        expect(messageLabeledMultiple.find('#label')).toHaveLength(msgLabeledMultiple.labels.length)
    })

    describe('starMessage', () => {
        it('should call the passed in starMessage function when star is clicked', () => {
            // setup
            const msg = {
                id: 1,
                subject: 'abdfe',
                read: false,
                selected: true,
                labels: ['dev'],
                starred: true
            }
            const fakeStarMessage = jest.fn();
            const mess = shallow(<Message message={msg} updateMessage={fakeStarMessage} />)

            // exercise
            mess.find('#isStarred').simulate('click');

            // assert
            expect(fakeStarMessage).toHaveBeenCalledWith(
                {
                    ...msg,
                    starred: false,
                }
            )
        })

    })

    describe('checkbox message selected tests', () => {
        it('should triger a function call on checkbox click', () => {
            const msg = {
                id: 1,
                subject: 'abdfe',
                read: false,
                selected: true,
                labels: ['dev'],
                starred: true
            }
            const fakeSelect = jest.fn();
            const message = shallow(<Message message={msg} updateMessage={fakeSelect} />)

            message.find('#isSelected').simulate('click')

            expect(fakeSelect).toHaveBeenCalledWith(
                {
                    ...msg,
                    selected: false,
                }
            )
        })
    })
})