import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AF6GA link', () => {
  render(<App />);
  const linkElement = screen.getByText(/AF6GA/i);
  expect(linkElement).toBeInTheDocument();
});
