import React from 'react';

const ContactUs = () => {
  return (
    <div className="container my-5">
      <h2 className='my-3 text-center text-warning text-decoration-underline'>Contact Us</h2>
      <p>We'd love to hear from you! Reach out using the contact information below:</p>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p><b> Email: </b> admin@gyansutra.com</p>
        <p><b> Phone: </b> +91-123-456-7890</p>
        <p><b> Address: </b> ATTN: CEO David Kenner <br />
          Gyansutra Institute <br />
          85 Bradford Lane <br />
          Vincentown, NJ 08120</p>
      </div>

      <div className="contact-form">
        <h3 className='text-center text-warning text-decoration-underline'>Contact Form</h3>
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
  );
};

export default ContactUs;
