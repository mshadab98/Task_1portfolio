import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, link: 'https://github.com' },
    { icon: <Linkedin size={18} />, link: 'https://linkedin.com' },
    { icon: <Twitter size={18} />, link: 'https://twitter.com' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding and Description */}
          <div className="md:col-span-2 px-15">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-violet-400">Shadab </span>
              <span className="text-teal-400">.Portfolio</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate Computer Science Engineering student specializing in web development, 
             and software engineering, ready to take on new challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                  aria-label={`Social link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>New Delhi, India</li>
              <li>mohdshadab98977@gmail.com</li>
              <li>+91 98977 26 402 </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Mohd Shadab reserved.</p>
          <p className="mt-2">
            Made with  using React, Three.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
