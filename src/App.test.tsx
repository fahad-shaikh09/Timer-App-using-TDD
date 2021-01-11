import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

test('Timer App', () => {
  render(<App />);
  const linkElement = screen.getByText(/timer app/i);
  expect(linkElement).toBeInTheDocument();

  
});





