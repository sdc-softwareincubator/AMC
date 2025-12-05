import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

const Gallery = () => {
  const galleryImages = [
    "/Images/18.jpg",
    "/Images/19.jpg",
    "/Images/20.jpg",
    "/Images/21.jpg",
    "/Images/22.jpg",
    "/Images/23.jpg",
    "/Images/24.jpg",
    "/Images/25.jpg",
    "/Images/26.jpg"
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const [paused, setPaused] = useState(false)
  const imagesPerPage = 3
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage)

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, 4000)
    return () => clearInterval(interval)
  }, [totalPages, paused])

  const start = currentPage * imagesPerPage
  const visibleImages = galleryImages.slice(start, start + imagesPerPage)

  const newsItems = [
    {
      title: "TECHNOVATION 2018 – 30th August, 2018",
      date: "June 20, 2019",
      link: "#"
    },
    {
      title: "Specialized Training/ Boot Camp For INDIA SKILLS Participants at AKGEC",
      date: "June 20, 2019",
      link: "#"
    },
    {
      title: "AKGEC Won Advance Robotics Challenge : 15-16th September, 2018",
      date: "June 20, 2019",
      link: "#"
    }
  ]

  return (
    <section id="gallery" className="kc-elm kc-row w-full py-10 md:py-16 bg-white">
      <div className="kc-row-container kc-container max-w-7xl mx-auto px-4 md:px-6">
        <div className="kc-wrap-columns w-full">
          <div className="kc-elm kc_col-sm-12 kc_column kc_col-sm-12 w-full">
            <div className="kc-col-container w-full">
              {/* Two Column Layout: Gallery Left, News Right */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
                {/* Left Column - Photo Gallery (2/3 width) */}
                <div className="lg:col-span-2">
                  {/* Title Section */}
                  <div className="kc-elm kc-title-wrap mb-4">
                    <h3 className="kc_title mb-3 text-3xl font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
                      Photo Gallery
                    </h3>
                  </div>

                  {/* Divider Line */}
                  <div className="kc-elm divider_line yline mb-6">
                    <div className="divider_inner divider_line1 bg-yellow-400 h-1 w-16 md:w-20"></div>
                  </div>

                  {/* Introductory Text */}
                  <div className="kc-elm kc_text_block mb-6 md:mb-8">
                    <p className="p1 text-gray-800 text-base md:text-lg leading-relaxed font-normal">
                      The trainees enjoy comfortable stay with 24 hours power back up & unlimited Internet facility including nutritious food on payment basis.The facility is endowed with good lighting and sufficient ventilation.
                    </p>
                  </div>

                  {/* Slideable Gallery */}
                  <div
                    className="w-full"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      {visibleImages.map((image, index) => (
                        <div 
                          key={`${currentPage}-${index}`}
                          className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                        >
                          <img 
                            src={image} 
                            alt={`Gallery Image ${start + index + 1}`}
                            className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none'
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mb-6">
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            currentPage === index ? 'bg-gray-800' : 'bg-gray-300'
                          }`}
                          aria-label={`Go to page ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center">
                      <a 
                        href="#"
                        className="inline-block px-6 py-2 text-sm border-2 border-yellow-400 text-yellow-600 rounded-md hover:bg-yellow-400 hover:text-white transition-all duration-300 font-medium"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column - Latest News (1/3 width) */}
                <div className="lg:col-span-1">
                  {/* Latest News Card - aligned with gallery images using top margin */}
                  <aside 
                    className="w-full lg:mt-[140px]"
                    style={{ 
                      backgroundColor: '#19396C', 
                      color: '#ffffff',
                      padding: '15px',
                      paddingBottom: '20px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h2 style={{ 
                        color: '#ffffff',
                        fontSize: '18px',
                        marginBottom: '0px',
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 500,
                        lineHeight: 1.2
                      }}>Latest News</h2>
                      <a 
                        href="#" 
                        className="px-3 py-1 text-xs border border-white text-white rounded-md hover:bg-white hover:text-[#19396C] transition-all duration-300 font-medium"
                      >
                        All News
                      </a>
                    </div>
                    
                    <div className="space-y-3">
                      {newsItems.map((item, index) => (
                        <div 
                          key={index}
                          className={index < newsItems.length - 1 ? "border-b border-white/30 pb-3" : ""}
                        >
                          <h3 className="mb-1.5">
                            <a 
                              href={item.link}
                              style={{
                                display: 'block',
                                color: '#5ebfee',
                                fontFamily: 'Source Sans Pro, sans-serif',
                                fontSize: '13px',
                                fontWeight: 600,
                                transition: 'all .3s ease 0s',
                                textDecoration: 'none',
                                lineHeight: '1.4'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            >
                              {item.title}
                            </a>
                          </h3>
                          <div className="flex items-center text-xs text-white/80">
                            <Clock size={12} className="mr-1.5" />
                            <time dateTime={item.date}>{item.date}</time>
                          </div>
                        </div>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
