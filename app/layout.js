import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata = {
  title: 'HackHolyoke',
  description: '24-hour hackathon at Mount Holyoke College',
  icons: { icon: '/favicon.ico' },
  verification: { google: 'Hx0XNhaS4BBCzzF5fp6ywmIxuuypBjHqsyDli3N2wqM' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
