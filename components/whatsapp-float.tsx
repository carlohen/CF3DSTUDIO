"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const numero = "5585994282260";

  return (
    <a
      href={`https://wa.me/${numero}?text=Olá Carlos! Gostaria de fazer uma encomenda em impressão 3D.`}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
    >
      <MessageCircle size={28} />
    </a>
  );
}
