const Campus = () => {
  const facilities = [
    {
      img: "/Images/CANTEEN.png",
      title: "CANTEEN"
    },
    {
      img: "/Images/FAITH-CENTER.png",
      title: "FAITH CENTER"
    },
    {
      img: "/Images/gym.png",
      title: "GYM"
    },
    {
      img: "/Images/LIBRARY.png",
      title: "LIBRARY"
    },
    {
      img: "/Images/SPORTS.png",
      title: "SPORTS"
    },
    {
      img: "/Images/WIFI.png",
      title: "WIFI"
    },
    {
      img: "/Images/boys_girls.png",
      title: "BOYS & GIRLS HOSTEL"
    },
    {
      img: "/Images/rest.png",
      title: "GUEST HOUSE"
    },
  ]

  return (
    <section className="w-full py-10 md:py-16 bg-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="w-full">
          <div className="w-full">
            <div className="w-full">
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column - On-Campus Facilities */}
                <div>
                  {/* Title Section */}
                  <div className="text-center mb-4">
                    <h3 className="mb-3 text-3xl font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
                      On-Campus Facilities
                    </h3>
                  </div>

                  {/* Divider Line */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-yellow-400 h-1 w-16 md:w-20"></div>
                  </div>

                  {/* Facilities Grid - 2 rows of 4 */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                    {facilities.map((facility, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center"
                      >
                        <figure className="mb-3">
                          <img
                            src={facility.img}
                            alt={facility.title}
                            className="w-full h-auto object-contain max-w-24 md:max-w-32"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none'
                            }}
                          />
                        </figure>
                        <div className="text-xs md:text-sm font-semibold text-gray-800 uppercase leading-tight">
                          {facility.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Virtual Tour */}
                <div>
                  {/* Title Section */}
                  <div className="text-center mb-4">
                    <h3 className="mb-3 text-3xl font-bold leading-tight text-[#029896] font-['Oswald',sans-serif]">
                      Virtual Tour
                    </h3>
                  </div>

                  {/* Divider Line */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-yellow-400 h-1 w-16 md:w-20"></div>
                  </div>

                  {/* Virtual Tour Content - Empty for now, can be filled with video or iframe */}
                  <div className="text-center text-gray-600">
                    <p className="text-sm md:text-base">
                      Virtual tour content will be displayed here
                    </p>
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

export default Campus

