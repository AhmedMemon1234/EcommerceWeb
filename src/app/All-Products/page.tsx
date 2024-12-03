import AllproductsBanner from "../Allproductsbanner/page"
import Shopbig1 from "../2shop1/page"
import SliderImage from "../2slider/page"
import Watchsec from "../watchsec/page"
import Watchcart from "../watch cart/page"
import Mobilesec from "../Mobile/page"
import Headphones from "../Headphones/page"
export default function Allproducts(){
    return(
        <div className="AllproductsParent">
<AllproductsBanner/>
<Shopbig1/>
<SliderImage/>
<Watchsec/>
<Watchcart/>
<Mobilesec/>
<Headphones/>
        </div>
    )
}