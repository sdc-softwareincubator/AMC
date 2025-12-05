const AboutUs = () => {
  return (
    <section id="about" className="kc-elm kc-row w-full sm:my-6 my-3 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="kc-row-container kc-container max-w-7xl mx-auto">
        <div className="kc-wrap-columns w-full">
          <div className="kc-elm kc_col-sm-12 kc_column kc_col-sm-12 w-full">
            <div className="kc-col-container w-full">
              {/* Title Section */}
              <div className="kc-elm kc-title-wrap text-center mb-4">
                <h3 className="kc_title mb-3 text-xl md:text-2xl lg:text-[1.75rem] font-bold leading-tight text-[#FB0202] font-['Oswald',sans-serif]">
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
                  AKGEC in association with Bosch Rexroth, Germany has set up the Center of Excellence in Automation Technologies (CEAT),<br className="hidden md:block" />
                  with a vision to cater the need and demand of industries in the field of Industrial Automation.
                </p>
              </div>

              {/* Two Column Layout: Image Left, Text Right */}
              <div className="kc-elm kc_row kc_row_inner flex flex-col md:flex-row items-center md:items-start gap-6 px-4 md:px-0">
                {/* Left Column - Image with Angled Edge */}
                <div className="kc-elm kc_col-sm-12 md:kc_col-sm-6 kc_column_inner kc_col-sm-12 md:kc_col-sm-6 w-full md:w-1/2 flex justify-center">
                  <div className="kc_wrapper kc-col-inner-container">
                    <div className="kc-elm kc_shortcode kc_single_image">
                      <img 
                        src="/Images/about.jpg"
                        alt="CEAT - Center of Excellence in Automation Technologies" 
                        className="rounded object-contain max-w-full h-auto md:h-[320px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Text Content */}
                <div className="kc-elm kc_col-sm-12 md:kc_col-sm-6 kc_column_inner kc_col-sm-12 md:kc_col-sm-6 w-full md:w-1/2 px-4 md:px-0">
                    <div className="kc_wrapper kc-col-inner-container md:mt-10">
                      <div className="kc-elm" style={{ height: '40px', clear: 'both', width: '100%' }}></div>
                      <div className="kc-elm kc_text_block text-justify md:pr-8 lg:pr-16 xl:pr-24">
                        <ul className="list-disc list-inside space-y-3 text-gray-800 text-sm md:text-base leading-relaxed font-normal mb-6">
                          <li>Since its Inception in 2013, AKGEC Center of Excellence in Automation Technologies has always been at the forefront to bridge the technological gap between Industry and Academia.</li>
                          <li>The Centre offers various training programs with a perfect balance between theory and hands-on in the field of Industrial Automation.</li>
                        </ul>
                        
                        {/* Logo */}
                        <div className="kc-elm kc_shortcode kc_single_image">
                          <a href="https://www.boschrexroth.com/en/xc/" title="" target="_blank" rel="noopener noreferrer">
                            <img src="/Images/infra-1.png" alt="Bosch Rexroth" className="max-w-full h-auto" />
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
