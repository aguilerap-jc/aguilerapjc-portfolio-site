import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockedLink({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  describe('Content Sections', () => {
    it('renders the About section with description', () => {
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText(/passionate Product Manager with expertise in Autonomous Vehicles/)).toBeInTheDocument();
    });

    it('renders the Quick Links section', () => {
      expect(screen.getByText('Quick Links')).toBeInTheDocument();
      
      // Check for navigation links
      const quickLinks = ['Home', 'Experience', 'Projects', 'Contact'];
      quickLinks.forEach(linkText => {
        expect(screen.getByRole('link', { name: linkText })).toBeInTheDocument();
      });
    });

    it('has correct href attributes for quick links', () => {
      expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
      expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '/experience');
      expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');
      expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
    });

    it('renders the Connect section with social links', () => {
      expect(screen.getByText('Connect')).toBeInTheDocument();
      
      // Check for social media links
      expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
    });
  });

  describe('Social Media Links', () => {
    it('has correct LinkedIn link with proper attributes', () => {
      const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' });
      expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/aguilerapjc');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('has correct GitHub link with proper attributes', () => {
      const githubLink = screen.getByRole('link', { name: 'GitHub' });
      expect(githubLink).toHaveAttribute('href', 'https://github.com/aguilerap-jc');
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders social media icons', () => {
      // Check for SVG icons
      const linkedinIcon = screen.getByRole('link', { name: 'LinkedIn' }).querySelector('svg');
      const githubIcon = screen.getByRole('link', { name: 'GitHub' }).querySelector('svg');
      
      expect(linkedinIcon).toBeInTheDocument();
      expect(githubIcon).toBeInTheDocument();
    });
  });

  describe('Copyright and Legal', () => {
    it('renders copyright notice with current year', () => {
      const currentYear = new Date().getFullYear();
      expect(screen.getByText(`© ${currentYear} Juan Carlos Aguilera. All rights reserved.`)).toBeInTheDocument();
    });

    it('renders Privacy Policy link', () => {
      const privacyLink = screen.getByRole('link', { name: 'Privacy Policy' });
      expect(privacyLink).toBeInTheDocument();
      expect(privacyLink).toHaveAttribute('href', '/privacy');
    });
  });

  describe('Layout and Styling', () => {
    it('has proper footer semantic tag', () => {
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
      expect(footer.tagName).toBe('FOOTER');
    });

    it('has correct background and text color classes', () => {
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('bg-gray-800', 'text-white');
    });

    it('has responsive grid layout classes', () => {
      const footer = screen.getByRole('contentinfo');
      const gridContainer = footer.querySelector('.grid');
      expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-3');
    });

    it('has proper container and spacing classes', () => {
      const footer = screen.getByRole('contentinfo');
      const container = footer.querySelector('.max-w-7xl');
      expect(container).toBeInTheDocument();
      expect(container).toHaveClass('mx-auto', 'py-12');
    });
  });

  describe('Accessibility', () => {
    it('has screen reader text for social media icons', () => {
      expect(screen.getByText('LinkedIn')).toHaveClass('sr-only');
      expect(screen.getByText('GitHub')).toHaveClass('sr-only');
    });

    it('has proper heading hierarchy', () => {
      const headings = screen.getAllByRole('heading', { level: 3 });
      expect(headings).toHaveLength(3);
      expect(headings[0]).toHaveTextContent('About');
      expect(headings[1]).toHaveTextContent('Quick Links');
      expect(headings[2]).toHaveTextContent('Connect');
    });
  });
});
