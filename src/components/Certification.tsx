const Certification = () => {
  return (
    <section id="certification" className="kc-elm kc-row w-full py-6 md:py-8 bg-gray-200/70">
      <div className="kc-row-container kc-container max-w-7xl mx-auto px-4 md:px-6">
        <div className="kc-wrap-columns w-full">
          <div className="flex flex-col md:flex-row -mx-3 md:-mx-4">
            {/* Left Column */}
            <div className="kc-elm kc_col-sm-10 kc_column kc_col-sm-10 w-full md:w-10/12 px-3 md:px-4">
              <div className="kc-col-container">
                {/* Spacing div */}
                <div className="kc-elm h-2.5 clear-both w-full"></div>
                
                {/* Title Section */}
                <div className="kc-elm kc-title-wrap mb-4">
                  <h3 className="kc_title mb-3 text-2xl md:text-3xl font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
                    Certification
                  </h3>
                </div>

                {/* Divider Line */}
                <div className="kc-elm divider_line yline mb-6">
                  <div className="divider_inner divider_line1 bg-yellow-400 h-1 w-16 md:w-20"></div>
                </div>

                {/* Paragraph */}
                <div className="kc-elm kc_text_block mb-6">
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed font-normal">
                    The Centre provide Joint Certification with SIEMENS / SITRAIN to successful candidates on completion of their training, conducted in line with International Pedagogy, as per SIEMENS Global Standards.
                  </p>
                </div>

                {/* Spacing div */}
                <div className="kc-elm h-2.5 clear-both w-full"></div>
              </div>
            </div>

            {/* Right Column - kc_col-of-5 */}
            <div className="kc-elm kc_col-of-5 kc_column kc_col-of-5 w-full md:w-2/12 px-3 md:px-4">
              <div className="kc-col-container">
                {/* Spacing div */}
                <div className="kc-elm h-4 clear-both w-full"></div>
                
                {/* Certificate Image */}
                <div className="kc-elm kc_shortcode kc_single_image">
                  <img 
                    src="/Home - AKG Skills - 4-12-2025 11-10-50 pm/Certificate_1.jpg" 
                    alt="SIEMENS Certification" 
                    className="w-full h-auto"
                    style={{
                      transform: 'rotate(2deg)',
                      transition: 'transform 0.3s ease'
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>

                {/* Spacing div */}
                <div className="kc-elm h-4 clear-both w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certification
