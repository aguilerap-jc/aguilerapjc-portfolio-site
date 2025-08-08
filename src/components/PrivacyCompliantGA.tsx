'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export function PrivacyCompliantGA() {
  useEffect(() => {
    // Only initialize GA in production or when explicitly enabled
    const isDevelopment = process.env.NODE_ENV === 'development'
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    
    if (!gaId) {
      if (isDevelopment) {
        console.log('GA: No GA_ID found, skipping initialization')
      }
      return
    }

    if (typeof window !== 'undefined') {
      try {
        // Initialize with consent denied by default (GDPR compliant)
        if (window.gtag) {
          window.gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            security_storage: 'granted', // Always allow security cookies
            wait_for_update: 500
          })

          // Check for existing consent
          const consent = localStorage.getItem('gdpr-consent')
          if (consent === 'accepted') {
            window.gtag('consent', 'update', {
              analytics_storage: 'granted'
            })
            
            if (isDevelopment) {
              console.log('GA: Analytics consent granted from stored preference')
            }
          }
          
          if (isDevelopment) {
            console.log('GA: Privacy-compliant initialization complete')
          }
        } else {
          if (isDevelopment) {
            console.log('GA: gtag not available, skipping consent setup')
          }
        }
      } catch (error) {
        if (isDevelopment) {
          console.warn('GA: Error during initialization:', error)
        }
        // Silently fail in production to avoid breaking the site
      }
    }
  }, [])

  return null
}
