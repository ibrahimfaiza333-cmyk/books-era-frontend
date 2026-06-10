"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923203005234"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}