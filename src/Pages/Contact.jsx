import { isVisible } from "@testing-library/user-event/dist/utils";
import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" className="contact-input" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" className="contact-input" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" className="contact-textarea" />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

