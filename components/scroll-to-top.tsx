"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.5, x: -20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-110 active:scale-95 transition-all group"
                    aria-label="Voltar ao topo"
                >
                    <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={28} />
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10 animate-pulse" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
