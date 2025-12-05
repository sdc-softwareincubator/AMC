const AboutUs = () => {
  return (
    <section id="about" className="kc-elm kc-row w-full py-10 md:py-16">
      <div className="kc-row-container kc-container max-w-7xl mx-auto px-4 md:px-6">
        <div className="kc-wrap-columns w-full">
          <div className="kc-elm kc_col-sm-12 kc_column kc_col-sm-12 w-full">
            <div className="kc-col-container w-full">
              {/* Title Section */}
              <div className="kc-elm kc-title-wrap text-center mb-4">
                <h3 className="kc_title mb-3 text-3xl font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
                  About Centre
                </h3>
              </div>

              {/* Divider Line */}
              <div className="kc-elm divider_line yline flex justify-center mb-6">
                <div className="divider_inner divider_line1 bg-yellow-400 h-1 w-16 md:w-20"></div>
              </div>

              {/* Introductory Text */}
              <div className="kc-elm kc_text_block text-center mb-8 md:mb-10">
                <p className="p1 text-gray-800 text-base md:text-lg leading-relaxed font-normal">
                  Advance Manufacturing Centre (AMC) has been established in collaboration with eminent<br className="hidden md:block" />
                  Industry partners like SIEMENS and Carl Zeiss.
                </p>
              </div>

              {/* Two Column Layout: Image Left, Text Right */}
              <div className="kc-elm kc_row kc_row_inner flex flex-col md:flex-row gap-0 md:gap-0 -mx-3 md:-mx-4">
                {/* Left Column - Image with Angled Edge */}
                <div className="kc-elm kc_col-sm-12 md:kc_col-sm-6 kc_column_inner kc_col-sm-12 md:kc_col-sm-6 w-full md:w-1/2 px-3 md:px-0">
                  <div className="kc_wrapper kc-col-inner-container relative h-full">
                    <div className="kc-elm kc_shortcode kc_single_image relative h-full">
                      <img 
                        src="/Home - AKG Skills - 4-12-2025 11-10-50 pm/about_1.jpg" 
                        alt="AMC - Advanced Manufacturing Centre" 
                        className="w-full h-full object-cover"
                        style={{
                          clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Text Content */}
                <div className="kc-elm kc_col-sm-12 md:kc_col-sm-6 kc_column_inner kc_col-sm-12 md:kc_col-sm-6 w-full md:w-1/2 px-3 md:px-4 md:pl-8">
                  <div className="kc_wrapper kc-col-inner-container py-6 md:py-8">
                    <div className="kc-elm kc_text_block">
                      <p className="p1 text-gray-800 text-base md:text-lg leading-relaxed font-normal mb-4">
                        The centre is having world class state of art infrastructure and facilities to train young Engineers, Polytechnic and ITI candidates in the field of Conventional & Computer Aided Manufacturing, Robot Assisted Manufacturing, Additive Manufacturing, Measurement & Metrology and high end Reverse Engineering processes.
                      </p>
                      <p className="p1 text-gray-800 text-base md:text-lg leading-relaxed font-normal mb-6">
                        The Centre also undertake production assignments of complex parts from local industry and support them to take up proof of concepts, prototyping of new parts and assemblies using high end engineering processes.
                      </p>
                      
                      {/* Icon - Square with diagonal arrow */}
                      <div className="kc-elm kc_shortcode kc_single_image">
                        <a href="#" className="inline-block">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 hover:text-[#029896] transition">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <path d="M9 15L15 9M15 9H9M15 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>
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

export default AboutUs
