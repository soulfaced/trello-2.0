import Modal from '@/components/Modal'
import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata= {
  title: 'Trello',
  description: 'Created by sanchit padwekar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#F5FF8]'>
        {children}
        <Modal />
      </body>
    </html>
  )
}
