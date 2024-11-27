import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image"
export default function Footer(){
    return(
        <div className="Parentfooter">
            <div className="newscontent">
                <h1>Subscribe To Our NewsLetter</h1>
                <p>For Up To Date Updates Subscribe Our NewLetter</p>
                <input type="text" placeholder="Enter Your Email..."/>
                <button>Subscribe</button>
            </div>
            <div className="Childnews">
                <Image src={"/news.jpg"} alt="News" width={1265} height={100} className="imgnews"/>
                
            <div className="Footer">
              <CiFacebook className="facebookicon1"/>
              <TiSocialLinkedinCircular className="linkedinicon"/>
              <FaWhatsapp className="whatsappicon1"/>
              <FaGithub className="githubicon"/>
              <ul>
                <li className="Home">Home</li>
                <li className="Sales">Sales</li>
                <li className="Products">Products</li>
                <li className="Services">Services</li>
                <li className="About">About Us</li>
                <li className="Contact">Contact Us</li>
              </ul>
              <h3>Ahmed Fashion Store Created By <span>&hearts;</span> Ahmed Memon</h3>
              <h4>Copyright&copy;All Rights Reserved. </h4>
            </div>
            </div>
        </div>
    )
}