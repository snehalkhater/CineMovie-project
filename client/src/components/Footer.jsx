import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#006A71] text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white playpen-sans">Cine Movie</h2>
          <p className="text-white-400 mt-3 text-sm">
            Book movie tickets online easily. Enjoy the latest movies with the
            best cinema experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/movies" className="hover:text-white">Movies</Link></li>
            <li><Link to="/Liked" className="hover:text-white">Liked Movies</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/refund" className="hover:text-white">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact Us</h3>

          <div className="flex items-center gap-2 text-sm mb-2">
            <Mail size={18} />
            <span>support@moviebook.com</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Phone size={18} />
            <span>+91 9876543210</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Youtube size={20} /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} cine movie. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;