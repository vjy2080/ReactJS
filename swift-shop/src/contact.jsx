import React from 'react';

const contact = () => {
    return (
        <>
        
        <div className="container bg-secondary-subtle rounded-5 mt-5 p-5">
  <div className="content">
    <div className="left-side">
      <div className="address details">
        <i className="fas fa-map-marker-alt" />
        <h1 className="text-center text-decoration-underline">Contact-Us</h1>
        <div className="topic fw-bold mt-5">Address</div>
        <div className="text-one">Vavol</div>
        <div className="text-two">Gandhinagar - 382016</div>
      </div>
      <div className="phone details my-5">
        <i className="fas fa-phone-alt" />
        <div className="topic fw-bold">Phone</div>
        <div className="text-one">+91 98 9876 1234</div>
        <div className="text-two">+91 96 9876 1235</div>
      </div>
      <div className="email details my-5">
        <i className="fas fa-envelope" />
        <div className="topic fw-bold">Email</div>
        <div className="text-one">example@gmail.com</div>
        <div className="text-two">info.example@gmail.com</div>
      </div>
    </div>
    <div className="right-side my-5">
      <div className="topic-text fw-bold">Send us a message</div>
      <p>
        If you have any work from me or any types of quries related to my
        tutorial, you can send me message from here. It's my pleasure to help
        you.
      </p>
      <form action="#">
        <div className="input-box  my-2">
          <input
            type="text"
            className="border rounded px-2 border-primary"
            placeholder="Enter your name"
          />
        </div>
        <div className="input-box my-2">
          <input
            type="email"
            className="border rounded px-2 border-primary"
            placeholder="Enter your email"
          />
        </div>
        <div className="input-box message-box"></div>
        <div>
          <div>
            <textarea name="text" id="textarea" cols="80" rows="6" placeholder='Type your massage or query here.' className='rounded border border-primary p-2'></textarea>
          </div>
          <button className="btn btn-primary">Send Now</button>
        </div>
      </form>
    </div>
  </div>
</div>


        </>
    );
};

export default contact;