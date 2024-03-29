import React from "react";
import "./contact.css";
export default function Contact() {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact Us for more information and get notified when I publish
        something new .
      </p>
      <div className="flex">
        <form className="" action="">
          <div className="flex">
            <label htmlFor="Email">Email Address:</label>
            <input
              required
              type="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea
              placeholder="Massage"
              required
              name=""
              id="message"
            ></textarea>
          </div>
          <button className="submit">Sumbit</button>
        </form>
        <div className="animation border">animation</div>
      </div>
    </section>
  );
}
