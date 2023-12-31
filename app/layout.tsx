import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins, Merriweather_Sans, Play , Iceland, Changa} from'next/font/google';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500'],
  subsets:['latin'],
  variable: "--poppins-font",
});
const iceland = Iceland({
  weight: ["400"],
  subsets:['latin'],
  variable: "--iceland-font",
});
const play = Play({
  weight: ['400', '700'],
  subsets:['latin'],
  variable: "--primary-font",
});
const changa = Changa({
  weight: ["400"],
  subsets:['latin'],
  variable: "--changa-font",
});

const merriweather = Merriweather_Sans({
  subsets:['latin'],
  variable: "--body-font",
});


export const metadata: Metadata = {
  title: 'Fathi Technology',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={`${poppins.variable} ${merriweather.variable} ${play.variable} ${iceland.variable} ${changa.variable} `}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
