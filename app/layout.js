import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Header from './Components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pet Animal App',
  description: 'Know About your Pets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <Header />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
