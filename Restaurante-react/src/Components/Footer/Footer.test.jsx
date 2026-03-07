import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

jest.mock('react-scroll', () => ({
  Link: ({ children }) => <a>{children}</a> // eslint-disable-line react/prop-types
}));

describe('Footer Component', () => {
  test('renders footer links correctly', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Menu/i)).toBeInTheDocument();
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });

  test('displays the current year in copyright', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });
});