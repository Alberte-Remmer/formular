"use client"
import { useState } from "react";

export default function Formular() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  if (submitted) {
    return <p>Tak for din besked! Jeg vender tilbage hurtigst muligt.</p>;
  }

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
      {/* Netlify kræver dette hidden input */}
      <input type="hidden" name="form-name" value="contact" />

      <label>
        Navn
        <input type="text" name="name" required />
      </label>

      <label>
        Email
        <input type="email" name="email" required />
      </label>

      <label>
        Besked
        <textarea name="message" required />
      </label>

      <button type="submit">Send besked</button>
    </form>
  );
}
