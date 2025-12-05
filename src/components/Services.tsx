const Services = () => {
  const services = [
    {
      title: "Factory Automation System",
      description: "ASF with its experience in providing automation solutions tailored to the needs of industry, develop various types of test, measurement & control.",
      bgColor: '#19396C', // Dark blue
      headingColor: 'text-yellow-400', // Yellow
      textColor: 'text-white', // White
      buttonStyle: 'border-white text-white hover:bg-white hover:text-[#19396C]'
    },
    {
      title: "Hydraulic & Pneumatic Solutions",
      description: "Utilising our knowledge and capabilities in low cost automation solutions, we provide advance and retrofit solutions to a variety of industrial installations.",
      bgColor: '#E5E5E5', // Light grey
      headingColor: 'text-[#19396C]', // Dark blue
      textColor: 'text-gray-700', // Dark grey
      buttonStyle: 'border-[#19396C] text-[#19396C] hover:bg-[#19396C] hover:text-white'
    },
    {
      title: "Industrial Internet of Things",
      description: "With vast experience in IOT, we design and implement end to end IIoT Solutions to help businesses eliminate waste, reduce manufacturing cycle time.",
      bgColor: '#19396C', // Dark blue
      headingColor: 'text-yellow-400', // Yellow
      textColor: 'text-white', // White
      buttonStyle: 'border-white text-white hover:bg-white hover:text-[#19396C]'
    }
  ]

  return (
    <section id="services" className="kc-elm kc-row w-full py-10 md:py-16">
      <div className="kc-row-container kc-container max-w-7xl mx-auto px-4 md:px-6">
        <div className="kc-wrap-columns w-full">
          <div className="kc-elm kc_col-sm-12 kc_column kc_col-sm-12 w-full">
            <div className="kc-col-container w-full">
              {/* Title Section */}
              <div className="kc-elm kc-title-wrap text-center mb-4">
                <h3 className="kc_title mb-3 text-3xl font-bold leading-tight text-[#FB0202] font-['Oswald',sans-serif]">
                  Services
                </h3>
              </div>

              {/* Divider Line */}
              <div className="kc-elm divider_line yline flex justify-center mb-6">
                <div className="divider_inner divider_line1 bg-yellow-400 h-1 w-16 md:w-20"></div>
              </div>

              {/* Introductory Text */}
              <div className="kc-elm kc_text_block text-center mb-10 md:mb-12">
                <p className="p1 text-gray-800 text-base md:text-lg leading-relaxed font-normal">
                  Center of Excellence in Automation Technologies offers consultation and services to develop and implement Low Cost Automated Solutions for upgrading & retrofitting manufacturing processes using tools like PLC/SCADA/DCS and deploying solution through<br className="hidden md:block" />
                  Hydraulic & Pneumatic Systems, IIOT solutions using Vision, RFID, ASI & Laser technologies.
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
                    <figure className="content-image mb-4">
                      <img 
                        src={index === 0 ? '/Images/factory.png' : index === 1 ? '/Images/Hydraulic.png' : '/Images/industrial.png'} 
                        alt={service.title}
                        className="w-16 h-16 object-contain"
                      />
                    </figure>
                    <h4 className={`text-xl md:text-2xl font-bold mb-4 font-['Oswald',sans-serif] ${service.headingColor}`}>
                      {service.title}
                    </h4>
                    <p className={`text-sm md:text-base mb-6 leading-relaxed flex-grow ${service.textColor}`}>
                      {service.description}
                    </p>
                    <div className="content-button">
                      <a 
                        href="https://rexroth.akgecskills.in/industrial-services/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block px-6 py-2 text-sm font-semibold rounded border-2 transition self-start ${service.buttonStyle}`}
                      >
                        Know More
                      </a>
                    </div>
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
