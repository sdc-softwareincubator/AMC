import { useState, useEffect, useRef } from 'react'

interface SuccessStoryCardProps {
  image: string
  name: string
  position: string
  email: string
}

const SuccessStoryCard = ({ image, name, position, email }: SuccessStoryCardProps) => {
  return (
    <div className="flex-shrink-0 w-full md:w-1/4 px-3 md:px-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center">
        {/* Image */}
        <div className="mb-0">
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>
        {/* Dark Gray Background for Text */}
        <div className="bg-gray-700 p-4">
          <h4 className="text-white text-base md:text-lg font-bold mb-2 font-['Oswald',sans-serif]">
            {name}
          </h4>
          <p className="text-white text-sm mb-2">
            {position}
          </p>
          <p className="text-yellow-400 text-xs">
            {email}
          </p>
        </div>
      </div>
    </div>
  )
}

const SuccessStories = () => {
  const [translateX, setTranslateX] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const successStories = [
    {
      name: "Vishal Joshi",
      position: "Service Engineer, Yaskawa India",
      email: "97vishaljoshi@gmail.com",
      image: "/Images/Vishal.jpg"
    },
    {
      name: "Yash Bhargava",
      position: "Executive Engineer, Torrent Gas",
      email: "yashb.speed16@gmail.com",
      image: "/Images/yash.jpg"
    },
    {
      name: "Swatantra Singh",
      position: "Sr. Adaptation, G+D Currency",
      email: "sw8ntr@gmail.com",
      image: "/Images/ss.jpg"
    },
    {
      name: "Shubham Jain",
      position: "Application, Nmtronics India",
      email: "sjshubham38@gmail.com",
      image: "/Images/Shubham.jpg"
    },
    {
      name: "Ankur Saini",
      position: "Engineer, Power Mech Project Ltd",
      email: "ankureee31@gmail.com",
      image: "/Images/ankur.jpg"
    },
    {
      name: "Prashant Singh Parihar",
      position: "Electrical (TRD), Indian Railways",
      email: "pacethakur786@gmail.com",
      image: "/Images/Prashant.jpg"
    },
    {
      name: "Shubham kumar Prajapat",
      position: "Junior Engineer, Epiroc mining",
      email: "shukumar14@gmail.com",
      image: "/Images/Prajapat.jpg"
    },
    {
      name: "Rohan Kanchan",
      position: "Engineer, TATA Elxsi",
      email: "rohankanchan2013@gmail.com",
      image: "/Images/rohan.jpg"
    },
    {
      name: "Anuj Kumar Gupta",
      position: "Assistant Manager, Mahindra Ltd",
      email: "anuj.gupta862@gmail.com",
      image: "/Images/anuj.jpg"
    },
    {
      name: "Apoorv Saxena",
      position: "Application, B&R Industrial",
      email: "apoorv.saxena02@gmail.com",
      image: "/Images/apoorv.jpg"
    },
    {
      name: "Vrinatri Velentina Boro",
      position: "PG, Robotics and Automation",
      email: "vrinatri.him@gmail.com",
      image: "/Images/Vrinatri.jpg"
    },
    {
      name: "RETIKA SINGH",
      position: "JUNIOR RESEARCH, CSIR-CSIO",
      email: "singhretika26@gmail.com",
      image: "/Images/RETIKA.jpg"
    }
  ]

  // Group stories into pages of 4
  const storiesPerPage = 4
  const totalPages = Math.ceil(successStories.length / storiesPerPage)

  useEffect(() => {
    const maxTranslateX = (totalPages - 1) * 100
    
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const next = prev + 100
        if (next > maxTranslateX) {
          setCurrentPage(0)
          return 0
        }
        const newPage = Math.floor(next / 100)
        setCurrentPage(newPage)
        return next
      })
    }, 4000) 
    return () => clearInterval(interval)
  }, [totalPages])

  // Group stories into pages
  const storyPages = []
  for (let i = 0; i < successStories.length; i += storiesPerPage) {
    storyPages.push(successStories.slice(i, i + storiesPerPage))
  }

  return (
    <section id="success-stories" className="kc-elm kc-row w-full py-10 md:py-16 bg-gray-200/70">
      <div className="kc-row-container kc-container max-w-7xl mx-auto px-4 md:px-6">
        <div className="kc-wrap-columns w-full">
          <div className="kc-elm kc_col-sm-12 kc_column kc_col-sm-12 w-full">
            <div className="kc-col-container w-full">
              {/* Title Section */}
              <div className="kc-elm kc-title-wrap text-center mb-4">
                <h3 className="kc_title mb-3 text-3xl font-bold leading-tight text-[#FB0202] font-['Oswald',sans-serif]">
                  Success Stories
                </h3>
              </div>

              {/* Divider Line */}
              <div className="kc-elm divider_line yline flex justify-center mb-6">
                <div className="divider_inner divider_line1 bg-yellow-400 h-1 w-16 md:w-20"></div>
              </div>

              {/* Introductory Text */}
              <div className="kc-elm kc_text_block text-center mb-10 md:mb-12">
                <p className="p1 text-gray-800 text-base md:text-lg leading-relaxed font-normal">
                  Most of our trainees land into their dream jobs and get placed soon after their tenure or graduation. Checkout how these<br className="hidden md:block" />
                  benefitted students share their Success stories with us.
                </p>
              </div>

              {/* Carousel Container */}
              <div className="relative overflow-hidden mb-6">
                <div 
                  ref={carouselRef}
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${translateX}%)`
                  }}
                >
                  {/* Render pages */}
                  {storyPages.map((page, pageIndex) => (
                    <div key={pageIndex} className="flex-shrink-0 w-full flex">
                      {page.map((story, index) => (
                        <SuccessStoryCard
                          key={`page-${pageIndex}-${index}`}
                          image={story.image}
                          name={story.name}
                          position={story.position}
                          email={story.email}
                        />
                      ))}
                    </div>
                  ))}
                  {/* Duplicate pages for seamless loop */}
                  {storyPages.map((page, pageIndex) => (
                    <div key={`duplicate-${pageIndex}`} className="flex-shrink-0 w-full flex">
                      {page.map((story, index) => (
                        <SuccessStoryCard
                          key={`duplicate-page-${pageIndex}-${index}`}
                          image={story.image}
                          name={story.name}
                          position={story.position}
                          email={story.email}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setTranslateX(index * 100)
                      setCurrentPage(index)
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentPage === index ? 'bg-black' : 'bg-gray-400'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
