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
          {/* Icon in bottom right corner */}
          <a 
            href="#"
            className="absolute bottom-4 right-4 bg-gray-600 bg-opacity-80 hover:bg-opacity-100 p-2 rounded transition"
            title="View Details"
          >
            <img src="/Images/infra-1.png" alt="View Details" className="w-6 h-6" />
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
      title: "Hydraulic Trainer",
      description: "Hydraulic trainer facilitates learning of various concepts of Industrial Hydraulics, ranging from Basic to Mobile Hydraulics.",
      image: "/Images/Hydraulic.jpg"
    },
    {
      title: "Pneumatic Trainer",
      description: "This introduces you to the basic principles, laws and components used in pneumatic technology.",
      image: "/Images/Pneumatic.jpg"
    },
    {
      title: "Programmable Logic Controller",
      description: "Industrial controllers like PLC are those that continuously monitors the state of input devices and control the state of output devices.",
      image: "/Images/Programmable.jpg"
    },
    {
      title: "Mechatronics Trainer",
      description: "Mechatronics trainer combines the automation technologies and facilitates learning of product processing and product assembly in a realtime environment.",
      image: "/Images/Mechatronics.jpg"
    },
    {
      title: "Industrial Sensorics Trainer",
      description: "Sensorics trainer, fitted with Pepperl & Fuchs industrial sensors, provides an opportunity to gain specialized technical knowledge on sensors.",
      image: "/Images/Sensorics.jpg"
    },
    {
      title: "Motion Controller",
      description: "2 Axis Motion Controller facilitates learning of motion control with PLC functions to produce motion proportional to the command signal.",
      image: "/Images/Motion.jpg"
    },
    {
      title: "CNC Simulator",
      description: "CNC Simulator enables simulation of a CNC control system on a PC and facilitates learning of CNC operations & programming.",
      image: "/Images/CNC.jpg"
    },
    {
      title: "WinStudio - SCADA",
      description: "WinStudio-SCADA is a innovative visualization module software framework for integrated engineering and user-friendly operation.",
      image: "/Images/WinStudio.jpg"
    },
    {
      title: "Industry 4.0 Kit",
      description: "Industry 4.0 Kit is a demonstration kit for the Industrial Internet of Things (IIoT), facilitates learning of basic architecture of IoT.",
      image: "/Images/Industry.jpg"
    },
    {
      title: "Automation Studio",
      description: "Automation Studio is a circuit design, simulation and project documentation software which facilitates the learning on a virtual platform.",
      image: "/Images/Automation.jpg"
    },
    {
      title: "Pumps and Valves",
      description: "Cut Section Models from BOSCH Rexroth facilitates learning of Internal constructional features of Pumps and valves.",
      image: "/Images/pumps.jpg"
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
                <h3 className="kc_title mb-3 text-3xl font-bold leading-tight text-[#FB0202] font-['Oswald',sans-serif]">
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
                  The Center of Excellence in Automation Technologies houses state of art equipment in Industrial-Pneumatics, Industrial-Hydraulics, Sensorics, Industrial Control & Drives, IIoT and Automation Studio.
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
