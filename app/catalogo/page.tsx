"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Box,
  Layers3,
  Cpu,
  Shapes,
  UploadCloud,
  Zap,
  Truck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from "lucide-react";

const categorias = [
  {
    icon: <Box size={40} className="text-primary" />,
    title: "Peças Personalizadas",
    description: "Peças únicas desenvolvidas sob medida para colecionadores, entusiastas e inventores.",
    gradient: "from-primary/20 to-transparent"
  },
  {
    icon: <Layers3 size={40} className="text-blue-500" />,
    title: "Protótipos Funcionais",
    description: "Valide sua engenharia com protótipos de alta fidelidade antes da produção em massa.",
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    icon: <Cpu size={40} className="text-primary" />,
    title: "Projetos Técnicos",
    description: "Componentes industriais, gabaritos e soluções mecânicas com precisão dimensional.",
    gradient: "from-primary/20 to-transparent"
  },
  {
    icon: <Shapes size={40} className="text-blue-500" />,
    title: "Decoração & Criativos",
    description: "Design contemporâneo para ambientes, eventos e brindes corporativos exclusivos.",
    gradient: "from-blue-500/20 to-transparent"
  },
];

export default function Catalogo() {
  return (
    <main className="relative bg-background overflow-hidden">
      {/* TECH BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold mb-8"
          >
            <Sparkles size={16} />
            <span>Fabricação Digital Sob Demanda</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8"
          >
            Projetos que saem da tela <br />
            e ganham <span className="text-primary text-glow-primary">forma</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Explore nossa expertise em manufatura avançada. Oferecemos soluções completas
            para transformar arquivos digitais em objetos físicos de alta performance.
          </motion.p>
        </div>
      </section>

      {/* GRID DE CATEGORIAS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-10 rounded-[2.5rem] border border-white/5 bg-muted/5 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-2xl bg-background/50 border border-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{cat.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{cat.description}</p>
                <Link
                  href={`/encomenda?categoria=${encodeURIComponent(cat.title)}`}
                  className="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform"
                >
                  Solicitar Orçamento
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEÇÃO COMO FUNCIONA */}
      <section className="py-32 px-6 bg-muted/20 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Processo de Fabricação Agilizado</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <UploadCloud />, title: "Envie seu Projeto", step: "01" },
              { icon: <CheckCircle2 />, title: "Orçamento Automático", step: "02" },
              { icon: <Zap />, title: "Produção Pro", step: "03" },
              { icon: <Truck />, title: "Envio Rápido", step: "04" },
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-8 flex justify-center">
                  <span className="absolute -top-4 -right-2 text-6xl font-black opacity-5 text-primary group-hover:opacity-20 transition-opacity">
                    {step.step}
                  </span>
                  <div className="w-20 h-20 rounded-3xl bg-background border border-white/10 flex items-center justify-center text-primary shadow-xl group-hover:border-primary/50 transition-all">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-primary" />,
                title: "Alta Precisão",
                desc: "Equipamentos calibrados para tolerâncias mínimas e encaixes perfeitos."
              },
              {
                icon: <Clock className="text-blue-500" />,
                title: "Produção Sob Demanda",
                desc: "Desde peças únicas até pequenas séries industriais com agilidade."
              },
              {
                icon: <ShieldCheck className="text-primary" />,
                title: "Materiais Técnicos",
                desc: "Ampla gama de polímeros industriais para diversas aplicações."
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-muted/10">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-r from-primary to-blue-600 p-1 bg-grid-white/[0.1]">
          <div className="bg-background rounded-[2.9rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.03] select-none pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">Pronto para dar vida à sua ideia?</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto relative z-10">
              Não importa a complexidade, nossa equipe está pronta para materializar seu projeto com a melhor tecnologia do mercado.
            </p>
            <Link
              href="/encomenda"
              className="relative z-10 inline-flex items-center gap-3 px-12 py-5 rounded-2xl bg-primary text-primary-foreground font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(var(--primary),0.2)]"
            >
              Solicitar Orçamento Grátis
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
