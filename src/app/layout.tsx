import type { Metadata } from 'next'
import { Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-marathi',
})

export const metadata: Metadata = {
  title: 'Engagement Invitation | साखरपुडा निमंत्रण',
  description: 'Beautiful engagement ceremony invitation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mr" className={notoSansDevanagari.variable}>
      <body className="font-marathi antialiased">{children}</body>
    </html>
  )
}

