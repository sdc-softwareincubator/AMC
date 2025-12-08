const Services = () => {
  const services = [
    {
      title: "Dimensional Testing and Calibration",
      description: "ASF offers Dimensional Testing & Calibration Services from NABL accredited facility to ensure reliable, precise, traceable measurement results from the measuring instruments.",
      bgColor: '#19396C', // Dark blue
      headingColor: 'text-yellow-400', // Yellow
      textColor: 'text-white', // White
      buttonStyle: 'border-white text-white hover:bg-white hover:text-[#19396C]'
    },
    {
      title: "Coordinate Measurement (CMM)",
      description: "Zeiss make, Coordinate Measuring Machine (CMM) at ASF is installed to precisely measure countless critical components with complex shape and complicated drawing indications.",
      bgColor: '#E5E5E5', // Light grey
      headingColor: 'text-[#19396C]', // Dark blue
      textColor: 'text-gray-700', // Dark grey
      buttonStyle: 'border-[#19396C] text-[#19396C] hover:bg-[#19396C] hover:text-white'
    },
    {
      title: "3D Scanning",
      description: "Zeiss make high precision 3 D scanner is available to collect and measure millions of coordinates / data points on the surface of an object with high degree of accuracy to fulfill the need.",
      bgColor: '#19396C', // Dark blue
      headingColor: 'text-yellow-400', // Yellow
      textColor: 'text-white', // White
      buttonStyle: 'border-white text-white hover:bg-white hover:text-[#19396C]'
    }
  ]

  return (
    <section id="services" className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="w-full">
          <div className="w-full">
            <div className="w-full">
              {/* Title Section */}
              <div className="text-center mb-4">
                <h3 className="mb-3 text-3xl font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
                  Services
                </h3>
              </div>

              {/* Divider Line */}
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-400 h-1 w-16 md:w-20"></div>
              </div>

              {/* Introductory Text */}
              <div className="text-center mb-10 md:mb-12">
                <p className="p1 text-gray-800 text-base md:text-lg leading-relaxed font-normal">
                  The Centre is committed to provide solutions for production of complex parts and assemblies to the industries using high end engineering technologies for improving the quality, productivity and competitiveness in the field of Machining, Dimension Measurement and Inspection technology.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow min-h-[300px] flex flex-col"
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <h4 className={`text-xl md:text-2xl font-bold mb-4 font-['Oswald',sans-serif] ${service.headingColor}`}>
                      {service.title}
                    </h4>
                    <p className={`text-sm md:text-base mb-6 leading-relaxed flex-grow ${service.textColor}`}>
                      {service.description}
                    </p>
                    <a
                      href="#"
                      className={`inline-block px-6 py-2 text-sm font-semibold rounded border-2 transition self-start ${service.buttonStyle}`}
                    >
                      Know More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
