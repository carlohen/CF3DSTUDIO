"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Pronto para tirar sua ideia do papel?
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl mb-10">
          Entre em contato conosco e transforme seu projeto em uma peça real com
          impressão 3D.
        </p>

        <a
          href="https://wa.me/5585994282260?text=Olá Carlos! Gostaria de fazer uma encomenda em impressão 3D."
          target="_blank"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-6 rounded-2xl text-lg font-semibold shadow-xl hover:scale-105 transition"
        >
          <MessageCircle size={22} />
          Fazer encomenda agora
        </a>
      </motion.div>
    </section>
  );
}
