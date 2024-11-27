import Banner from "./banners/page"
import Bannersmall from "./bannersmall/page"
import Heading from "./headingsale/page"
import Topitems from "./TopItems/page"
import DownPost from "./downPost/page"
import Downpost2 from "./downpost2/page"
import Bannerbottom from "./bannerbottom/page"
import Categories from "./categories/page"
export default function Home(){
  return(
    <div>
     <Banner/>
     <Bannersmall/>
     <Heading/>
     <Topitems/>
     <DownPost/>
     <Downpost2/>
     <Bannerbottom/>
     <Categories/>
    </div>
  )
}