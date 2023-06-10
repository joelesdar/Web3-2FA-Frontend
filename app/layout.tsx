import './globals.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600','700'],
  style: 'normal'
})

export const metadata = {
  title: 'Web3-2FA',
  description: 'A blockchain-based two-factor authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
