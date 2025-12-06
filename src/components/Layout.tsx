import type { ReactNode } from 'react'
import Navbar from './ui/Navbar'
import Footer from './Footer'
import ContactNow from './ContactNow'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-23">
        {children}
      </main>
      <Footer />
      <ContactNow />
    </div>
  )
}

export default Layout

