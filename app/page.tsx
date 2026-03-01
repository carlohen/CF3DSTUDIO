"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Layers3,
  Box,
  Zap,
  UploadCloud,
  ClipboardCheck,
  Truck,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="relative bg-background overflow-hidden">
      {/* BACKGROUND TECH GRID & GLOWS */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:32px_32px]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          style={{ opacity: opacityHero }}
          className="max-w-6xl w-full text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold mb-8"
          >
            <Sparkles size={16} />
            <span>A Revolução da Fabricação Digital</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            Ideias ganham <span className="relative inline-block">
              <span className="text-primary text-glow-primary">forma</span>
              <div className="absolute -inset-x-4 -inset-y-2 bg-primary/20 blur-2xl -z-10 rounded-full" />
            </span>.
            <br />
            Projetos ganham <span className="relative inline-block">
              <span className="text-blue-500 shadow-blue-500/50 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">vida</span>
            </span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Modelagem, prototipagem e impressão 3D profissional. Transformamos sua visão
            em peças reais com <span className="text-foreground font-semibold">precisão industrial</span> e agilidade digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link
              href="/encomenda"
              className="group flex items-center justify-center gap-2 px-12 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(var(--primary),0.3)]"
            >
              Fazer Encomenda
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/catalogo"
              className="px-12 py-5 rounded-2xl border-2 border-primary/20 font-bold text-xl hover:bg-primary/5 transition-all"
            >
              Ver Catálogo
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating elements or Video background */}
        <div className="absolute inset-0 -z-20 opacity-30 select-none">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ y: yParallax }}
          >
            <source src="/galeria/video-hero.mp4" type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background" />
        </div>
      </section>

      {/* MÉTRICAS DE IMPACTO */}
      <section className="py-24 px-6 border-y border-white/5 bg-muted/20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { value: "+100", label: "Projetos Entregues", icon: <CheckCircle2 className="text-primary" /> },
            { value: "Alta", label: "Precisão & Acabamento", icon: <Cpu className="text-blue-500" /> },
            { value: "100%", label: "Personalizado", icon: <Layers3 className="text-primary" /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-10 rounded-[2rem] flex flex-col items-center text-center group hover:bg-primary/5 transition-all"
            >
              <div className="mb-6 p-4 rounded-2xl bg-background border border-white/5 shadow-inner">
                {item.icon}
              </div>
              <div className="text-6xl font-black mb-2 tracking-tighter bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                {item.value}
              </div>
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEÇÃO: COMO FUNCIONA (SISTEMA ONLINE) */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Seu projeto pronto em <span className="text-primary">4 passos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvemos um fluxo digital inteligente para que você tenha sua peça em mãos com agilidade total.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1 */}
            <div className="relative p-8 rounded-3xl border border-white/5 bg-muted/10 group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-6 shadow-lg">01</div>
              <UploadCloud className="mb-4 text-primary" size={32} />
              <h3 className="text-2xl font-bold mb-2">Upload 3D</h3>
              <p className="text-muted-foreground leading-relaxed">Envie seu arquivo STL, OBJ ou STEP diretamente na plataforma.</p>
            </div>

            {/* Step 2 */}
            <div className="relative p-8 rounded-3xl border border-white/5 bg-muted/10 group hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg">02</div>
              <ClipboardCheck className="mb-4 text-blue-500" size={32} />
              <h3 className="text-2xl font-bold mb-2">Orçamento</h3>
              <p className="text-muted-foreground leading-relaxed">Nosso sistema gera o valor e os detalhes técnicos em segundos.</p>
            </div>

            {/* Step 3 */}
            <div className="relative p-8 rounded-3xl border border-white/5 bg-muted/10 group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-6 shadow-lg">03</div>
              <Zap className="mb-4 text-primary" size={32} />
              <h3 className="text-2xl font-bold mb-2">Produção</h3>
              <p className="text-muted-foreground leading-relaxed">Iniciamos a impressão imediata com tecnologia FDM profissional.</p>
            </div>

            {/* Step 4 */}
            <div className="relative p-8 rounded-3xl border border-white/5 bg-muted/10 group hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg">04</div>
              <Truck className="mb-4 text-blue-500" size={32} />
              <h3 className="text-2xl font-bold mb-2">Entrega</h3>
              <p className="text-muted-foreground leading-relaxed">Receba seu projeto em casa ou na empresa com toda segurança.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS PRO */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] border-2 border-primary/20 bg-primary/5 p-12 overflow-hidden flex items-center justify-center">
              <motion.div
                animate={{
                  rotateY: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <Box size={200} className="text-primary opacity-20" />
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-16">
                <h3 className="text-4xl font-black mb-4 tracking-tighter">Qualidade que você sente.</h3>
                <p className="text-lg text-muted-foreground">Cada camada é depositada com precisão micrométrica, garantindo durabilidade industrial.</p>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Hardware Profissional",
                desc: "Utilizamos equipamentos de última geração para garantir peças sem deformações e com acabamento superior.",
                icon: <Cpu size={28} className="text-blue-500" />
              },
              {
                title: "Materiais Especiais",
                desc: "De PLA biodegradável a materiais técnicos de alta performance como ABS, PETG e Nylon.",
                icon: <Layers3 size={28} className="text-primary" />
              },
              {
                title: "Suporte Especializado",
                desc: "Análise técnica de arquivos para garantir a viabilidade e otimização da sua impressão.",
                icon: <Box size={28} className="text-blue-500" />
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-8 rounded-3xl border border-white/5 hover:bg-muted/30 transition-colors"
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 tracking-tight">{feature.title}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - IMPACTO MÁXIMO */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-16 md:p-24 rounded-[4rem] bg-gradient-to-br from-primary via-blue-700 to-indigo-900 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:40px_40px]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 text-center text-white">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white drop-shadow-lg"
              >
                Pronto para materializar <br />
                o seu <span className="underline decoration-white/30">próximo projeto</span>?
              </motion.h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-12 font-medium">
                Transformamos o digital em físico com velocidade recorde.
                Sua inovação começa aqui.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/encomenda"
                  className="bg-white text-primary px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition shadow-2xl shadow-black/20"
                >
                  Fazer Encomenda Agora
                </Link>
                <Link
                  href="/whatsapp"
                  className="bg-black/20 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition"
                >
                  Falar no WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
