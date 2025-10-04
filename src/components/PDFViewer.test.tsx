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
    expect(button).toHaveTextContent('👁️ View Only');
    expect(button).toHaveAttribute('title', 'View only - Download disabled');
    expect(button).not.toHaveAttribute('target', '_blank');
  });

  it('opens modal when download is disabled and button is clicked', () => {
    render(<PDFViewer {...mockProps} allowDownload={false} />);
    
    const button = screen.getByRole('link');
    fireEvent.click(button);
    
    // Check if modal opened
    expect(screen.getByText('Test Presentation')).toBeInTheDocument();
    expect(screen.getByText('📄 Viewing only - Download is not available for this presentation')).toBeInTheDocument();
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
    expect(screen.queryByText('📄 Viewing only - Download is not available for this presentation')).not.toBeInTheDocument();
  });

  it('allows download when allowDownload is true', () => {
    render(<PDFViewer {...mockProps} allowDownload={true} />);
    
    const button = screen.getByRole('link');
    expect(button).toHaveTextContent('📄 View Slides');
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('rel', 'noopener noreferrer');
  });
});