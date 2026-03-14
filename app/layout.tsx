import type { Metadata } from 'next'
import { Playfair_Display, Montserrat, Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  weight: ['700', '900'],
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'LOGO',
  description: 'Вкусная еда ждёт тебя! ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={cn("font-sans", geist.variable)}>
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        <Header/>
         {children}
        <Footer/>
      </body>
    </html>
  )
}
