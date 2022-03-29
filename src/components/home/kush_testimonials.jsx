import { Card } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../utils/url";

const KushTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    axios.get(`${url}admin/getAllTestimonial`).then(
      (response) => {
        console.log(response);
        if (response.data.result) {
          if (response.data.result.length > 0) {
            // console.log(response.data.result);
            setTestimonials(response.data.result);
            setSelectedTestimonial(response.data.result[0]);
            console.log(testimonials);
          }
        }
      },
      (error) => {}
    );
  }, []);

  return (
    <div className="kush-testimonials">
      <div className="testimonial">
        {selectedTestimonial && (
          <>
           
            <div className="name">{selectedTestimonial.name}</div>
            <div className="content">
              {selectedTestimonial.message}
            </div>
          </>
        )}
      </div>
      <div className="navigation">
        {testimonials && testimonials.map((item) => {
          return (
            <div
              onClick={() => {
                setSelectedTestimonial(item);
              }}
              className={
                selectedTestimonial && selectedTestimonial.id === item.id
                  ? "nav-item nav-item-active"
                  : "nav-item"
              }
            ></div>
          );
        })}
       
      </div>
    </div>
  );
};
export default KushTestimonials;
