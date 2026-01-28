/**
 * @file React Test Template
 * @description Unit/Integration tests for a React Component
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import App from '../App';

// Simple Component for Demo
const Button = ({ onClick, label }) => (
    <button onClick={onClick}>{label}</button>
);

describe('Button Component', () => {

    it('renders correctly', () => {
        render(<Button label="Click Me" onClick={() => { }} />);

        // Check if button exists in document
        const buttonElement = screen.getByText(/click me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('handles click events', () => {
        const handleClick = jest.fn();
        render(<Button label="Submit" onClick={handleClick} />);

        // Simulate Click
        const button = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(button);

        // Assert Handler Call
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Button label="Snapshot" onClick={() => { }} />);
        expect(asFragment()).toMatchSnapshot();
    });

});
