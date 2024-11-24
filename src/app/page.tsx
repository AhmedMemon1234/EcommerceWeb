import Banner from "./banners/page"
import Bannersmall from "./bannersmall/page"
import Heading from "./headingsale/page"
import Topitems from "./TopItems/page"
export default function Home(){
  return(
    <div>
     <Banner/>
     <Bannersmall/>
     <Heading/>
     <Topitems/>
    </div>
  )
}