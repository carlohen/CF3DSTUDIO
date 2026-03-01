"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 pt-32">
        <div className="max-w-5xl w-full text-center">
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
          >
            Transformamos <span className="text-primary">ideias</span>
            <br />
            em soluções <span className="text-primary">reais</span>.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Somos um estúdio especializado em <strong>modelagem, prototipagem e
            impressão 3D</strong>. Criamos peças personalizadas, protótipos
            funcionais e soluções técnicas com foco em precisão, estética e
            funcionalidade.
          </motion.p>

          {/* Botões */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link
              href="/encomenda"
              className="px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:scale-105 transition"
            >
              Fazer Encomenda
            </Link>

            <Link
              href="/catalogo"
              className="px-10 py-4 rounded-2xl border font-semibold text-lg hover:bg-muted transition"
            >
              Ver Catálogo
            </Link>
          </motion.div>

          {/* Texto secundário */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            Impressão 3D sob demanda • Projetos personalizados • Atendimento via WhatsApp
          </motion.div>
        </div>
      </section>
    </main>
  );
}
