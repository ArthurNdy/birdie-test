import React from 'react';
import { render, screen } from '@testing-library/react';
import TableComponent from '../tsx/TableComponent';

test('renders learn react link', () => {
  render(<TableComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
