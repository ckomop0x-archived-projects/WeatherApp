import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../../components/App';


describe('Components', () => {
    describe('App', () => {
        it('renders without crashing', () => {
            const wrapper = renderer.create(<App/>).toJSON();
            expect(wrapper).toMatchSnapshot();
        });
    });
});

