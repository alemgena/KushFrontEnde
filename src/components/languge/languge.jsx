import React from "react";
import KushNewsletter from "./kush_newsletter"
import KushTestimonials from "./kush_testimonials"

const KushHomeBottom = () => {
   return  <div className="kush-home-bottom row">
      <div className="left col-lg-6">
           <KushTestimonials/>
      </div>
      <div className="right col-lg-6">
          <KushNewsletter/>
      </div>
   </div>

}

export default KushHomeBottom;
