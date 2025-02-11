import React from "react";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const Contact = () => {
  return (
    <section id="Contact" className="bg-gray-200 py-16 ">
      <div className="container mx-auto px-6 lg:px-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-10 shadow-lg rounded-xl shadow-gray-300 ">
          {/* left-section */}
          <div className="text-center flex-col justify-center md:text-left space-y-10 ">
            <h3 className="text-[#204051] text-5xl font-bold ">
              Free to Feel Contact us
            </h3>
            {/* socil icons */}
            <div className="flex justify-center md:justify-start gap-5 text-gray-700">
              <a href="#" className="hover:text-teal-500 transition">
                <LuInstagram className="text-4xl" />
              </a>
              <a href="#" className="hover:text-teal-500 transition">
                <FaXTwitter className="text-4xl" />
              </a>
              <a
                href="mailto:your@email.com"
                className="hover:text-teal-500 transition"
              >
                <MdOutlineMail className="text-4xl" />
              </a>
              <a
                href="tel:+9198977xxxxx"
                className="hover:text-teal-500 transition"
              >
                <MdOutlinePhone className="text-4xl" />
              </a>
            </div>
          </div>
                        {/* right info sec */}

          <form className="space-y-6 ml-8 bg-gray-400 p-10 shadow-lg rounded-xl shadow-gray-600">
            <h1 className="text-2xl font-bold text-gray-700">Enquiry</h1>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              required
              placeholder="Write your query"
              className="w-full rounded-lg border focus:ring-2 focus:ring-teal-500"
              rows="4"
            ></textarea>
          </div>

          <button className="w-full bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-700 transition">
            Send Query
          </button>
        </form>
        </div>

        {/* right-secc */}
        
      </div>
    </section>
  );
};

export default Contact;
