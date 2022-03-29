import KushCategories from "./kush_categories";
import KushHomeRight from "./kush_home_right";
import { useMediaQuery } from "react-responsive";
const KushHomeTop = () => {
  const lg = useMediaQuery({ query: "(min-width: 1100px)" });

  return (
    <div className="kush-home-top">
      <div className="row">
        {lg && <div className="col-lg-3"><KushCategories /></div>}

        <div className={lg?'col-lg-9':'col'}>
          <KushHomeRight />
        </div>
      </div>
    </div>
  );
};
export default KushHomeTop;
