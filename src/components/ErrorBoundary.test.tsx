import React, { JSX } from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '@/components/ErrorBoundary';

function ProblemChild(): JSX.Element {
  throw new Error('Test error');
}

describe('ErrorBoundary', () => {
  const originalError = console.error;
  beforeAll(() => {
    // Suppress all console.error calls during error boundary testing
    // This includes React's internal error logging and our test errors
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalError;
  });

  it('renders fallback UI when a child throws', () => {
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Safe Child</div>
      </ErrorBoundary>
    );
    expect(screen.getByText(/safe child/i)).toBeInTheDocument();
  });
});