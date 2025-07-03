import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Juan C\. Aguilera/i })).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Home />);
    expect(screen.getByText(/Product Manager/i)).toBeInTheDocument();
    expect(screen.getByText(/\| Autonomous Vehicles & Mobility/i)).toBeInTheDocument();
  });

  it('renders the about paragraph', () => {
    render(<Home />);
    expect(screen.getByText(/Passionate about building innovative mobility solutions/i)).toBeInTheDocument();
  });

  it('renders the Get in Touch and Learn More links', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /Get in Touch/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument();
  });

  it('renders the Featured Projects section and at least one project', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument();
    // Check for a known project title or description
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(0);
  });

  it('renders all soft skills', () => {
    render(<Home />);
    const softSkills = [
      'Product Management',
      'Stakeholder Management',
      'Product Strategy',
      'Roadmapping'
    ];
    softSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('renders all technical skills', () => {
    render(<Home />);
    const techSkills = [
      'Remote Operations',
      'Artificial Intelligence',
      'Automotive',
      'Robotics'
    ];
    techSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});