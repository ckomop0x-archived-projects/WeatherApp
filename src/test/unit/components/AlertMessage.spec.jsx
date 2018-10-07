import React from 'react';
import renderer from 'react-test-renderer';
import AlertMessage from '../../../components/AlertMessage';


describe('Components', () => {
    describe('App', () => {
        it('renders without crashing', () => {
            const wrapper = renderer.create(<AlertMessage/>).toJSON();
            expect(wrapper).toMatchSnapshot();
        });
    });
});