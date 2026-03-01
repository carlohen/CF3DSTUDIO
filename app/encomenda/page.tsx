"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Send,
  Settings,
  Monitor,
  Ruler,
  Palette,
  Box,
  Calendar,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  UploadCloud
} from "lucide-react";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function EncomendaContent() {
  const searchParams = useSearchParams();
  const categoriaInicial = searchParams.get("categoria") || "Peça Personalizada";

  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    tipo: categoriaInicial,
    tamanho: "",
    cor: "",
    material: "PLA",
    prazo: "",
    detalhes: ""
  });

  const numeroWhatsApp = "5585994282260";

  const enviarWhatsApp = () => {
    const mensagem = `🚀 *Novo Projeto - CF 3D Studio* \n\n` +
      `*Nome:* ${form.nome}\n` +
      `*WhatsApp:* ${form.whatsapp}\n` +
      `*Tipo:* ${form.tipo}\n` +
      `*Tamanho:* ${form.tamanho}\n` +
      `*Cor:* ${form.cor}\n` +
      `*Material:* ${form.material}\n` +
      `*Prazo:* ${form.prazo}\n\n` +
      `*Detalhes:* \n${form.detalhes}`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, "_blank");
  };

  return (
    <main className="relative bg-background overflow-hidden min-h-screen">
      {/* BACKGROUND TECH */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold mb-6"
            >
              <Sparkles size={16} />
              <span>Orçamento Inteligente</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 underline decoration-primary/20">
              Materialize seu <span className="text-primary text-glow-primary">Projeto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Forneça os detalhes técnicos abaixo para que nossa equipe possa analisar e
              validar a viabilidade da sua impressão com precisão industrial.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* FORMULÁRIO (COLUNA 7) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-8 glass p-8 md:p-12 rounded-[3rem] border-white/5 shadow-2xl space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full bg-background/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full bg-background/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Tipo de Projeto</label>
                  <select
                    className="w-full bg-background/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none"
                    value={form.tipo}
                    onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                  >
                    <option>Peça Personalizada</option>
                    <option>Protótipo Funcional</option>
                    <option>Projeto Técnico</option>
                    <option>Decoração & Criativos</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Material Preferencial</label>
                  <select
                    className="w-full bg-background/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none"
                    value={form.material}
                    onChange={(e) => setForm({ ...form, material: e.target.value })}
                  >
                    <option>PLA (Biodegradável)</option>
                    {/* <option>ABS (Alta Resistência)</option>
                    <option>PETG (Versátil)</option>
                    <option>Nylon (Industrial)</option>
                    <option>Flexível (TPU)</option> */}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Ruler size={14} /> Tamanho (cm)
                  </label>
                  <input
                    type="text"
                    placeholder="ex: 10x10x5"
                    className="w-full bg-background/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    value={form.tamanho}
                    onChange={(e) => setForm({ ...form, tamanho: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Palette size={14} /> Cor
                  </label>
                  <input
                    type="text"
                    placeholder="Sua cor"
                    className="w-full bg-background/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    value={form.cor}
                    onChange={(e) => setForm({ ...form, cor: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Calendar size={14} /> Prazo
                  </label>
                  <input
                    type="text"
                    placeholder="Urgente / Sem pressa"
                    className="w-full bg-background/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    value={form.prazo}
                    onChange={(e) => setForm({ ...form, prazo: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-8 rounded-2xl border-2 border-dashed border-white/10 bg-muted/5 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors">
                  <UploadCloud size={40} className="text-muted-foreground mb-4 group-hover:text-primary transition-colors" />
                  <p className="font-bold text-lg mb-1">Anexar Arquivo 3D (Opcional)</p>
                  <p className="text-sm text-muted-foreground">Até 50MB (STL, OBJ, STEP, 3MF)</p>
                  <p className="mt-4 text-xs opacity-50 italic">Simulação: você enviará o arquivo após o primeiro contato.</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Descrição do Pedido / Observações</label>
                <textarea
                  rows={5}
                  placeholder="Conte-nos mais sobre a funcionalidade da peça, acabamento desejado..."
                  className="w-full bg-background/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  value={form.detalhes}
                  onChange={(e) => setForm({ ...form, detalhes: e.target.value })}
                />
              </div>

              <button
                onClick={enviarWhatsApp}
                className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground py-6 rounded-3xl font-black text-2xl hover:scale-[1.02] transition-all shadow-[0_0_50px_rgba(var(--primary),0.3)] active:scale-95"
              >
                <Send size={24} />
                Gerar Orçamento Agora
              </button>
            </motion.div>

            {/* BARRA LATERAL (COLUNA 5) */}
            <div className="lg:col-span-4 space-y-6">
              {[
                {
                  icon: <Zap className="text-primary" />,
                  title: "Orçamento Rápido",
                  desc: "Validamos as especificações técnicas em tempo recorde."
                },
                {
                  icon: <ShieldCheck className="text-blue-500" />,
                  title: "Peças Funcionais",
                  desc: "Material e densidade otimizados para a aplicação da peça."
                },
                {
                  icon: <CheckCircle2 className="text-primary" />,
                  title: "Tecnologia Industrial",
                  desc: "Impressoras profissionais calibradas para o máximo acabamento."
                },
                {
                  icon: <Box className="text-blue-500" />,
                  title: "Suporte Técnico",
                  desc: "Dúvidas sobre o projeto? Nossa equipe auxilia na validação."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                  className="p-6 rounded-3xl border border-white/5 bg-muted/10 flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="p-8 rounded-[2.5rem] bg-primary/10 border border-primary/20 text-center"
              >
                <MessageCircle size={32} className="mx-auto text-primary mb-4" />
                <h4 className="font-bold text-xl mb-2">Suporte via WhatsApp</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Se preferir, pode enviar sua dúvida diretamente para nosso atendimento humano.
                </p>
                <a href={`https://wa.me/${numeroWhatsApp}`} className="text-primary font-bold hover:underline">Falar com especialista</a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 px-6 border-t border-white/5 bg-muted/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8 tracking-tighter">Não tem o arquivo 3D pronto?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Nós também oferecemos serviços de **modelagem e design industrial**.
            Podemos criar o arquivo para você a partir de desenhos ou ideias.
          </p>
          <Link href="/sobre" className="inline-flex items-center gap-2 font-bold p-4 hover:bg-primary/5 rounded-2xl transition-all">
            Conheça mais sobre nossa startup <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function Encomenda() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <EncomendaContent />
    </Suspense>
  );
}
