import Image from "next/image"
export default function Downpost2(){
    return(
        <div className="Parentdown2">
<div className="Childdown2">
    <Image src={"/small1.jpg"} alt="small1" width={300} height={100} className="imagesmall"/>
</div>
<div className="Childdown2">
<Image src={"/small2.jpg"} alt="small2" width={300} height={100} className="imagesmall"/>
</div>
<div className="Childdown2">
    <Image src={"/small3.jpg"} alt="small3" width={300} height={100} className="imagesmall"/>
</div>
        </div>
    )
}