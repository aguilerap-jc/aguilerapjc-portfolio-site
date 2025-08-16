import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CookieBanner } from './CookieBanner'

// Mock Next.js Link
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }: any) {
    return <a href={href} {...props}>{children}</a>
  }
})

// Mock gtag function
const mockGtag = jest.fn()
;(global as any).gtag = mockGtag

// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
  writable: true,
})

describe('CookieBanner', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockLocalStorage.getItem.mockReturnValue(null)
  })

  it('renders when no consent preference is stored', () => {
    mockLocalStorage.getItem.mockReturnValue(null)
    
    render(<CookieBanner />)
    
    expect(screen.getByText(/This site uses cookies to analyze traffic/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Accept Cookies/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Decline/i })).toBeInTheDocument()
  })

  it('does not render when consent preference exists (accepted)', () => {
    mockLocalStorage.getItem.mockReturnValue('accepted')
    
    render(<CookieBanner />)
    
    expect(screen.queryByText(/This site uses cookies to analyze traffic/)).not.toBeInTheDocument()
  })

  it('does not render when consent preference exists (declined)', () => {
    mockLocalStorage.getItem.mockReturnValue('declined')
    
    render(<CookieBanner />)
    
    expect(screen.queryByText(/This site uses cookies to analyze traffic/)).not.toBeInTheDocument()
  })

  it('contains proper privacy policy link', () => {
    render(<CookieBanner />)
    
    const privacyLink = screen.getByRole('link', { name: /Learn more about our privacy practices/i })
    expect(privacyLink).toBeInTheDocument()
    expect(privacyLink).toHaveAttribute('href', '/privacy')
  })

  it('handles accepting cookies correctly', () => {
    render(<CookieBanner />)
    
    const acceptButton = screen.getByRole('button', { name: /Accept Cookies/i })
    
    act(() => {
      fireEvent.click(acceptButton)
    })
    
    // Check localStorage is set
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('gdpr-consent', 'accepted')
    
    // Check gtag consent is updated
    expect(mockGtag).toHaveBeenCalledWith('consent', 'update', {
      analytics_storage: 'granted',
    })
    
    // Check banner is hidden
    expect(screen.queryByText(/This site uses cookies to analyze traffic/)).not.toBeInTheDocument()
  })

  it('handles declining cookies correctly', () => {
    render(<CookieBanner />)
    
    const declineButton = screen.getByRole('button', { name: /Decline/i })
    
    act(() => {
      fireEvent.click(declineButton)
    })
    
    // Check localStorage is set
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('gdpr-consent', 'declined')
    
    // Check gtag consent is updated
    expect(mockGtag).toHaveBeenCalledWith('consent', 'update', {
      analytics_storage: 'denied',
    })
    
    // Check banner is hidden
    expect(screen.queryByText(/This site uses cookies to analyze traffic/)).not.toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<CookieBanner />)
    
    const acceptButton = screen.getByRole('button', { name: /Accept Cookies/i })
    const declineButton = screen.getByRole('button', { name: /Decline/i })
    
    expect(acceptButton).toBeInTheDocument()
    expect(declineButton).toBeInTheDocument()
    expect(acceptButton).toBeEnabled()
    expect(declineButton).toBeEnabled()
  })

  it('has proper styling classes', () => {
    render(<CookieBanner />)
    
    // The outer banner container has the fixed positioning
    const outerContainer = document.querySelector('.fixed.bottom-0.left-0.right-0')
    expect(outerContainer).toBeInTheDocument()
    
    const acceptButton = screen.getByRole('button', { name: /Accept Cookies/i })
    expect(acceptButton).toHaveClass('bg-blue-600', 'text-white')
    
    const declineButton = screen.getByRole('button', { name: /Decline/i })
    expect(declineButton).toHaveClass('border-gray-300', 'text-gray-600')
  })

  it('updates banner visibility when accepting cookies', () => {
    const { rerender } = render(<CookieBanner />)
    
    // Banner should be visible initially
    expect(screen.getByText(/This site uses cookies to analyze traffic/)).toBeInTheDocument()
    
    // Accept cookies
    const acceptButton = screen.getByRole('button', { name: /Accept Cookies/i })
    act(() => {
      fireEvent.click(acceptButton)
    })
    
    // Banner should be hidden after accepting
    expect(screen.queryByText(/This site uses cookies to analyze traffic/)).not.toBeInTheDocument()
  })

  it('updates banner visibility when declining cookies', () => {
    const { rerender } = render(<CookieBanner />)
    
    // Banner should be visible initially
    expect(screen.getByText(/This site uses cookies to analyze traffic/)).toBeInTheDocument()
    
    // Decline cookies
    const declineButton = screen.getByRole('button', { name: /Decline/i })
    act(() => {
      fireEvent.click(declineButton)
    })
    
    // Banner should be hidden after declining
    expect(screen.queryByText(/This site uses cookies to analyze traffic/)).not.toBeInTheDocument()
  })

  it('calls localStorage.getItem on component mount', () => {
    render(<CookieBanner />)
    
    expect(mockLocalStorage.getItem).toHaveBeenCalledWith('gdpr-consent')
  })

  it('handles gtag not being available gracefully', () => {
    // Temporarily remove gtag
    const originalGtag = (global as any).gtag
    delete (global as any).gtag
    
    render(<CookieBanner />)
    
    const acceptButton = screen.getByRole('button', { name: /Accept Cookies/i })
    
    // Should not throw error even without gtag
    expect(() => {
      act(() => {
        fireEvent.click(acceptButton)
      })
    }).not.toThrow()
    
    // Restore gtag
    ;(global as any).gtag = originalGtag
  })

  it('contains cookie emoji and descriptive text', () => {
    render(<CookieBanner />)
    
    expect(screen.getByText(/🍪/)).toBeInTheDocument()
    expect(screen.getByText(/analyze traffic and improve your experience/)).toBeInTheDocument()
  })

  it('has proper responsive layout classes', () => {
    render(<CookieBanner />)
    
    const container = screen.getByText(/This site uses cookies/).closest('.flex')
    expect(container).toHaveClass('flex-col', 'sm:flex-row')
    
    const buttonContainer = screen.getByRole('button', { name: /Accept Cookies/i }).closest('.flex')
    expect(buttonContainer).toHaveClass('gap-3', 'shrink-0')
  })
})
