import AllproductsBanner from "../Allproductsbanner/page"
import Shopbig1 from "../2shop1/page"
import SliderImage from "../2slider/page"
export default function Allproducts(){
    return(
        <div className="AllproductsParent">
<AllproductsBanner/>
<Shopbig1/>
<SliderImage/>
        </div>
    )
}