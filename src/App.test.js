import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hilmi name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hilmi/i);
  expect(linkElement).toBeInTheDocument();
});
