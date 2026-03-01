"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  ShieldCheck,
  BarChart3,
  UploadCloud,
  ClipboardCheck,
  Truck,
  Users
} from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: <Zap className="text-primary" size={32} />,
    title: "AGILIDADE",
    description: "Orçamento instantâneo e produção iniciada imediatamente após a aprovação. Processos 100% otimizados com automação industrial.",
  },
  {
    icon: <ShieldCheck className="text-primary" size={32} />,
    title: "QUALIDADE",
    description: "Hardware de padrão profissional com tecnologia FDM de alta resolução. Controle rigoroso de qualidade em cada camada impressa.",
  },
  {
    icon: <BarChart3 className="text-primary" size={32} />,
    title: "CUSTO-BENEFÍCIO",
    description: "Preços competitivos para peças de alta durabilidade. Prontos para escalar de protótipos únicos até lotes de 10.000 unidades.",
  },
];

const steps = [
  {
    icon: <UploadCloud size={24} />,
    label: "Upload 3D",
    desc: "Envie seu arquivo na plataforma",
  },
  {
    icon: <ClipboardCheck size={24} />,
    label: "Orçamento Instantâneo",
    desc: "Preço gerado em segundos",
  },
  {
    icon: <Truck size={24} />,
    label: "Acompanhamento",
    desc: "Status em tempo real",
  },
];

export default function Sobre() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero Section - Inovação e Fundação */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider uppercase border border-primary/30 bg-primary/10 text-primary rounded-full">
              Fundada em 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              A Nova Era da <br />
              <span className="text-primary">Manufatura Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A CF3DSTUDIO nasceu para romper as barreiras entre a ideia e o objeto físico.
              Somos uma startup tech industrial focada em democratizar a manufatura avançada através de
              automação, inteligência e tecnologia de ponta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção de Automação - Diferencial Tech */}
      <section className="px-6 py-24 bg-muted/30 border-y">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tecnologia Automatizada, <br />
                <span className="text-primary">Resultados Instantâneos.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Esqueça a espera por e-mails de orçamento. Desenvolvemos um ecossistema online
                exclusivo para que seu projeto não pare um segundo sequer.
              </p>

              <ul className="space-y-6">
                {steps.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{step.label}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl border bg-background/50 backdrop-blur p-8 overflow-hidden flex items-center justify-center group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                <Cpu size={240} className="text-primary/10 group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-16 h-1 bg-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Área do Cliente</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Acompanhe cada etapa da produção em tempo real através da sua conta.
                    Transparência industrial de ponta a ponta.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Quem Atendemos */}
      <section className="px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Soluções para Todos os Setores</h2>
            <p className="text-muted-foreground">Estrategicamente posicionados para atender do entusiasta à grande indústria.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Users size={24} />, label: "Pessoas Físicas" },
              { icon: <BarChart3 size={24} />, label: "Empresas" },
              { icon: <Cpu size={24} />, label: "Instituições de Ensino" },
              { icon: <ShieldCheck size={24} />, label: "Projetos Industriais" },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border bg-background hover:bg-muted/50 transition">
                <div className="flex justify-center mb-4 text-primary opacity-70">
                  {item.icon}
                </div>
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares Estratégicos */}
      <section className="px-6 py-32 bg-background relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 rounded-3xl border bg-muted/20 backdrop-blur-sm hover:border-primary/50 transition"
              >
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-4 tracking-wider">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-32 text-center">
        <div className="max-w-3xl mx-auto p-12 rounded-[32px] bg-primary text-primary-foreground relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

          <h2 className="text-4xl font-extrabold mb-6">Pronto para Projetar o Futuro?</h2>
          <p className="text-lg opacity-90 mb-10">
            Faça parte da revolução industrial 4.0. Upload seu arquivo agora e transforme sua visão em realidade em questão de horas.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/encomenda"
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition shadow-lg"
            >
              Orçamento Online Agora
            </Link>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Tecnologia Nacional • Qualidade Industrial • Entrega em Todo o Brasil
        </p>
      </section>
    </main>
  );
}
