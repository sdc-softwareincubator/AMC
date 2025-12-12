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
            <a href="#" title="" target="_self">
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
      title: "Friction stir welding of 6063-T6 aluminum alloy",
      description: "The joining of aluminium should be done in such a way so as to minimize the stresses produced during joining. The joining of aluminum can be done by using welding. Welding used can be of many types' viz. Friction welding, Arc welding, spot welding",
      image: "/Images/Friction_1.jpg"
    },
    {
      title: "Friction stir processing",
      description: "With the advancement in technology and limited energy resources, now Manufacturing Industries are focusing more towards the material having better strength as compare to its weight and to reduce the material wastage industries are now demanding those processes",
      image: "/Images/Friction_2.jpg"
    },
    {
      title: "Model Based Approach for Enhancement of Machining Accuracy in Robotic Milling",
      description: "Implantation of various virtual and real time technical parameters so that there should not be any chance of error or accident so that the function can be performed easily and smoothly within a given time frame because the process need to be economic and feasible",
      image: "/Images/amc.jpg"
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
    <section id="projects" className="w-full py-10 md:py-16 bg-white relative overflow-hidden">
      <div className="mx-auto sm:my-6 my-3 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 max-w-screen">
        <div className="w-full">
          <div className="w-full">
            <div className="w-full">
              {/* Title Section */}
              <div className="text-center mb-4">
                <h3 className="mb-3 text-3xl font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
                  Projects
                </h3>
              </div>

              {/* Divider Line */}
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-400 h-1 w-16 md:w-20"></div>
              </div>

              {/* Introductory Text */}
              <div className="text-center mb-10 md:mb-12">
                <p className="p1 text-gray-800 text-base md:text-lg leading-relaxed font-normal">
                  The Centre undertake Industry projects in the field of CNC turning, milling and grinding technology with an aim of providing quality engineering solutions for the challenges faced by the Industries in the field of Manufacturing
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
