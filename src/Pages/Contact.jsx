import { isVisible } from "@testing-library/user-event/dist/utils";
import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <label>
          Name:
            <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
