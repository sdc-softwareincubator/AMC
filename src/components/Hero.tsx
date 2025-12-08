import { useState, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { FormEvent } from 'react'

const Hero = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      navigate('/search')
    }
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
      {/* Second Row: Government Logos and Action Buttons - Mobile/Tablet Only */}
      <div className="lg:hidden bg-white border-b border-gray-200">
        <div className="w-full px-5 py-2">
          <div className="flex flex-wrap -mx-3 items-center">
            {/* Government Logos Section - Left Side */}
            <div className="w-7/12 pr-3">
              <div className="flex items-center gap-2">
                {/* NSDC Logo */}
                <div className="flex-shrink-0">
                  <img
                    src="/Images/nsdc-logo.jpg"
                    alt="NSDC"
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Search and Register Buttons - Right Side */}
            <div
              className="w-5/12 pl-3 flex items-center justify-end gap-2"
              ref={searchRef}
            >
              {/* Search Icon Button */}
              {!showSearch && (
                <button
                  type="button"
                  onClick={() => setShowSearch(true)}
                  className="search-icon-button p-2 text-white rounded hover:bg-[#566E95] transition flex-shrink-0"
                  style={{ backgroundColor: '#029896' }}
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              )}

              {/* Search Form - shown when search is open */}
              {showSearch && (
                <div className="w-full">
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
                        className="search-field show-search border border-gray-300 rounded px-2 py-1 text-xs w-full focus:outline-none focus:ring-2 focus:ring-[#029896]"
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
                      <Search size={14} className="text-gray-600" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowSearch(false)}
                      className="p-1 text-gray-600 hover:text-[#029896] flex-shrink-0"
                      aria-label="Close search"
                    >
                      <X size={14} />
                    </button>
                  </form>
                </div>
              )}

              {/* Register Button */}
              {!showSearch && (
                <a
                  href="https://www.akgecskills.in/app/registration/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-3 py-2 rounded text-xs font-semibold hover:bg-[#566E95] transition whitespace-nowrap flex-shrink-0"
                  style={{ backgroundColor: '#029896' }}
                >
                  Register
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="w-full relative">
        <div className="w-full relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-black bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: 'url("/Images/Front-pic.jpg")',
              }}
            >
              {/* Dark Overlay */}
              <div
                className="absolute inset-0 bg-black/50"
              ></div>
            </div>
          </div>

          {/* Content Layer */}
          <div className="absolute inset-0 z-10 flex items-center justify-end pr-4 md:pr-8">
            <div className="max-w-[1180px] w-full p-2.5 mx-auto flex justify-end">
              <div className="max-w-[720px] w-full text-right p-2.5">
                <p
                  className="text-white text-right uppercase font-normal leading-tight"
                  style={{
                    fontFamily: "'Roboto', 'Arial'",
                    fontSize: 'clamp(1.5rem, 4vw, 2.3rem)',
                    lineHeight: '1.2',
                    paddingBottom: '20px'
                  }}
                >
                  <b>Precision, Full - Fledged Intelligent Manufacturing Technology</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

