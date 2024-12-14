'use client'

import Contact from "../Api/page";
import InteractiveShowcase from "../Contact2/page";
import { FaDesktop, FaUser } from "react-icons/fa"
import { GiClothes } from "react-icons/gi"
import { MdMedicalServices } from "react-icons/md"
import { IoManSharp } from "react-icons/io5"
import { IoMdContact } from "react-icons/io"
export default function ContactHero() {
  return (
       <div className="AllproductsParent">
                       <label id="#Hamburger">
                    <input type="checkbox" className="checkbox" />
                    <div className="toggle">
                        <span className="top_line common"></span>
                        <span className="middle_line common"></span>
                        <span className="bottom_line common"></span>
                    </div>
                    <div className="slide">
<h1>MENU</h1>
<ul className="Childbanner">
                <li ><a href="#"><FaDesktop className="icon"/>Home</a></li>
                <li ><a href="/All-Products"><FaUser className="icon"/>All Products</a></li>
                <li ><a href="/Socialmedia"><GiClothes className="icon"/>Social Media Items</a></li>
                <li ><a href="/Services"><MdMedicalServices className="icon"/>Services</a></li>
                <li ><a href="/Contact"><IoMdContact className="icon"/>Contact Us</a></li>
            </ul>
            </div>
            </label>
    <section className="relative bg-gradient-to-r from-red-600 to-black min-h-[80vh] flex justify-center items-center text-white overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-full opacity-50 animate-pulse"></div>

      <div className="absolute z-10 flex justify-center items-center animate-spin-slow">
        <div className="w-[250px] h-[250px] bg-gradient-to-br from-black to-gray-800 rounded-xl shadow-2xl animate-spin-slow opacity-80"></div>
      </div>

      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-100 mb-6">
          Let’s Connect with You
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
          Have questions or need assistance? We’re here to help. Reach out to us, and let’s work together to achieve great things.
        </p>

        <a
          href="#contact-form"
          className="inline-block bg-gradient-to-r from-red-500 to-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-red-400"
        >
          Contact Us Now
        </a>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 flex justify-center items-center space-x-6 opacity-40">
        <div className="w-[120px] h-[120px] bg-gradient-to-br from-gray-800 to-red-600 rounded-full opacity-50 animate-bounce"></div>
        <div className="w-[150px] h-[150px] bg-gradient-to-br from-black to-red-500 rounded-full opacity-60 animate-bounce"></div>
      </div>
    </section>
    <InteractiveShowcase/>
    <Contact/>
</div>
  );
}
