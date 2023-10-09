import React from 'react';

const ContactUs = () => {
  return (
    <div className="container px-5 py-2">
      <div className="row ">
        <div className="col">

        <h1 className="text-center text-primary my-3">Contact-Us</h1>

          {/* <h2 className='my-3 text-center text-primary text-decoration-underline'>Contact Us</h2> */}
          <p className='mt-5'>We'd love to hear from you!</p>
          <p className='my-3'>Reach out using the contact information below:</p>

          <div className="my-5">
            <h3 className="my-4 text-decoration-underline">Contact Information</h3>
            <p className="my-4"><b> Email: </b> admin@gyansutra.com</p>
            <p className="my-4"><b> Phone: </b> +91-123-456-7890</p>
            <p className="my-4"><b> Address: </b> ATTN: CEO David Kenner <br />
              Gyansutra Institute <br />
              85 Bradford Lane <br />
              Vincentown, NJ 08120</p>
          </div>

          <div className="contact-form">
            <h5 className='text-center text-primary text-decoration-underline my-5'>Let us know if any query </h5>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
