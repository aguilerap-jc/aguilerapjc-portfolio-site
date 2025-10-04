import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PDFViewer } from './PDFViewer';

describe('PDFViewer Component', () => {
  const mockProps = {
    pdfUrl: '/test-presentation.pdf',
    title: 'Test Presentation'
  };

  it('renders with download enabled by default', () => {
    render(<PDFViewer {...mockProps} />);
    
    const button = screen.getByRole('link');
    expect(button).toHaveTextContent('📄 View Slides');
    expect(button).toHaveAttribute('href', '/test-presentation.pdf');
    expect(button).toHaveAttribute('target', '_blank');
  });

  it('renders with download disabled', () => {
    render(<PDFViewer {...mockProps} allowDownload={false} />);
    
    const button = screen.getByRole('link');
    expect(button).toHaveTextContent('📄 View Slides');
    expect(button).toHaveAttribute('title', 'View only - Download disabled');
    expect(button).not.toHaveAttribute('target', '_blank');
  });

  it('opens modal when download is disabled and button is clicked', () => {
    render(<PDFViewer {...mockProps} allowDownload={false} />);
    
    const button = screen.getByRole('link');
    fireEvent.click(button);
    
    // Check if modal opened
    expect(screen.getByText('Test Presentation')).toBeInTheDocument();
    expect(screen.getByText('📄 Preview')).toBeInTheDocument();
    
    // Check if zoom controls are present
    expect(screen.getByTitle('Zoom in')).toBeInTheDocument();
    expect(screen.getByTitle('Zoom out')).toBeInTheDocument();
    expect(screen.getByTitle('Reset to 100%')).toBeInTheDocument();
  });

  it('closes modal when close button is clicked', () => {
    render(<PDFViewer {...mockProps} allowDownload={false} />);
    
    // Open modal
    const button = screen.getByRole('link');
    fireEvent.click(button);
    
    // Close modal
    const closeButton = screen.getByLabelText('Close viewer');
    fireEvent.click(closeButton);
    
    // Check if modal is closed
    expect(screen.queryByText('📄 Preview')).not.toBeInTheDocument();
  });

  it('allows download when allowDownload is true', () => {
    render(<PDFViewer {...mockProps} allowDownload={true} />);
    
    const button = screen.getByRole('link');
    expect(button).toHaveTextContent('📄 View Slides');
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('handles zoom controls correctly', () => {
    render(<PDFViewer {...mockProps} allowDownload={false} />);
    
    // Open modal
    const button = screen.getByRole('link');
    fireEvent.click(button);
    
    // Initial check - iframe should have zoom=75 (default)
    let iframe = screen.getByTitle('Test Presentation');
    expect(iframe).toHaveAttribute('src', expect.stringContaining('zoom=75'));
    
    // Test zoom in
    const zoomInButton = screen.getByTitle('Zoom in');
    fireEvent.click(zoomInButton);
    
    // Re-query iframe after zoom change (due to key prop)
    iframe = screen.getByTitle('Test Presentation');
    expect(iframe).toHaveAttribute('src', expect.stringContaining('zoom=85'));
    
    // Test reset to 100%
    const resetButton = screen.getByTitle('Reset to 100%');
    fireEvent.click(resetButton);
    
    // Re-query iframe after reset
    iframe = screen.getByTitle('Test Presentation');
    expect(iframe).toHaveAttribute('src', expect.stringContaining('zoom=100'));
  });
});