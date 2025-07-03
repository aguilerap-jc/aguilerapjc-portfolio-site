import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './page';

describe('Projects Page', () => {
  it('renders the main page title', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Projects Portfolio/i })).toBeInTheDocument();
  });

  it('renders the Professional Projects section', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Professional Projects/i })).toBeInTheDocument();
  });

  it('renders the Personal Projects section', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Personal Projects/i })).toBeInTheDocument();
  });

  it('renders at least one professional project card', () => {
    render(<Projects />);
    // Check for a known professional project title or category
    expect(screen.getAllByText(/Product Management|Development|Research/i).length).toBeGreaterThan(0);
  });

  it('renders at least one personal project card', () => {
    render(<Projects />);
    // Check for a known personal project category or title
    expect(screen.getAllByText(/Technologies Used|Key Features/i).length).toBeGreaterThan(0);
  });
});