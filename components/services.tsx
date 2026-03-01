"use client";

import { motion } from "framer-motion";
import { Box, Cpu, Layers3 } from "lucide-react";

const services = [
  {
    icon: <Cpu size={32} />,
    title: "Modelagem 3D",
    description:
      "Criamos modelos 3D personalizados a partir da sua ideia ou necessidade.",
  },
  {
    icon: <Layers3 size={32} />,
    title: "Prototipagem",
    description:
      "Desenvolvemos protótipos funcionais para testes, validações e ajustes.",
  },
  {
    icon: <Box size={32} />,
    title: "Impressão 3D",
    description:
      "Produzimos peças reais com alta qualidade, precisão e acabamento.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          O que fazemos
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-background/50 backdrop-blur p-8 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
