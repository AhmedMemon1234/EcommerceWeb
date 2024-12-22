import SocialMediaSection from "../Contactservice/page";
import Contactservice2 from "../Contactservice2/page";
import Customersays4 from "../Customer4/page";
import ServicesDown from "../ServicesDown/page";
import { FaDesktop, FaUser } from "react-icons/fa"
import { GiClothes } from "react-icons/gi"
import { MdMedicalServices } from "react-icons/md"
import { IoMdContact } from "react-icons/io"
export default function MyServices() {
  return (
    <>
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
      <section className="relative bg-white min-h-[110vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-red-600 z-0" />
        <div className="relative z-10 text-center p-8 md:p-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
            Discover Our <span className="text-black">Exceptional Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We provide top-notch solutions tailored to your needs. Explore our
            services and let us help you achieve your goals.
          </p>
          <div className="inline-block bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold cursor-pointer transform transition duration-300 hover:scale-110">
            Learn More
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 animate-pulse">
          <div className="w-[500px] h-[500px] bg-gray-600 rounded-full shadow-lg transform rotate-45"></div> {/* Gray Circle */}
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 animate-pulse">
          <div className="w-[250px] h-[250px] bg-black rounded-full shadow-lg transform rotate-45"></div> {/* Black Circle */}
        </div>

        <div className="absolute inset-0 z-0 flex justify-center items-center transform rotate-45">
          <div className="w-[600px] h-[600px] animate-spin-slow">
            <div className="w-full h-full bg-white rounded-full shadow-lg transform transition-all duration-500"></div> {/* White Circle */}
          </div>
        </div>
      </section>
      <ServicesDown />
      <Contactservice2/>
      <SocialMediaSection/>
      <Customersays4/>
      </div>
      </>
  );
}
