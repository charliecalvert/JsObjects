import { render, screen } from '@testing-library/react';
import React from 'react';
import AppBtn from '../src/AppBtn.js.save';

describe('AppBtn tests', () => {
	it('should contains the heading 1', () => {
		render(<AppBtn classname AppBtn/>);
		const heading = screen.getByText(/Hello world! I am using React/i);
		expect(heading).toBeInTheDocument();
	});
});