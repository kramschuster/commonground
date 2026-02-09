import React from 'react';
import { render } from '@testing-library/react';
import PerspectiveCard from '../../components/PerspectiveCard';

describe('PerspectiveCard', () => {
    it('renders without crashing', () => {
        render(<PerspectiveCard />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<PerspectiveCard />);
        expect(asFragment()).toMatchSnapshot();
    });

    // Add more tests as necessary
});