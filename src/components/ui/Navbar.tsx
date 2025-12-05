import { useState, useEffect, useRef } from 'react'
import { Search, Menu, X } from 'lucide-react'
import type { FormEvent } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    setShowSearch(false)
  }

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false)
      }
    }

    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showSearch])

  return (
    <>
      {/* First Row: Logo and Hamburger Menu - Sticky/Fixed */}
      <header className="header px-3 py-1 lg:py-2 bg-white fixed w-full top-0 z-50 border-b border-gray-200 shadow-md">
        {/* Desktop Header - Only visible on large screens */}
        <div className="hidden lg:block w-full py-1">
          <div className="flex flex-wrap -mx-4 items-center">
            {/* Logo Section */}
            <div className="w-2/12 px-4">
              <div className="logo_wrap text-left">
                <a href="/">
                  <img 
                        src="/Images/logo.png"
                    alt="AMC - AKGEC Skills" 
                    className="mt-1 w-full h-auto max-h-12"
                  />
                </a>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="w-6/12 px-4">
              <div id="mega-menu-wrap-primary" className="mega-menu-wrap">
                <ul 
                  id="mega-menu-primary" 
                  className="mega-menu max-mega-menu mega-menu-horizontal flex items-center justify-end space-x-4 md:space-x-5 h-full"
                >
                  <li 
                    className="text-zinc-600 hover:text-[#566E95] font-bold font-['Oswald',sans-serif]" 
                    id="mega-menu-item-1366"
                  >
                    <a className="mega-menu-link text-[#029896] font-semibold leading-tight py-2 text-lg hover:text-[#566E95] transition" href="#training" tabIndex={0}>
                      Training
                    </a>
                  </li>
                  <li 
                    className="text-zinc-600 hover:text-[#566E95] font-bold font-['Oswald',sans-serif]" 
                    id="mega-menu-item-1735"
                  >
                    <a className="mega-menu-link text-[#029896] font-semibold leading-tight py-2 text-lg hover:text-[#566E95] transition" href="#services" tabIndex={0}>
                      Services
                    </a>
                  </li>
                  <li 
                    className="text-zinc-600 hover:text-[#566E95] font-bold font-['Oswald',sans-serif]" 
                    id="mega-menu-item-1449"
                  >
                    <a className="mega-menu-link text-[#029896] font-semibold leading-tight py-2 text-lg hover:text-[#566E95] transition" href="#projects" tabIndex={0}>
                      Projects
                    </a>
                  </li>
                  <li 
                    className="text-zinc-600 hover:text-[#566E95] font-bold font-['Oswald',sans-serif]" 
                    id="mega-menu-item-1451"
                  >
                    <a className="mega-menu-link text-[#029896] font-semibold leading-tight py-2 text-lg hover:text-[#566E95] transition" href="#infrastructure" tabIndex={0}>
                      Infrastructure
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* NSDC Logo */}
            <div className="w-2/12 px-4">
              <div className="header_right_wrap text-right">
                <img 
                       src="/Images/nsdc-logo.jpg"
                  alt="nsdc" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Search and Register */}
            <div 
              className="w-2/12 px-4 relative" 
              ref={searchRef}
            >
              <div className="flex items-center justify-start gap-2">
                {/* Search Icon - shown when search is closed */}
                {!showSearch && (
                  <>
                    <button
                      type="button"
                      onMouseEnter={() => setShowSearch(true)}
                      className="search-icon-button p-2 text-white rounded hover:bg-[#566E95] transition"
                      style={{ backgroundColor: '#029896' }}
                      aria-label="Search"
                    >
                      <Search size={23} />
                    </button>
                    <a 
                      href="https://www.akgecskills.in/app/registration/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="min-h-10 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[#566E95] transition whitespace-nowrap"
                      style={{ backgroundColor: '#029896' }}
                    >
                      Register
                    </a>
                  </>
                )}

                {/* Search Form - shown when search is open */}
                {showSearch && (
                  <div 
                    className="w-full"
                    onMouseEnter={() => setShowSearch(true)}
                    onMouseLeave={() => setShowSearch(false)}
                  >
                    <form 
                      role="search" 
                      method="get" 
                      className="search-form flex items-center gap-1 w-full" 
                      action="/"
                      onSubmit={handleSearch}
                    >
                      <label className="flex-1">
                        <span className="screen-reader-text sr-only">Search for:</span>
                        <input 
                          type="search" 
                          className="search-field show-search border border-gray-300 rounded px-2 py-1 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#029896]" 
                          placeholder="Search …" 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          name="s"
                          autoFocus
                        />
                      </label>
                      <button 
                        type="submit" 
                        className="search-submit p-1 text-gray-600 hover:text-[#029896] flex-shrink-0"
                        aria-label="Search"
                      >
                        <span className="screen-reader-text sr-only">Search</span>
                        <Search size={16} className="text-gray-600" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet First Row: Logo and Hamburger Menu - Sticky */}
        <div className="lg:hidden bg-white">
          <div className="w-full px-3 py-2">
            {/* Top Row: Logo and Hamburger Menu */}
            <div className="flex flex-wrap -mx-3 items-center">
              {/* Logo Section */}
              <div className="w-8/12 pr-3">
                <div className="logo_wrap text-left">
                  <a href="/">
                    <img 
                           src="/Images/logo.png"
                      alt="AMC - AKGEC Skills" 
                      className="mt-1 w-full h-auto max-h-12"
                    />
                  </a>
                </div>
              </div>
              
              {/* Hamburger Menu Button - Top Right */}
              <div className="w-4/12 pl-3 flex items-center justify-end">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-gray-700 hover:text-[#029896]"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
            
            {/* Mobile Menu Dropdown */}
            {isOpen && (
              <div className="flex flex-col -mx-3 mt-2 border-t pt-2">
                <div className="w-full px-3 pb-4 space-y-2">
                  <a href="#training" className="block px-3 py-2 text-[#029896] hover:text-[#566E95] font-bold font-['Oswald',sans-serif]">
                    Training
                  </a>
                  <a href="#services" className="block px-3 py-2 text-[#029896] hover:text-[#566E95] font-bold font-['Oswald',sans-serif]">
                    Services
                  </a>
                  <a href="#projects" className="block px-3 py-2 text-[#029896] hover:text-[#566E95] font-bold font-['Oswald',sans-serif]">
                    Projects
                  </a>
                  <a href="#infrastructure" className="block px-3 py-2 text-[#029896] hover:text-[#566E95] font-bold font-['Oswald',sans-serif]">
                    Infrastructure
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar

