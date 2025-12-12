const Certification = () => {
  return (
    <section id="certification" className="w-full py-6 md:py-8 bg-gray-200/70">
      <div className="mx-auto sm:my-6 my-3 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 max-w-screen">
        <div className="w-full">
          <div className="flex flex-col md:flex-row -mx-3 md:-mx-4">
            {/* Left Column */}
            <div className="w-full md:w-10/12 px-3 md:px-4">
              <div className="">
                {/* Spacing div */}
                <div className="h-2.5 w-full"></div>

                {/* Title Section */}
                <div className="mb-4">
                  <h3 className="mb-3 text-2xl md:text-3xl font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
                    Certification
                  </h3>
                </div>

                {/* Divider Line */}
                <div className="mb-6">
                  <div className="bg-yellow-400 h-1 w-16 md:w-20"></div>
                </div>

                {/* Paragraph */}
                <div className="mb-6">
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed font-normal">
                    The Centre provide Joint Certification with SIEMENS / SITRAIN to successful candidates on completion of their training, conducted in line with International Pedagogy, as per SIEMENS Global Standards.
                  </p>
                </div>

                {/* Spacing div */}
                <div className="h-2.5 w-full"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-2/12 px-3 md:px-4">
              <div className="">
                {/* Spacing div */}
                <div className="h-4 w-full"></div>

                {/* Certificate Image */}
                <div className="">
                  <img
                    src="/Images/Certificate_1.jpg"
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
                <div className="h-4 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certification
