import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mount } from "enzyme";
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number', ({given, when, then}) => {
        given('the user has not specified a number', () => {

        });
        let AppWrapper;
        when('the user has selected a city', () => {
            AppWrapper = mount(<App />);
        });
        then('the deafult number of events shown will be 32', () => {
            AppWrapper.update();
            expect(AppWrapper.find(".event")).toHaveLength(mockData.slice(0, 32).length);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('the user has selected a city and 32 events are shown', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.slice(0, 32).length);
        });

        when('the user wants to change how many events they want to view', () => {
            AppWrapper.find(".numberofeventsinput").simulate("change", { target: { value: 1 } });
        });

        then('the user should be able to change how many events are displayed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(1);
        });
    });
});