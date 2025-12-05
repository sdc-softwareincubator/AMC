interface ProgramCardProps {
  type: string
  title: string
  details: string
  duration: string
  imageUrl: string
}

const ProgramCard = ({ type, title, details, duration, imageUrl }: ProgramCardProps) => {
  return (
    <div className="rc-CourseCard group relative overflow-hidden h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
      <div className="relative h-48 bg-white overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-[30px] bg-[#19396C]"
          style={{ clipPath: 'polygon(0 100%, 100% 0%, 100% 100%, 0% 100%)' }}
        ></div>
      </div>
      
      <div className="bg-[#19396C] p-5 min-h-[180px] flex flex-col">
        <h3 className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2 font-['Oswald',sans-serif]">
          {type}
        </h3>
        
        <h4 className="text-white text-lg md:text-xl font-bold leading-tight mb-3 font-['Oswald',sans-serif]">
          {title}
        </h4>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-3 flex-grow">
          {details}
        </p>
        
        <p className="text-gray-300 text-sm font-medium">
          {duration}
        </p>
      </div>
    </div>
  )
}

const Training = () => {
  return (
    <section id="training" className="kc-elm kc-row w-full py-10 md:py-16 bg-gray-200/70">
      <div className="kc-row-container kc-container max-w-7xl mx-auto px-4 md:px-6">
        <div className="kc-wrap-columns w-full">
          <div className="kc-elm kc_col-sm-12 kc_column kc_col-sm-12 w-full">
            <div className="kc-col-container w-full">
              {/* Title Section */}
              <div className="kc-elm kc-title-wrap text-center mb-4">
                <h3 className="kc_title mb-3 text-3xl font-bold leading-tight text-[#FB0202] font-['Oswald',sans-serif]">
                  Training Programs
                </h3>
              </div>

              {/* Divider Line */}
              <div className="kc-elm divider_line yline flex justify-center mb-6">
                <div className="divider_inner divider_line1 bg-yellow-400 h-1 w-16 md:w-20"></div>
              </div>

              {/* Introductory Text */}
              <div className="kc-elm kc_text_block text-center mb-10 md:mb-12 max-w-4xl mx-auto">
                <p className="text-gray-800 text-sm md:text-base leading-tight font-normal">
                  The Center of Excellence in Automation Technologies offers training programs on various hardware, i.e. Industrial Hydraulics, Pneumatics, PLC, Mechatronics, Sensorics etc. These training programs are intended to train the B.Tech, M.Tech, Diploma Students<br className="hidden md:block" />
                  of all disciplines at par with BOSCH Rexroth International standard.
                </p>
              </div>

              {/* Program Cards - Top Row */}
              <div className="kc-elm kc_row kc_row_inner flex flex-col md:flex-row -mx-3 md:-mx-4 mb-4 md:mb-6">
                {/* Card 1 - Training */}
                <div className="kc-elm kc_col-sm-3 kc_column_inner kc_col-sm-3 w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="widget widget_wpb_widget kc-elm">
                      <ProgramCard
                        type="Training"
                        title="Programmable Logic Controller"
                        details="Basic | Advance"
                        duration="One Week Program"
                        imageUrl="/Images/1.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 2 - Industrial Training Program - Special Card */}
                <div className="kc-elm kc_col-sm-6 kc_column_inner kc_col-sm-6 w-full md:w-1/2 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="widget widget_wpb_widget kc-elm">
                      <div
                        className="relative overflow-hidden rounded-lg shadow-md h-full min-h-[370px] flex flex-col justify-end p-6"
                        style={{
                          backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%), url("/Images/2.jpg")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <div className="absolute top-4 left-4">
                          <img
                            src="/Images/bosch_logo.jpg"
                            alt="Bosch Rexroth Logo"
                            className="h-10 w-auto drop-shadow"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none'
                            }}
                          />
                        </div>
                        <div className="space-y-3 text-gray-800 relative z-10">
                          <h3 className="text-yellow-400 text-xs font-bold uppercase tracking-wider font-['Oswald',sans-serif]">
                            Industrial Training Program
                          </h3>
                          <h4 className="text-gray-800 text-xl font-semibold leading-tight font-['Oswald',sans-serif]">
                            Integrated Automation Technologies
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Hydraulics | Pneumatics | PLC | SCADA
                          </p>
                          <p className="text-gray-700 text-sm font-medium">
                            Six Weeks Summer Program for Engineering Students
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Workshop */}
                <div className="kc-elm kc_col-sm-3 kc_column_inner kc_col-sm-3 w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="widget widget_wpb_widget kc-elm">
                      <ProgramCard
                        type="Workshop"
                        title="Automation Technologies"
                        details="PLC | SCADA | DCS"
                        duration="One Day Program for Beginners"
                        imageUrl="/Images/3.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Cards - Bottom Row */}
              <div id="bluebgcontainer" className="kc-elm kc_row kc_row_inner flex flex-col md:flex-row -mx-3 md:-mx-4">
                {/* Card 4 - Training */}
                <div className="kc-elm kc_col-sm-3 kc_column_inner kc_col-sm-3 w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="widget widget_wpb_widget kc-elm">
                      <ProgramCard
                        type="Training"
                        title="Automation Technologies"
                        details="Basic | Intermediate | Advance"
                        duration="Two Weeks Program"
                        imageUrl="/Images/auto_2.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 5 - On-Site Training */}
                <div className="kc-elm kc_col-sm-3 kc_column_inner kc_col-sm-3 w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="widget widget_wpb_widget kc-elm">
                      <ProgramCard
                        type="On-Site Training"
                        title="Automation Technologies"
                        details="Hydraulics | Pneumatics | Drives & Control"
                        duration="Three Days Program for Industry"
                        imageUrl="/Images/5.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 6 - Industrial Internship */}
                <div className="kc-elm kc_col-sm-3 kc_column_inner kc_col-sm-3 w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="widget widget_wpb_widget kc-elm">
                      <ProgramCard
                        type="Industrial Internship"
                        title="Industrial Automation"
                        details="Design | Programming | Application"
                        duration="Six Months Program for Students"
                        imageUrl="/Images/auto-1.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 7 - Training */}
                <div className="kc-elm kc_col-sm-3 kc_column_inner kc_col-sm-3 w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="widget widget_wpb_widget kc-elm">
                      <ProgramCard
                        type="Training"
                        title="Industrial Sensorics"
                        details="RFID | Vision | Ultrasonic | Photoelectric"
                        duration="One Week Program for Engineers"
                        imageUrl="/Images/7.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Training
