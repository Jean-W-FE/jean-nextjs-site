'use client'
import * as React from 'react'
import { ThemeProvider } from 'jean-react-utils'
import { SmoothScrollProvider } from './smooth-scroll-provider'
import { Analytics } from "@vercel/analytics/react"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ThemeProvider 
        attribute="data-theme"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <SmoothScrollProvider>
          {children}
          <Analytics />
        </SmoothScrollProvider>
      </ThemeProvider>
  )
} 