import Image from "next/image"

export default function Heading(){
    return(
        <div className="Parenthead">
            <div className="Childhead">
                <h1 className="popular">Top Products</h1>
                <button>Shop All Products</button>
                <p>50%-20% Sale</p>
            </div>
        </div>
    )
}