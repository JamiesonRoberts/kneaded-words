import CloudflareWebAnalyticsProvider from 'next-cloudflare-web-analytics'

export const viewport = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#FFFFFF',
  colorScheme: 'light',
}

export const metadata = {
  metadataBase: new URL('https://kneadedwords.ca/'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en-CA' className={``}>
      <CloudflareWebAnalyticsProvider token={'XXXX'} />
      <body>{children}</body>
    </html>
  )
}
