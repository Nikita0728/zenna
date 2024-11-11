import React from "react";

const HomeContact = () => {
  return (
    <>
 
    
    <div className="bg-gray-100 py-10">
 <h2 className="font-bold text-2xl flex justify-center"> Reach Out to Us</h2>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail*
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">ADDRESS</h3>
            <p className="text-sm text-gray-600">
              WIEXO Inc.
              <br />
              546 Little Lonsdale St
              <br />
              Australia
              <br />
              PH 62058
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-4">INFORMATION</h3>
            <p className="text-sm text-gray-600">
              <i className="fas fa-envelope mr-2"></i> info@wiexo.com
            </p>
            <p className="text-sm text-gray-600">
              <i className="fas fa-phone mr-2"></i> +1 (800) 888 5260 52 63
            </p>
            <p className="text-sm text-gray-600">
              <i className="fas fa-fax mr-2"></i> +1 (800) 888 5260 52 64
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-4">BUSINESS HOURS</h3>
            <p className="text-sm text-gray-600">Monday - Friday: 9am to 20 pm</p>
            <p className="text-sm text-gray-600">Saturday: 9am to 17 pm</p>
            <p className="text-sm text-gray-600">Sunday: Day off</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeContact;
