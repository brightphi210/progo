"use client"
import {FaPhone, FaMailBulk, FaMap} from "react-icons/fa"
import "aos/dist/aos.css"

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gray-100">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h1 className="special text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 pt-10">Get in Touch</h1>
            <p className="text-gray-600 text-sm mb-8 px-5">
              Have questions about Progo? We're here to help you move like a pro.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="special text-3xl sm:text-4xl font-bold text-black mb-6">Contact Us</h2>
            <p className="text-gray-600 text-sm px-5">Ready to move like a pro? Get in touch with us today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Email */}
            <div
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300 cursor-pointer group"
              data-aos="fade-up"
              data-aos-delay="200"
              onClick={() => (window.location.href = "mailto:info@progomobility.com")}
            >
              <div className="flex-shrink-0 bg-orange-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <FaMailBulk className="h-8 w-8 text-[#f04c28]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Email Us</h3>
              <p className="text-[#f04c28] font-medium text-lg hover:underline">info@progomobility.com</p>
              <p className="text-gray-500 text-sm mt-2">Click to send us an email</p>
            </div>

            {/* Phone */}
            <div
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300 cursor-pointer group"
              data-aos="fade-up"
              data-aos-delay="400"
              onClick={() => (window.location.href = "tel:+2341234567890")}
            >
              <div className="flex-shrink-0 bg-orange-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <FaPhone className="h-8 w-8 text-[#f04c28]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Call Us</h3>
              <p className="text-[#f04c28] font-medium text-lg hover:underline">+234 123 456 7890</p>
              <p className="text-gray-500 text-sm mt-2">Mon-Fri, 9am-5pm WAT</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <FaMap className="h-6 w-6 text-[#f04c28] mr-2" />
                <h3 className="text-lg font-semibold text-black">Our Location</h3>
              </div>
              <p className="text-gray-600">123 Innovation Drive, Lagos, Nigeria</p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-md font-semibold text-black mb-3">Business Hours</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
