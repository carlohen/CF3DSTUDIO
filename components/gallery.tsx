"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/printer4.jpg",
    "/printer5.jpg",
    "/printer6.jpg",
];

export default function Gallery() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Impressão 3D em ação
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-2xl border group"
                        >
                            <Image
                                src={src}
                                alt="Impressora 3D em funcionamento"
                                width={600}
                                height={400}
                                className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
