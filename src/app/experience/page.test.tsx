import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from './page';

describe('Experience Page', () => {
  it('renders the main headings', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /Professional Experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Work Experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Education/i })).toBeInTheDocument();
  });

  it('renders all experience titles', () => {
    render(<Experience />);
    expect(screen.getByText(/Product Manager/i)).toBeInTheDocument();
    expect(screen.getByText(/Deliver Lead/i)).toBeInTheDocument();
    expect(screen.getByText(/Embedded Test Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/R&D Jr Developer/i)).toBeInTheDocument();
  });

  it('renders all education degrees', () => {
    render(<Experience />);
    expect(screen.getByText(/Master in Business Administration/i)).toBeInTheDocument();
    expect(screen.getByText(/Bachelor of Science in Engineering/i)).toBeInTheDocument();
  });
});