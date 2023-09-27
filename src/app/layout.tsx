import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '@/components/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Covid Support',
  description: 'A website for covid patients',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
