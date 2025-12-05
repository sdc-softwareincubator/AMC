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
      <main className="flex-grow pt-12 md:pt-14">
        {children}
      </main>
      <Footer />
      <ContactNow />
    </div>
  )
}

export default Layout

