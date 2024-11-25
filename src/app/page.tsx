import Banner from "./banners/page"
import Bannersmall from "./bannersmall/page"
import Heading from "./headingsale/page"
import Topitems from "./TopItems/page"
import DownPost from "./downPost/page"
export default function Home(){
  return(
    <div>
     <Banner/>
     <Bannersmall/>
     <Heading/>
     <Topitems/>
     <DownPost/>
    </div>
  )
}