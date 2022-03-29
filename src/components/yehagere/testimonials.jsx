import { Card } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../utils/url";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get(`${url}admin/getAllTestimonial`).then(
      (response) => {
        console.log(response);
        if (response.data.result) {
          setTestimonials(response.data.result);
        }
      },
      (error) => {}
    );
  }, []);
  return (
    <div className="testimonials">
      <div className="yehagere-title">
        <div className="back">
          Testimonials <div className="front">sweet messages</div>
        </div>
      </div>
      <div className="content">
        <div className="row" style={{ justifyContent: "center" }}>
          {testimonials.map((item) => {
            return (
              <div className=" col-sm-12 col-md-4 ">
                <div className="testimonial-item">
                  <div className="content">
                   {item.message}
                  </div>
                  <div className="name">{item.name}</div>
                </div>
              </div>
            );
          })}

          {/* <div className=" col-sm-12 col-md-4 ">
            <div className="testimonial-item">
              <div className="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem, itaque! Sapiente at consequatur nisi aliquam, aperiam
                corrupti sint tempore accusantium a sed quisquam consectetur
                adipisci recusandae quo ipsa tenetur placeat illum animi?
                Pariatur minus quidem officiis vel repudiandae sint atque!
              </div>
              <div className="name">Yoseph Birhanu</div>
            </div>
          </div> */}
         
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
