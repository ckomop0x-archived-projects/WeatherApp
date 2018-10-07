import React from 'react';
import renderer from 'react-test-renderer';
import WeatherDisplay from '../../../components/WeatherDisplay';


describe('Components', () => {
    describe('App', () => {
        it('renders without crashing', () => {
            const wrapper = renderer.create(<WeatherDisplay/>).toJSON();
            expect(wrapper).toMatchSnapshot();
        });
    });
});