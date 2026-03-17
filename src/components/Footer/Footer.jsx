import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-200 text-zinc-300 mt-20">

      <div className="max-w-[1250px] mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">

          {/* Logo + Description */}
          <div>
            <h2 className="text-3xl font-bold text-zinc-800">
               <span className='text-orange-500 '>G</span>rocy<span className='text-orange-500 '>N</span>est
            </h2>

            <p className="mt-4 text-zinc-600 leading-relaxed">
              Fresh groceries delivered straight to your doorstep. 
              We provide high quality fruits, vegetables and daily 
              essentials for a healthy lifestyle.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3">

              <li className="flex items-center gap-3 text-zinc-600">
                <FaMapMarkerAlt className="text-orange-500"/>
                Bolpur,Birbhum, West Bengal
              </li>

              <li className="flex items-center gap-3 text-zinc-600">
                <FaPhoneAlt className="text-orange-500"/>
                +91 9xxxxxxx4
              </li>

              <li className="flex items-center gap-3 text-zinc-600">
                <MdEmail className="text-orange-500"/>
                grocyNest@gmail.com
              </li>

            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <span className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
                <FaFacebookF />
              </span>

              <span className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
                <FaInstagram />
              </span>

              <span className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
                <FaTwitter />
              </span>

              <span className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
                <FaLinkedinIn />
              </span>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-orange-500">
          © 2026 GrocyNest. All Rights Reserved. Designed by Akash Mondal
        </div>

      </div>

    </footer>
  );
};

export default Footer;