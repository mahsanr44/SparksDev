import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './Components/AuthProvider/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full Stack Blog',
  description: 'This is our Company Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
        <AuthProvider>
      <Header />
      {children}
      <Footer />
        </AuthProvider>
      </ThemeProvider>
        </body>
    </html>
  )
}
