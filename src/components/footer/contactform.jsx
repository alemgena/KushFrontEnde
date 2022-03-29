// import React from 'react';
// import emailjs from 'emailjs-com';

// export default function ContactForm(){
//     function sendEmail(e){
//         e.preventDefault();

//         emailjs.sendForm('service_ue1uayk', e.target, 'user_zbxID1SPlG61lLhaViFVF')
//             .then((result) => {
//                 console.log(result.text);
//              }, (error) => {
//             console.log(error.text);
//         });
//         e.target.reset()
//     }

//     return(
//         <div>
//             <div className="container">
//                 <form onSubmit={sendEmail}>
//                     <div className="row pt-5 mx-auto">
//                         <div className="c0l-8 form-group mx-auto">
//                             <input type="text" className="form-control" placeholder="Name" name="name"/>
//                         </div>
//                         <div className="c0l-8 form-group mx-auto">
//                             <input type="email" className="form-control" placeholder="Email address" name="email"/>
//                         </div>
//                         <div className="c0l-8 form-group mx-auto">
//                             <input type="text" className="form-control" placeholder="Subject" name="subject"/>
//                         </div>
//                         <div className="c0l-8 form-group mx-auto">
//                             <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"/>
//                         </div>
//                         <div className="c0l-8 form-group mx-auto">
//                             <input type="submit" className="btn btn-info" value="send message"></input>
//                         </div>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }