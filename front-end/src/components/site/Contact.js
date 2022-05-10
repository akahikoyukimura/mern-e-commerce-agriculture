import React from "react";
import emailjs from 'emailjs-com';

function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1nh1aef', 'template_2l2kf6n', e.target, 'T70Y-IeRUXZvcUPLs')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <>
      <div className="container-fluid bg-success py-5 ">
        <div className="col-md-6 m-auto text-center text-white">
          <h1 className="h1">Contact Us</h1>
          <p>
          We are always listening to our customers 24h/24h. Do not hesitate to contact us for your feedback
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" role="form" onSubmit={sendEmail}>
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label for="inputname">Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label for="inputemail">Email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="inputsubject">Subject</label>
              <input
                type="text"
                className="form-control mt-1"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <label for="inputmessage">Message</label>
              <textarea
                className="form-control mt-1"
                id="message"
                name="message"
                placeholder="Message"
                rows="8"
              ></textarea>
            </div>
            <div className="row">
              <div className="col text-end mt-2">
                <button type="submit"  className="categorie-shop" style={{ border:'none' }}>
                  Let’s Talk
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
