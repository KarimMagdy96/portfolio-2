import React from "react";
import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import contactAnimation from "../../../public/animation/contactUs.json";
import { ValidationError, useForm } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("xeqyrdlr");

  return (
    <section id="contact" className="contact-us ">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Me
      </h1>
      <p className="sub-title">
        Contact Us for more information and get notified when I publish
        something new .
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex ">
        <form
          onSubmit={handleSubmit}
          style={{ flexGrow: 1 }}
          className=""
          action=""
        >
          <div className="flex">
            <label htmlFor="Email">Email Address:</label>
            <input
              required
              name="email"
              type="email"
              id="email"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea
              placeholder="Massage"
              required
              name="message"
              id="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Sending..." : "Sumbit"}
          </button>
          {state.succeeded && (
            <h2
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 55 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌.
            </h2>
          )}
        </form>
        <div className="animation ">
          <Lottie
            className="contact-Animation"
            style={{ width: 400 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}
