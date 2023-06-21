import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('renders number of events container', () => {
        expect(NumberOfEventsWrapper.find('.numberofevents')).toHaveLength(1);
    });

    test('renders number of events input', () => {
        expect(NumberOfEventsWrapper.find('.numberofeventsinput')).toHaveLength(1);
    });

    test('renders the number of events label', () => {
        expect(NumberOfEventsWrapper.find('.numberofeventslabel')).toHaveLength(1);
    });

    test('displays the correct value in the number of events input', () => {
        const numberOfEvents = NumberOfEventsWrapper.state('query');
        expect(NumberOfEventsWrapper.find('.numberofeventsinput').prop('value')).toBe(numberOfEvents);
    });

    test('updates the state when the number of events input changes', () => {
        expect(NumberOfEventsWrapper.state('query')).toBe(32);
        NumberOfEventsWrapper.find('.numberofeventsinput').simulate('change', { target: { value: 10 }});
    });
});