import Image from "next/image";

export default function Bannersmall(){
    return(
        <div className="Parentbanner2">
          <div className="textbox1">
            <h1>BIGGEST SALE 50% OFF ON ITEMS</h1>
              <div className="box1">
                <Image src={"/box1.jpg"} alt="box1" width={300} height={100} className="box1img"/>
              </div>
          </div>
          <div className="textbox2">
            <h1>BIGGEST SALE 50% OFF ON ITEMS</h1>
              <div className="box2">
                <Image src={"/box2.jpg"} alt="box2" width={300} height={100} className="box2img"/>
              </div>
          </div>
          <div className="textbox3">
            <h1>BIGGEST SALE 50% OFF ON ITEMS</h1>
              <div className="box3">
                <Image src={"/box3.jpg"} alt="box3" width={300} height={100} className="box3img"/>
              </div>
          </div>
          <div className="textbox4">
            <h1>BIGGEST SALE 50% OFF ON ITEMS</h1>
              <div className="box4">
                <Image src={"/box4.jpg"} alt="box4" width={300} height={100} className="box4img"/>
              </div>
          </div>
        </div>
    )
}