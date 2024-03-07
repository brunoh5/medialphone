import './globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'

import { Providers } from './providers'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
export const metadata: Metadata = {
  title: {
    default: 'MedialShop',
    template: '%s | MedialShop',
  },
  description:
    'Bem-vindo à nossa loja de smartphones, onde a tecnologia encontra a elegância! Descubra uma vasta seleção dos mais recentes e inovadores smartphones, cuidadosamente escolhidos para atender às suas necessidades digitais.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
