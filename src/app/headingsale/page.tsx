import Image from "next/image"

export default function Heading(){
    return(
        <div className="Parenthead">
            <div className="Childhead">
                <Image src={"/POPULAR ITEMS.png"} alt="Popular" width={700} height={100} className="popular"/>
                <button>Shop All Products</button>
                <p>50%-20% Sale</p>
            </div>
        </div>
    )
}