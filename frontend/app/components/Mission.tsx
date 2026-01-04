"use client";

import { motion } from "framer-motion";
import { Languages, ShieldCheck, Globe } from "lucide-react";

export default function Mission() {
    const features = [
        { title: "Cultural Accuracy", icon: Languages, desc: "We don't just translate words; we translate the heritage and preparation methods behind every dish." },
        { title: "Health First", icon: ShieldCheck, desc: "Instant detection of allergens and dietary conflicts tailored to your personal health profile." },
        { title: "Global Reach", icon: Globe, desc: "Supporting over 150 languages across the most remote and diverse culinary regions in the world." }
    ];

    return (
        <section id="our-mission" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '1.5rem' }}
                >
                    Our <span className="gradient-text">Mission</span>
                </motion.h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', opacity: 0.6, fontSize: '1.1rem', lineHeight: 1.6 }}>
                    We believe that food is a universal language, but menus shouldn't be a puzzle.
                    Linguine AI aims to empower every traveler and food enthusiast to explore
                    local cuisines with confidence, safety, and cultural appreciation.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <feature.icon size={26} color="var(--primary)" />
                        </div>
                        <h3 style={{ fontSize: '1.4rem' }}>{feature.title}</h3>
                        <p style={{ opacity: 0.6, fontSize: '0.95rem', lineHeight: 1.6 }}>{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
