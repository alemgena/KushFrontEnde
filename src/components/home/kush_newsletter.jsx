import FollowUs from "./follow_us"
import SubscribeBox from "./subscribe_box"

const KushNewsletter = () => {

    return <div className="kush-newsletter">
        <div className="header">Join our newsletter</div>
        <div className="subscribe">
            <SubscribeBox/>
        </div>
        <div className="follow">
            <FollowUs/>
        </div>
    </div>

}
export default KushNewsletter;