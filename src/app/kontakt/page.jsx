import { sendMessage } from "../actions/sendMessage";

export default function Kontakt() {
  return (
    <div>
      <h1>Kontakt mig</h1>

      <form action={sendMessage}>
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
    </div>
  );
}
