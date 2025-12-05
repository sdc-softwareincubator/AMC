const AboutUs = () => {
  return (
    <section id="about" className="kc-elm kc-row w-full sm:my-6 my-3 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="kc-row-container kc-container max-w-7xl mx-auto">
        <div className="kc-wrap-columns w-full">
          <div className="kc-elm kc_col-sm-12 kc_column kc_col-sm-12 w-full">
            <div className="kc-col-container w-full">
              {/* Title Section */}
              <div className="kc-elm kc-title-wrap text-center mb-4">
                <h3 className="kc_title mb-3 text-xl md:text-2xl lg:text-[1.75rem] font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
                  About Centre
                </h3>
              </div>

              {/* Divider Line */}
              <div className="kc-elm divider_line yline flex justify-center mb-4">
                <div className="divider_inner divider_line1 bg-yellow-400 h-1 w-16"></div>
              </div>

              {/* Introductory Text */}
              <div className="kc-elm kc_text_block text-center mb-6 px-4 md:px-8 lg:px-16 xl:px-24">
                <p className="p1 text-gray-800 text-sm md:text-base leading-relaxed font-normal">
                  Advance Manufacturing Centre (AMC) has been established in collaboration with eminent<br className="hidden md:block" />
                  Industry partners like SIEMENS and Carl Zeiss.
                </p>
              </div>

              {/* Two Column Layout: Image Left, Text Right */}
              <div className="kc-elm kc_row kc_row_inner flex flex-col md:flex-row items-center md:items-start gap-6 px-4 md:px-0">
                {/* Left Column - Image with Angled Edge */}
                <div className="kc-elm kc_col-sm-12 md:kc_col-sm-6 kc_column_inner kc_col-sm-12 md:kc_col-sm-6 w-full md:w-1/2 flex justify-center">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="kc-elm kc_shortcode kc_single_image">
                      <img 
                        src="/Images/about_1.jpg"
                        alt="AMC - Advanced Manufacturing Centre" 
                        className="rounded object-contain max-w-full h-auto md:h-[320px]"
                        style={{
                          clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Text Content */}
                <div className="kc-elm kc_col-sm-12 md:kc_col-sm-6 kc_column_inner kc_col-sm-12 md:kc_col-sm-6 w-full md:w-1/2 px-4 md:px-0">
                  <div className="kc_wrapper kc-col-inner-container md:mt-10">
                    <div className="kc-elm kc_text_block text-justify md:pr-8 lg:pr-16 xl:pr-24">
                      <p className="p1 text-gray-800 text-sm md:text-base leading-relaxed font-normal mb-4">
                        The centre is having world class state of art infrastructure and facilities to train young Engineers, Polytechnic and ITI candidates in the field of Conventional & Computer Aided Manufacturing, Robot Assisted Manufacturing, Additive Manufacturing, Measurement & Metrology and high end Reverse Engineering processes.
                      </p>
                      <p className="p1 text-gray-800 text-sm md:text-base leading-relaxed font-normal mb-6">
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
