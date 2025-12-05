import { useState, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import type { FormEvent } from 'react'

const Hero = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
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
      {/* Second Row: Government Logos and Action Buttons - Mobile/Tablet Only */}
      <div className="lg:hidden bg-white mt-6 border-b border-gray-200">
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

      <section className="kc-elm kc-row w-full">
      <div className="kc-row-container w-full">
        <div className="kc-wrap-columns w-full">
          <div className="kc-elm kc_col-sm-12 kc_column kc_col-sm-12 w-full">
            <div className="kc-col-container w-full">
              <div className="widget widget_smartslider3 kc-elm relative w-full">
                <div className="n2-section-smartslider" role="region" aria-label="Slider">
                  <div className="n2-ss-align n2-ss-align-visible w-full">
                    <div className="n2-padding w-full">
                      <div 
                        id="n2-ss-1" 
                        className="n2-ss-slider n2-ow n2-has-hover n2-ss-load-fade w-full text-base"
                      >
                        <div className="n2-ss-slider-1 n2-ss-swipe-element n2-ow relative w-full h-[500px] md:h-[550px]">
                          <div className="n2-ss-slider-2 n2-ow relative w-full h-full">
                            <div className="n2-ss-slider-3 n2-ow relative w-full h-full overflow-hidden">
                              {/* Background Image with Overlay */}
                              <div className="n2-ss-slide-backgrounds absolute left-0 top-0 w-full h-full z-0">
                                <div className="n2-ss-slide-background n2-ow absolute left-0 top-0 w-full h-full">
                                  <div 
                                    className="n2-ss-slide-background-wrap n2-ow absolute left-0 top-0 w-full h-full bg-black bg-no-repeat"
                                    style={{
                                      backgroundImage: 'url("/Images/Front-pic.jpg")',
                                      backgroundSize: 'cover',
                                      backgroundPosition: 'center center'
                                    }}
                                  >
                                    {/* Dark Overlay */}
                                    <div 
                                      className="absolute inset-0"
                                      style={{ 
                                        backgroundColor: 'rgba(0, 0, 0, 0.49)'
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>

                              {/* Content Layer */}
                              <div 
                                className="n2-ss-slide n2-ss-canvas n2-ow n2-ss-slide-active absolute left-0 top-0 w-full h-full z-30"
                              >
                                <div 
                                  className="n2-ss-layers-container n2-ow relative w-full h-full flex items-center justify-end pr-4 md:pr-8 m-0"
                                >
                                  <div 
                                    className="n2-ss-layer n2-ow relative overflow-visible text-base max-w-[1180px] w-full p-2.5"
                                  >
                                    <div 
                                      className="n2-ss-section-main-content n2-ss-layer-content n2-ow relative p-2.5 align-middle"
                                    >
                                      <div 
                                        className="n2-ss-layer n2-ow relative m-0 max-w-[1180px] overflow-visible w-full p-2.5"
                                      >
                                        <div 
                                          className="n2-ss-layer-row relative p-2.5"
                                        >
                                          <div 
                                            className="n2-ss-layer-row-inner relative"
                                            style={{ width: 'calc(100% + 21px)', margin: '-10px' }}
                                          >
                                            <div 
                                              className="n2-ss-layer n2-ow n2-ss-last-in-row relative max-w-[1165px] w-full m-2.5 overflow-visible"
                                            >
                                              <div 
                                                className="n2-ss-layer-col n2-ss-layer-content relative flex justify-end p-2.5"
                                              >
                                                <div 
                                                  className="n2-ss-layer n2-ow relative flex justify-end w-full m-0 max-w-[720px] overflow-visible ml-auto"
                                                >
                                                  <div className="n2-ss-item-content n2-ow text-right w-full">
                                                    <p 
                                                      className="n2-font-paragraph n2-style-heading n2-ow text-white text-right uppercase font-normal leading-tight"
                                                      style={{
                                                        fontFamily: "'Roboto', 'Arial'",
                                                        fontSize: 'clamp(1.5rem, 4vw, 2.3rem)',
                                                        lineHeight: '1.2',
                                                        fontWeight: '400',
                                                        letterSpacing: 'normal',
                                                        wordSpacing: 'normal',
                                                        paddingBottom: '20px',
                                                        textAlign: 'right'
                                                      }}
                                                    >
                                                      <b>Precision, Full - Fledged Intelligent Manufacturing Technology</b>
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero

