interface ProgramCardProps {
  type: string
  title: string
  details: string
  duration: string
  logo?: boolean
  imageUrl: string
}

const ProgramCard = ({ type, title, details, duration, logo = false, imageUrl }: ProgramCardProps) => {
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
                <h3 className="kc_title mb-3 text-3xl font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
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
                  The Centre offers following training programs as per International didactic concepts to produce highly skilled technical workforce<br className="hidden md:block" />
                  as per industry requirements in the field of Manufacturing
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
                        title="Industrial Measurement"
                        details="Basic | Advance"
                        duration="One Week Program for Engineers"
                        imageUrl="/Home - AKG Skills - 4-12-2025 11-10-50 pm/manuf.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 2 - Industrial Training Program - Special Card */}
                <div className="kc-elm kc_col-sm-6 kc_column_inner kc_col-sm-6 w-full md:w-1/2 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="widget widget_wpb_widget kc-elm">
                      <div className="flex flex-col items-start justify-start text-left h-full py-6 bg-white rounded-lg shadow-md p-6">
                        {/* Text Content */}
                        <div className="space-y-3">
                          <h3 className="text-[#029896] text-xs font-bold uppercase tracking-wider font-['Oswald',sans-serif]">
                            Industrial Training Program
                          </h3>
                          <h4 className="text-gray-900 text-xl font-semibold leading-tight font-['Oswald',sans-serif]">
                            Computer Integrated Manufacturing
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Milling | Turning | CAD & CAM
                          </p>
                          <p className="text-gray-600 text-sm font-medium">
                            Six Weeks Summer Training Program for Engineering Students
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
                        title="Advance Manufacturing"
                        details="Milling | Turning"
                        duration="One Day Program for Beginners"
                        imageUrl="/Home - AKG Skills - 4-12-2025 11-10-50 pm/manuf_2.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Cards - Bottom Row */}
              <div className="kc-elm kc_row kc_row_inner flex flex-col md:flex-row -mx-3 md:-mx-4">
                {/* Card 4 - Training */}
                <div className="kc-elm kc_col-sm-3 kc_column_inner kc_col-sm-3 w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="widget widget_wpb_widget kc-elm">
                      <ProgramCard
                        type="Training"
                        title="Manufacturing Technologies"
                        details="Basic | Advance"
                        duration="Two Weeks Program for Engineers"
                        imageUrl="/Home - AKG Skills - 4-12-2025 11-10-50 pm/27.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 5 - Vocational Training Program */}
                <div className="kc-elm kc_col-sm-3 kc_column_inner kc_col-sm-3 w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="widget widget_wpb_widget kc-elm">
                      <ProgramCard
                        type="Vocational Training Program"
                        title="Flexible Manufacturing System"
                        details="Milling | Turning | CAD"
                        duration="Program for Diploma/ ITI Students"
                        imageUrl="/Home - AKG Skills - 4-12-2025 11-10-50 pm/29.jpg"
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
                        title="Manufacturing and Inspection"
                        details="CNC Machine | CAD & CAM | Reverse Engg."
                        duration="Six Months Program for Students"
                        imageUrl="/Home - AKG Skills - 4-12-2025 11-10-50 pm/23.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 7 - Finishing School Program */}
                <div className="kc-elm kc_col-sm-3 kc_column_inner kc_col-sm-3 w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="widget widget_wpb_widget kc-elm">
                      <ProgramCard
                        type="Finishing School Program"
                        title="Production Engineering"
                        details="CAD | CAM | Measurements & Metrology"
                        duration="One Month Program for Fresher's"
                        imageUrl="/Home - AKG Skills - 4-12-2025 11-10-50 pm/manuf_6.jpg"
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
