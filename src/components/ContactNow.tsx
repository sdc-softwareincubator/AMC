import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const ContactNow = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Sticky Contact Now Button */}
      <div
        id="wpcs_tab_649"
        className="wpcs_tab fixed cursor-pointer z-[9999999] hover:opacity-90 border border-[#7f7f7f] border-b-0 w-[170px] h-[34px] overflow-hidden text-white py-0.5 top-[200px] -right-[68px] text-center text-lg transition-all duration-300"
        style={{
          transform: 'rotate(-90deg)',
          opacity: isOpen ? '0' : '1',
          backgroundColor: '#029896'
        }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Now"
      >
        Contact Now
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          id="wpcs_overlay_649"
          className="fixed inset-0 backdrop-blur-xs z-[999999] cursor-pointer transition-opacity duration-300 block"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slider Panel */}
      <div
        id="wpcs_content_main_649"
        className="fixed overflow-y-auto z-[9999999] bg-white transition-all duration-[250ms] ease-in-out w-[500px] max-w-full h-full top-0 p-0 m-0"
        style={{
          right: isOpen ? '0px' : '-500px',
          opacity: isOpen ? '1' : '0'
        }}
      >
            {/* Close Button */}
            <div
              id="wpcs_close_slider_649"
              className="absolute top-0 left-0 cursor-pointer bg-black bg-opacity-50 w-8 h-8 p-0 overflow-hidden flex items-center justify-center"
              onClick={() => setIsOpen(false)}
              aria-label="close slider"
            >
              <X size={20} className="text-white" />
            </div>

            {/* Form Content */}
            <div
              id="wpcs_content_inner_649"
              className="bg-white max-w-full min-h-full p-5 my-[60px] mx-10 text-[#0c0000] border border-white"
            >
              <div className="wpcs-cf7">
                <div role="form" className="wpcf7" lang="en-US" dir="ltr">
                  <form action="/" method="post" className="wpcf7-form">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Us</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="StudentName" className="block text-sm font-medium text-gray-700 mb-1">
                          Student Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="StudentName"
                          id="StudentName"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#029896]"
                          placeholder="Student Name"
                        />
                      </div>

                      <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                          Mobile <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          id="mobile"
                          required
                          minLength={8}
                          maxLength={14}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#029896]"
                          placeholder="Mobile"
                        />
                      </div>

                      <div>
                        <label htmlFor="your-email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="your-email"
                          id="your-email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#029896]"
                          placeholder="Email"
                        />
                      </div>

                      <div>
                        <label htmlFor="courses" className="block text-sm font-medium text-gray-700 mb-1">
                          Courses <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="courses"
                          id="courses"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#029896]"
                        >
                          <option value="">---</option>
                          <option value="option 1">option 1</option>
                          <option value="option2">option2</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="Message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="Message"
                          id="Message"
                          required
                          rows={5}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#029896]"
                          placeholder="Message"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="w-full text-white px-4 py-2 rounded-md font-semibold hover:bg-[#566E95] transition"
                          style={{ backgroundColor: '#029896' }}
                        >
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default ContactNow

