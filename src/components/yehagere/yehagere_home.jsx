import OurShop from "./our_shop"
import OurStory from "./our_story"
import Testimonials from "./testimonials"
import PopularItems from "./popular_items"
import YehagereCategories from "./yehagere_categories"
import YehagereNav from "./yehagere_nav"

const YehagereHome = () => {

    return <div className="yehagere-home">
        {/* <YehagereNav/> */}
        <YehagereCategories/>
        <PopularItems/>
        <OurStory/>
        <Testimonials/>
        <OurShop/>
    </div>

}
export default YehagereHome;