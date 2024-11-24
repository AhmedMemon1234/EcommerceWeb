import Image from "next/image"
export default function Banner() {
    return (
        <div className="Parentbanner">
            <ul className="Childbanner">
                <li className="home">Home</li>
                <li className="sales">Sales</li>
                <li className="products">All Products</li>
                <li className="services">Our Services</li>
                <li className="about">About Us</li>
                <li className="contact">Contact Us</li>
            </ul>
            <div className="posters">
                <Image src={"/banner1.jpg"} alt="Banner" width={600} height={500} className="bigbanner" />
            </div>
        </div>
    )

}