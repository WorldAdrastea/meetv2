import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />)
    });

    test('render event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('render event name', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('render event location', () => {
        expect(EventWrapper.find('.eventlocation')).toHaveLength(1);
    });

    test('render event date', () => {
        expect(EventWrapper.find('.eventstart')).toHaveLength(1);
    });

    test('render show details button', () => {
        expect(EventWrapper.find('.detailsbutton')).toHaveLength(1);
    });

    test('click on show details button', () => {
        EventWrapper.setState({ showDetails: false });
        EventWrapper.find('.detailsbutton').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    });

    test('render event link', () => {
        expect(EventWrapper.find('.eventlink')).toHaveLength(1);
    });

    test('redner event details correctly', () => {
        EventWrapper.setState({ showDetails: true});
        expect(EventWrapper.find('.eventdetails')).toHaveLength(1)
    });
});