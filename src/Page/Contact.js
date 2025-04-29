import { useState, useEffect } from "react";

export default function Contact() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulating a delay
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 ">
      {/* Loading Animation */}
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-col w-full max-w-4xl p-8 py-3 bg-white rounded-lg shadow-lg md:flex-row">
          {/* Left Side - Contact Details */}
          <div className="flex flex-col justify-center p-6 md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-green-600">Contact </h2>
            <p className="mb-2 text-gray-700">📍 Address: GH Nimasha,Urubokka,Matara, Sri Lanka</p>
            <p className="mb-2 text-gray-700">📞 Phone: +94 76 2 94 94 06</p>
            <p className="mb-4 text-gray-700">📧 Email: hashinin533@gmail.com</p>
            <iframe
              className="w-full h-48 py-2 rounded-md shadow-md"
              title="Contact Map"  // Add this title
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.894180376451!2d80.63501761477501!3d7.28972859474066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3670000000001%3A0x7c51648e2a3c5f0!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1632379182282!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-6 md:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold text-green-600">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-white transition duration-300 bg-green-600 rounded-md hover:bg-green-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
