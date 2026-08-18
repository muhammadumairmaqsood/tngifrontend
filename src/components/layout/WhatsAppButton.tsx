import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=+923211115950";

export const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button animate-pulse-ring"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
};
