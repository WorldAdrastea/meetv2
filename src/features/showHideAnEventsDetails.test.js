import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mount } from "enzyme";
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('that the user chooses a city', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        when('the user receives the list of events of that city', () => {
            expect(AppWrapper.find('.event').at(0)).toHaveLength(1);
        });

        then('the event element should collapse by default', () => {
            expect(AppWrapper.find('.eventdetails').at(0)).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('the user has chosen an event', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            expect(AppWrapper.find('.event').at(0)).toHaveLength(1);
            expect(AppWrapper.find('.eventdetails').at(0)).toHaveLength(0);
        });

        when('the user clicks on the event', () => {
            AppWrapper.find(".event button").at(0).simulate("click");
        });

        then('the event details will be shown', () => {
            expect(AppWrapper.find('.eventdetails').at(0)).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {

        let AppWrapper;

        given('the user has opened an event up and decides that they no longer need it', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find(".event button").at(0).simulate("click");
            expect(AppWrapper.find('.eventdetails').at(0)).toHaveLength(1);
        });

        when('the user clicks on the event', () => {
            AppWrapper.find(".event button").at(0).simulate("click");
        });

        then('the event will collapse and hide its details', () => {
            expect(AppWrapper.find('.eventdetails').at(0)).toHaveLength(0);
        });
    });
});