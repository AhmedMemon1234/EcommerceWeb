import { IoSearchOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
export default function Header(){
    return(
        <div className="ParentHeader">
            <div className="ChildHeader">
                <h1><span>50% OFF</span> On All Items Pay 500 On 03368952826 And Place Your Order</h1>
            </div>
            <div className="Headercontent">
             <input type="text" placeholder="Search For Products..." />
             <IoSearchOutline className="searchicon"/>
             <h1>AF <span>Ahmed Fashion</span></h1>
             <FaCartArrowDown className="carticon"/>
             <IoIosMail className="mailicon"/>
             <FaWhatsapp className="whatsappicon"/>
            </div>
        </div>
    )
}