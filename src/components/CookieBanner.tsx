'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('gdpr-consent')
    if (!consent) {
      setShowBanner(true)
    } else if (consent === 'accepted') {
      // Initialize GA if consent was previously given
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        })
      }
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('gdpr-consent', 'accepted')
    setShowBanner(false)
    
    // Initialize GA with consent
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        })
        
        if (process.env.NODE_ENV === 'development') {
          console.log('GA: Analytics consent granted by user')
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('GA: Error updating consent:', error)
        }
      }
    }
  }

  const declineCookies = () => {
    localStorage.setItem('gdpr-consent', 'declined')
    setShowBanner(false)
    
    // Ensure GA remains disabled
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied'
        })
        
        if (process.env.NODE_ENV === 'development') {
          console.log('GA: Analytics consent declined by user')
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('GA: Error updating consent:', error)
        }
      }
    }
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200/50 shadow-lg z-50">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-relaxed">
              🍪 This site uses cookies to analyze traffic and improve your experience.{' '}
              <Link 
                href="/privacy" 
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                Learn more about our privacy practices
              </Link>
            </p>
          </div>
          
          <div className="flex gap-3 shrink-0">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
