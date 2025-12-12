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
    <section id="training" className="w-full py-10 md:py-16 bg-gray-200/70">
      <div className="mx-auto sm:my-6 my-3 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 max-w-screen">
        <div className="w-full">
          <div className="w-full">
            <div className="w-full">
              {/* Title Section */}
              <div className="text-center mb-4">
                <h3 className="mb-3 text-3xl font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
                  Training Programs
                </h3>
              </div>

              {/* Divider Line */}
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-400 h-1 w-16 md:w-20"></div>
              </div>

              {/* Introductory Text */}
              <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
                <p className="text-gray-800 text-sm md:text-base leading-tight font-normal">
                  The Centre offers following training programs as per International didactic concepts to produce highly skilled technical workforce<br className="hidden md:block" />
                  as per industry requirements in the field of Manufacturing
                </p>
              </div>

              {/* Program Cards - Top Row */}
              <div className="flex flex-col md:flex-row -mx-3 md:-mx-4 mb-4 md:mb-6">
                {/* Card 1 - Training */}
                <div className="w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="h-full">
                    <div className="h-full">
                      <ProgramCard
                        type="Training"
                        title="Industrial Measurement"
                        details="Basic | Advance"
                        duration="One Week Program for Engineers"
                        imageUrl="/Images/manuf.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 2 - Industrial Training Program - Special Card */}
                <div className="w-full md:w-1/2 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="h-full">
                    <div className="h-full">
                      <div
                        className="relative overflow-hidden rounded-lg shadow-md h-full min-h-[370px] flex flex-col justify-end p-6"
                        style={{
                          backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%), url("/Images/22.jpg")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <div className="absolute top-4 left-4">
                          <img
                            src="/Images/amc_logo.jpg"
                            alt="AMC Logo"
                            className="h-10 w-auto drop-shadow"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none'
                            }}
                          />
                        </div>
                        <div className="space-y-3 text-white relative z-10">
                          <h3 className="text-yellow-400 text-xs font-bold uppercase tracking-wider font-['Oswald',sans-serif]">
                            Industrial Training Program
                          </h3>
                          <h4 className="text-white text-xl font-semibold leading-tight font-['Oswald',sans-serif]">
                            Computer Integrated Manufacturing
                          </h4>
                          <p className="text-gray-100 text-sm leading-relaxed">
                            Milling | Turning | CAD & CAM
                          </p>
                          <p className="text-gray-100 text-sm font-medium">
                            Six Weeks Summer Training Program for Engineering Students
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Workshop */}
                <div className="w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="h-full">
                    <div className="h-full">
                      <ProgramCard
                        type="Workshop"
                        title="Advance Manufacturing"
                        details="Milling | Turning"
                        duration="One Day Program for Beginners"
                        imageUrl="/Images/manuf_2.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Cards - Bottom Row */}
              <div className="flex flex-col md:flex-row -mx-3 md:-mx-4">
                {/* Card 4 - Training */}
                <div className="w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="h-full">
                    <div className="h-full">
                      <ProgramCard
                        type="Training"
                        title="Manufacturing Technologies"
                        details="Basic | Advance"
                        duration="Two Weeks Program for Engineers"
                        imageUrl="/Images/27.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 5 - Vocational Training Program */}
                <div className="w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="h-full">
                    <div className="h-full">
                      <ProgramCard
                        type="Vocational Training Program"
                        title="Flexible Manufacturing System"
                        details="Milling | Turning | CAD"
                        duration="Program for Diploma/ ITI Students"
                        imageUrl="/Images/29.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 6 - Industrial Internship */}
                <div className="w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="h-full">
                    <div className="h-full">
                      <ProgramCard
                        type="Industrial Internship"
                        title="Manufacturing and Inspection"
                        details="CNC Machine | CAD & CAM | Reverse Engg."
                        duration="Six Months Program for Students"
                        imageUrl="/Images/23.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 7 - Finishing School Program */}
                <div className="w-full md:w-1/4 px-3 md:px-4 mb-4 md:mb-0">
                  <div className="h-full">
                    <div className="h-full">
                      <ProgramCard
                        type="Finishing School Program"
                        title="Production Engineering"
                        details="CAD | CAM | Measurements & Metrology"
                        duration="One Month Program for Fresher's"
                        imageUrl="/Images/manuf_6.jpg"
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
