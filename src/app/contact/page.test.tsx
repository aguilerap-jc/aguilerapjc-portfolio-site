import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './page';

describe('Contact Page', () => {
  it('renders all form fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it('shows error if required fields are empty on submit', () => {
    render(<Contact />);
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
  });

  it('renders LinkedIn and GitHub links', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument();
  });
});