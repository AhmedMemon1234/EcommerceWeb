import Image from "next/image";

export default function Mobbanner() {
    return (
        <div className="Parentmobban">
            <div className="Childmobban">
                <Image src={"/mobban.png"} alt="Mobbanner" width={500} height={100} className="MobileBan" />
                <h1>Survey Our Store</h1>
                <p>At AF Ahmed Fashion, our mission is to provide you with a seamless shopping experience by offering high-quality clothing, accessories, and electronics that cater to your lifestyle needs. As a valued customer, your feedback plays a crucial role in helping us grow and improve. We are committed to curating trendy apparel, stylish accessories, and cutting-edge gadgets that not only meet but exceed your expectations. Whether you're exploring our premium fabrics, statement jewelry, or innovative tech, we aim to deliver products that bring value, comfort, and elegance to your daily life. Through this survey, we seek to understand your preferences better, identify areas where we can enhance our offerings, and learn how we can make your shopping journey even more enjoyable. Your insights will enable us to keep AF Ahmed Fashion at the forefront of style and innovation, ensuring we remain your trusted destination for all your fashion and lifestyle needs. Thank you for taking the time to share your thoughts and for being an essential part of our journey.</p>
            </div>

        </div>
    )
}