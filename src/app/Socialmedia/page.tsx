import HeroSection from "../Herosocial/page";
import { FaDesktop, FaUser } from "react-icons/fa"
import { GiClothes } from "react-icons/gi"
import { MdMedicalServices } from "react-icons/md"
import { IoManSharp } from "react-icons/io5"
import { IoMdContact } from "react-icons/io"
export default function Socialmedia(){
    return(
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
            <HeroSection/>
        </div>
    )
}