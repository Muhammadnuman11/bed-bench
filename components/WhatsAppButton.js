export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/923212111134?text=Hello%20Bed%20Bench%2C%20I%27d%20like%20to%20enquire%20about%20your%20furniture."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Bed Bench on WhatsApp"
    >
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
      <svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"><path d="M27.1 4.8A15.6 15.6 0 0 0 16.1.2C7.5.2.5 7.2.5 15.8c0 2.7.7 5.3 2 7.6L.4 31.3l8.1-2.1a15.6 15.6 0 0 0 7.5 1.9h.1c8.6 0 15.6-7 15.6-15.6 0-4.2-1.6-8.1-4.6-10.7ZM16.1 28.5a13 13 0 0 1-6.7-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5a13 13 0 1 1 11 6Zm7.1-9.7c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.3-.4.3-.8.1-2.2-1.1-3.7-2-5.1-4.6-.4-.7.4-.7 1-2 .1-.2 0-.5 0-.6l-1.2-2.9c-.3-.8-.6-.7-.8-.7h-.7c-.3 0-.8.1-1.2.6-.4.4-1.6 1.5-1.6 3.8 0 2.2 1.6 4.4 1.8 4.7.2.3 3.2 4.9 7.8 6.8 2.9 1.2 4 .9 4.8.8.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z" /></svg>
    </a>
  );
}
