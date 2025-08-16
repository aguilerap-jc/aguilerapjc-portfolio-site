import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockedLink({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  describe('Desktop Navigation', () => {
    it('renders the main logo/title', () => {
      expect(screen.getByText('Juan Carlos Aguilera')).toBeInTheDocument();
    });

    it('renders all navigation links', () => {
      const navigationLinks = ['Home', 'Experience', 'Projects', 'Blog', 'Contact'];
      
      navigationLinks.forEach(linkText => {
        const links = screen.getAllByText(linkText);
        expect(links.length).toBeGreaterThan(0);
      });
    });

    it('has correct href attributes for navigation links', () => {
      expect(screen.getByRole('link', { name: 'Juan Carlos Aguilera' })).toHaveAttribute('href', '/');
      expect(screen.getAllByRole('link', { name: 'Home' })[0]).toHaveAttribute('href', '/');
      expect(screen.getAllByRole('link', { name: 'Experience' })[0]).toHaveAttribute('href', '/experience');
      expect(screen.getAllByRole('link', { name: 'Projects' })[0]).toHaveAttribute('href', '/projects');
      expect(screen.getAllByRole('link', { name: 'Blog' })[0]).toHaveAttribute('href', '/blog');
      expect(screen.getAllByRole('link', { name: 'Contact' })[0]).toHaveAttribute('href', '/contact');
    });
  });

  describe('Mobile Navigation', () => {
    it('renders mobile menu button', () => {
      const menuButton = screen.getByRole('button', { name: /open main menu/i });
      expect(menuButton).toBeInTheDocument();
    });

    it('mobile menu is hidden by default', () => {
      // Check that mobile navigation links are not visible initially
      const mobileNavContainer = screen.queryByText('Home')?.closest('.sm\\:hidden');
      expect(mobileNavContainer).not.toBeInTheDocument();
    });

    it('opens mobile menu when button is clicked', () => {
      const menuButton = screen.getByRole('button', { name: /open main menu/i });
      
      fireEvent.click(menuButton);
      
      // After clicking, the mobile menu should be visible
      // We can check for multiple Home links (desktop + mobile)
      const homeLinks = screen.getAllByText('Home');
      expect(homeLinks.length).toBeGreaterThan(1); // Desktop + Mobile
    });

    it('closes mobile menu when button is clicked again', () => {
      const menuButton = screen.getByRole('button', { name: /open main menu/i });
      
      // Open menu
      fireEvent.click(menuButton);
      let homeLinks = screen.getAllByText('Home');
      expect(homeLinks.length).toBeGreaterThan(1);
      
      // Close menu
      fireEvent.click(menuButton);
      homeLinks = screen.getAllByText('Home');
      expect(homeLinks.length).toBe(1); // Only desktop version
    });

    it('shows hamburger icon when menu is closed', () => {
      const menuButton = screen.getByRole('button', { name: /open main menu/i });
      const hamburgerIcon = menuButton.querySelector('svg[viewBox="0 0 24 24"] path[d="M4 6h16M4 12h16M4 18h16"]');
      
      expect(hamburgerIcon).toBeInTheDocument();
    });

    it('shows close icon when menu is open', () => {
      const menuButton = screen.getByRole('button', { name: /open main menu/i });
      
      fireEvent.click(menuButton);
      
      const closeIcon = menuButton.querySelector('svg[viewBox="0 0 24 24"] path[d="M6 18L18 6M6 6l12 12"]');
      expect(closeIcon).toBeInTheDocument();
    });
  });

  describe('Styling and Layout', () => {
    it('has fixed positioning and proper z-index', () => {
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('fixed', 'z-50');
    });

    it('has proper background and shadow styling', () => {
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('bg-white', 'shadow-lg');
    });

    it('has responsive design classes', () => {
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('w-full');
      
      // Check for responsive container
      const container = nav.querySelector('.max-w-7xl');
      expect(container).toBeInTheDocument();
    });
  });
});
