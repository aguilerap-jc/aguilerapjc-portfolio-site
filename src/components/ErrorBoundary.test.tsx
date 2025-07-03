import React, { JSX } from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '@/components/ErrorBoundary';

function ProblemChild(): JSX.Element {
  throw new Error('Test error');
}

describe('ErrorBoundary', () => {
  const originalError = console.error;
  beforeAll(() => {
    // Suppress React error boundary warnings in test output
    console.error = (...args: unknown[]) => {
      if (
        typeof args[0] === 'string' &&
        args[0].includes('The above error occurred in the')
      ) {
        return;
      }
      originalError(...args);
    };
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