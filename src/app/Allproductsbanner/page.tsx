import Image from "next/image"
export default function AllproductsBanner(){
    return(
         <div className="ParentBan">
          <div className="Childban">
          <h1 className="head1">Get Your Electronic & <br /><span>Clothes</span> Products Now From <span>AF</span></h1>
          <p className="paragraph1">Ahmed Fashion offers a curated selection of trendy clothing, accessories, and electronics, all designed to make your shopping experience effortless and enjoyable. Explore stylish outfits and the latest gadgets, all in one place, at great prices.</p>
          <button className="button1">Shop Now</button>
          <Image src={"/RS,19999_processed.png"} alt="rs" width={300} height={100} className="rs"/>
          <Image src={"/RS,19999 (2)_processed.png"} alt="rs" width={300} height={100} className="rs1"/>
          <Image src={"/RS.19999 (5).png"} alt="rs" width={300} height={100} className="rs2"/>
          <Image src={"/watches.png"} alt="rs" width={300} height={100} className="watches"/>
            <Image src={"/ban.png"} alt="banner" width={400} height={100} className="banimg"/>
         </div>
         </div>
    )
}