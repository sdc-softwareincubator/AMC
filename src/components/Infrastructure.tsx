import { useState, useEffect, useRef } from 'react'

interface InfrastructureCardProps {
  image: string
  title: string
  description: string
}

const InfrastructureCard = ({ image, title, description }: InfrastructureCardProps) => {
  return (
    <div className="flex-shrink-0 w-full md:w-1/3 px-3 md:px-4">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
        {/* Image Container with Title Overlay */}
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          {/* Title Overlay - Black bar at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 px-4 py-3">
            <h4 className="text-white text-base md:text-lg font-bold font-['Oswald',sans-serif]">
              {title}
            </h4>
          </div>
          {/* Icon in top right corner */}
          <a 
            href="#"
            className="absolute top-4 right-4 bg-gray-600 bg-opacity-80 hover:bg-opacity-100 p-2 rounded transition"
            title="View Details"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        
        {/* Description Text */}
        <div className="p-4 md:p-6">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

const Infrastructure = () => {
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const infrastructureItems = [
    {
      title: "CNC Vertical Machining Centre - 4 Axis",
      description: "CNC Milling machine for high speed and high precision machining operations with Siemens 828D controller, equipped with rotary table as 4th axis and robot integration features.",
            image: "/Images/amc_5.jpg"
    },
    {
      title: "Slant Bed CNC Lathe (LT-16)",
      description: "Slant bed CNC Lathe is an high-performance turning center equipped with 8 station Bi-directional tool turret, Siemens 828D controller and robot integration features.",
            image: "/Images/amc_9.jpg"
    },
    {
      title: "Robotic Milling - 7 Axis",
      description: "It offers six axis machining ability to machine complex shapes in a single set-up. This gives greater machining productivity compared to performing",
            image: "/Images/amc_8.jpg"
    },
    {
      title: "CNC Drill Tap Machining Centre",
      description: "Vertical Machining Center (VMC) is kept for educational & Industrial purpose and for machining parts in every industrial field to achieve high productivity",
            image: "/Images/amc_2.jpg"
    },
    {
      title: "CNC Lathe (TUTOR)",
      description: "Compact CNC turning machine specially designed & developed for educational & Industrial purpose and for manufacturing Precision Parts capable of cutting",
            image: "/Images/amc_3.jpg"
    },
    {
      title: "Cylindrical Grinding Machine",
      description: "It is an automatic, high precision Universal Hydraulic Cylindrical Grinding Machine for External, Internal or Face grinding of large or heavy components in small to medium",
            image: "/Images/amc_7.jpg"
    },
    {
      title: "TAP SMART CNC Electric Tapping Machine",
      description: "Tap Smart is Flexible arm CNC servo electric tapping machine. Tap Smart's Flexible arm ensure easy hole location and take centre of hole automatically",
            image: "/Images/amc_10.jpg"
    },
    {
      title: "3D CNC Coordinate Measuring Machine",
      description: "It is installed for flexible, reliable and uncompromising quality assurance in Reverse Engineering to achieve most sophisticated highly precise quality",
            image: "/Images/amc.jpg"
    },
    {
      title: "3D Scanning with Blue LED Fringe Projection ZEISS COMET",
      description: "The innovative sensor system is extremely compact and light, meaning you can transport it to different application sites without any difficulty.",
            image: "/Images/amc_1.jpg"
    },
    {
      title: "Contour Measuring Machine",
      description: "The SURFCOM NEX 030 is a flexible CNC contour measuring station, to provide outstanding straightness accuracy in the X axis. Contour measuring jobs",
            image: "/Images/amc_6.jpg"
    },
    {
      title: "Vision Measurement Machine",
      description: "These are equipped with high quality CCD, powerful 2D measuring software and computer. The machine can measure various workpiece such as electronic components",
            image: "/Images/amc_11.jpg"
    },
    {
      title: "CNC Surface Rough Measuring Machine",
      description: "SURFCOM FLEX 50A is used to analyze surface parameters in production, incoming goods and final inspection. It is optimally suited for usage in the automotive industry",
            image: "/Images/amc_4.jpg"
    }
  ]

  useEffect(() => {
    const numVisibleCards = 3
    const totalCards = infrastructureItems.length 
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
  }, [infrastructureItems.length])

  return (
    <section id="infrastructure" className="kc-elm kc-row w-full py-10 md:py-16 bg-gray-50 relative overflow-hidden">
      <div className="kc-row-container kc-container max-w-7xl mx-auto px-4 md:px-6">
        <div className="kc-wrap-columns w-full">
          <div className="kc-elm kc_col-sm-12 kc_column kc_col-sm-12 w-full">
            <div className="kc-col-container w-full">
              {/* Title Section */}
              <div className="kc-elm kc-title-wrap text-center mb-4">
                <h3 className="kc_title mb-3 text-3xl font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
                  Infrastructure
                </h3>
              </div>

              {/* Divider Line */}
              <div className="kc-elm divider_line yline flex justify-center mb-6">
                <div className="divider_inner divider_line1 bg-yellow-400 h-1 w-16 md:w-20"></div>
              </div>

              {/* Introductory Text */}
              <div className="kc-elm kc_text_block text-center mb-10 md:mb-12">
                <p className="p1 text-gray-800 text-base md:text-lg leading-relaxed font-normal">
                  The Centre is having world class infrastructure and facilities comprising of CNC Machine and Robotic Tools, Specialised<br className="hidden md:block" />
                  Machining Processes and high end Measurement & Metrology setup
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
                  {infrastructureItems.map((item, index) => (
                    <InfrastructureCard
                      key={`original-${index}`}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                  {/* Duplicate cards for seamless loop */}
                  {infrastructureItems.map((item, index) => (
                    <InfrastructureCard
                      key={`duplicate-${index}`}
                      image={item.image}
                      title={item.title}
                      description={item.description}
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

export default Infrastructure
