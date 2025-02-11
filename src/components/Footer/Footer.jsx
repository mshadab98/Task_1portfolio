import React from "react";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#204051] text-white py-5 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
      
        <p className="text-md md:text-md font-light ml-8">
          Striving for progress, not perfection. Every step counts......!
        </p>

       
        <p className="text-sm mt-3 md:mt-0">
          © {new Date().getFullYear()} Mohd Shadab
        </p>

        
        <div className="flex items-center gap-4 mt-3 md:mt-0 flex-wrap ">
          <a href="mailto:your@email.com" className="flex items-center gap-2 hover:text-teal-400 transition">
            <MdOutlineMail className="text-lg " /> mohdshadab98977@gmail.com
          </a>
          <a href="tel:+9198977" className="flex items-center  hover:text-teal-400 transition">
            <MdOutlinePhone className="text-md " /> +91 9897726402
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
