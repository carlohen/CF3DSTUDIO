import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "CF3D Studio | Impressão 3D e Prototipagem",
  description:
    "Estúdio especializado em modelagem, prototipagem e impressão 3D. Transformamos ideias em objetos reais e personalizados.",
  icons: {
    icon: "/assets/logo.jpg",
    apple: "/assets/logo.jpg",
  },
  openGraph: {
    title: "CF3D Studio",
    description:
      "Impressão 3D profissional, prototipagem e soluções personalizadas.",
    images: ["/galeria/og-image.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="pt-16">{children}</main>
          <WhatsAppFloat />
          <ScrollToTop />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
