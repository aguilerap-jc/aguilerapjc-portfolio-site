'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export function PrivacyCompliantGA() {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
      // Initialize with consent denied by default (GDPR compliant)
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
      }
    }
  }, [])

  return null
}
