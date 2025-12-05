import { useState, useEffect, useRef } from 'react'

interface ProjectCardProps {
  image: string
  title: string
  description: string
}

const ProjectCard = ({ image, title, description }: ProjectCardProps) => {
  return (
    <div className="flex-shrink-0 w-full md:w-1/3 px-3 md:px-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          {/* Dark Gray Overlay with Title */}
          <div className="absolute bottom-0 left-0 right-0 bg-black opacity-80 p-3">
            <h3 className="text-white text-sm md:text-base font-semibold leading-tight font-['Oswald',sans-serif]">
              {title}
            </h3>
          </div>
        </div>
        
        {/* Light Gray Section with Description */}
        <div className="bg-gray-200/80 p-4 relative min-h-[120px] rounded-b-lg">
          <div className="space-y-2 pr-8 mb-4">
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
              {description}
            </p>
          </div>
          {/* Icon at bottom */}
          <div className="mt-4 pt-4 border-t border-gray-300">
            <a href="#" title="" target="_blank" rel="noopener noreferrer">
              <img
                src="/Images/infra-1.png"
                alt="Infrastructure" 
                className="h-8 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "AUTOMATED INVENTORY MANAGEMENT SYSTEM",
      description: "The basic idea is to implement concepts of INDUSTRY 4.0 in manufacturing and making inventory management smarter and intelligent.",
      image: "/Images/INVENTORY.jpg"
    },
    {
      title: "SMART INSPECTION BASED SORTING SYSTEM (SIBSS)",
      description: "SIBSS has a vision sensor and AS-I system, and data is shared on a web server for the implementation of Industrial IoT.",
      image: "/Images/SMART.jpg"
    },
    {
      title: "IIoT BASED INTEGRATED PACKAGING SYSTEM",
      description: "To implement the automated industrial packaging of boxes that can do faster and safer packaging of products.",
      image: "/Images/IIoT.jpg"
    },
    {
      title: "PROSTHETIC ARM USING EMG SENSOR",
      description: "A Prosthetic Arm is an artificial device that is used as an aid to people to perform various actions of the forearm.",
      image: "/Images/PROSTHETIC.jpg"
    },
    {
      title: "AUTOMATIC DISPENSING SYSTEM USING IoT AND ELECTRO-PNEUMATICS",
      description: "An effort to propel the industry further towards better productivity and efficient resource management.",
      image: "/Images/DISPENSING.jpg"
    },
    {
      title: "IoT COLOR BASED PRODUCT SORTING MACHINE",
      description: "Color-Based Object Sorting System is used to detects the image of an object and sort it based on color.",
      image: "/Images/COLOR.jpg"
    },
    {
      title: "SELF GUIDED RETRIEVAL SYSTEM",
      description: "It is an automatic guided vehicle, which is a mobile robot that uses vision, magnets, or lasers for navigation.",
      image: "/Images/RETRIEVAL.jpg"
    }
  ]

  useEffect(() => {
    const numVisibleCards = 3
    const totalCards = projects.length 
    const cardWidthPercentage = 100 / numVisibleCards
    const maxTranslateX = (totalCards - numVisibleCards) * cardWidthPercentage 
    
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const next = prev + cardWidthPercentage
        if (next > maxTranslateX) {
          return 0
        }
        return next
      })
    }, 4000) 
    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <section id="projects" className="kc-elm kc-row w-full py-10 md:py-16 bg-white relative overflow-hidden">
      <div className="kc-row-container kc-container max-w-7xl mx-auto px-4 md:px-6">
        <div className="kc-wrap-columns w-full">
          <div className="kc-elm kc_col-sm-12 kc_column kc_col-sm-12 w-full">
            <div className="kc-col-container w-full">
              {/* Title Section */}
              <div className="kc-elm kc-title-wrap text-center mb-4">
                <h3 className="kc_title mb-3 text-3xl font-bold leading-tight text-[#FB0202] font-['Oswald',sans-serif]">
                  Projects
                </h3>
              </div>

              {/* Divider Line */}
              <div className="kc-elm divider_line yline flex justify-center mb-6">
                <div className="divider_inner divider_line1 bg-yellow-400 h-1 w-16 md:w-20"></div>
              </div>

              {/* Introductory Text */}
              <div className="kc-elm kc_text_block text-center mb-10 md:mb-12">
                <p className="p1 text-gray-800 text-base md:text-lg leading-relaxed font-normal">
                  The center enables trainees from different streams of engineering to design solutions to industrial automation requirements and carry<br className="hidden md:block" />
                  out research/projects by integrating different fields of engineering like mechanical, electrical, electronics,<br className="hidden md:block" />
                  instrumentation and information technologies.
                </p>
              </div>

              {/* Carousel Container */}
              <div className="relative overflow-hidden">
                <div 
                  ref={carouselRef}
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${translateX}%)`
                  }}
                >
                  {/* Original cards */}
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={`original-${index}`}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                    />
                  ))}
                  {/* Duplicate cards for seamless loop */}
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={`duplicate-${index}`}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
