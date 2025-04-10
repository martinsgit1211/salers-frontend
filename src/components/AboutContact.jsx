import React from "react";

const AboutContact = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-5 md:px-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* About Us */}
        <div className="flex-1 lg:px-2 px-10">
          <h1 className="text-[2em] text-center md:text-3xl font-bold mb-6 text-yellow-400">About <span className="text-white">Sale</span><span className="text-yellow-400">Hub</span></h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            WholesaleHub is a modern platform connecting manufacturers and wholesalers for seamless supply chain experiences.
            <br /><br /> 
            Our mission is to eliminate inefficiencies in the wholesale market by providing powerful tools for product visibility, order management, and communication.
            <br /><br />
            Whether you're a manufacturer looking to expand your reach, or a wholesaler sourcing quality products, WholesaleHub offers a trusted, scalable solution.
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">Our Values</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Transparency & Trust</li>
              <li>Efficiency & Innovation</li>
              <li>Customer-Centered Design</li>
              <li>Sustainable Growth</li>
            </ul>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex-1 relative rounded-xl overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    
  ></div>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"
  style={{
    backgroundImage: `url('./assets/Background.png')`
  }}
  ></div>

  {/* Form Content */}
  <div className="relative z-10 p-10 md:p-10">
    <h1 className="text-3xl text-center md:text-4xl font-bold mb-6 text-yellow-400">Contact Us</h1>
    <p className="text-base md:text-lg text-gray-200 mb-6">
      We’d love to hear from you. Whether you're a partner, customer, or curious visitor — feel free to reach out!
    </p>
    <form className="grid grid-cols-1 gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-2 rounded bg-gray-800 text-white border border-yellow-600 placeholder-gray-400"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 placeholder-gray-400"
      />
      <textarea
        placeholder="Your Message"
        className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 placeholder-gray-400 h-20"
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded transition"
      >
        Send Message
      </button>
    </form>
  </div>
        </div>

      </div>
    </div>
  );
};

export default AboutContact;
