import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import AboutPic from "../../assets/aboutPic.jpg"

const About = () => {
  return (
    <section
      id="About"
      className="bg-gray-200 py-12 overflow-hidden items-center md:flex-wrap mx-0 md:mx-25 bg-opacity-30 rounded-lg p-12 "
    >
      <div className="container mx-auto px-6 md:px-1">
        {/* About heading*/}
        <h2 className="text-4xl underline underline-offset-2 font-bold text-center text-[#204051] mb-10">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left  */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={AboutPic}
              alt="Profile"
              className="h-80 md:w-90  rounded-3xl border-4 border-teal-400 shadow-lg"
            />
          </div>

          {/* Right Side (Text Content) */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            {/* right section with heading*/}
            <div>
              <h3 className="text-2xl font-semibold text-teal-500">
                <FaLongArrowAltRight /> Frontend Engineer
              </h3>

              <p className="text-gray-600 text-lg mt-2">
                I specialize in building interactive and responsive UI using{" "}
                <br />
                <b>HTML, CSS, JavaScript, React.js, and Tailwind CSS.</b>
              </p>
            </div>

            {/* righrt section with headings*/}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-500">
                <FaLongArrowAltRight />
                Backend Engineer
              </h3>
              <p className="text-gray-600 text-lg mt-2">
                I have experience in server-side development using <br />
                <b>Node.js, Express.js, and MongoDB.</b> <br />I build scalable
                APIs and backend solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
