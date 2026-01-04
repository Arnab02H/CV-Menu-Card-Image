"use client";

import { motion } from "framer-motion";
import { ChefHat, ShieldCheck, ArrowRight } from "lucide-react";

interface FounderProps {
    setStep: (step: number) => void;
}

export default function Founder({ setStep }: FounderProps) {
    return (
        <section id="founder" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="founder-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="founder-content"
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Meet the <span className="gradient-text">Visionary</span><br />
                        Behind the Innovation
                    </h2>
                    <div style={{ opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p>Hey, I'm Arnab, Founder & CEO of Linguine AI.</p>
                        <p>My journey began with a simple realization: language should never be a barrier to experiencing the world's diverse culinary treasures. I've dedicated years to blending computer vision with nutrition science to create a companion that understands your food as deeply as you do.</p>
                        <p style={{ fontWeight: 700, color: 'var(--foreground)', borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem', fontStyle: 'italic' }}>
                            "We aren't just translating menus; we're decoding cultural stories and ensuring every meal is a safe, informed, and delightful exploration."
                        </p>
                        <p>Join me in redefining the future of global dining, powered by AI that cares about what's on your plate.</p>
                    </div>
                    <button className="btn-primary" style={{ marginTop: '2rem', padding: '1rem 2.5rem', fontSize: '1rem', borderRadius: '100px' }} onClick={() => {
                        setStep(1);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>
                        Start Your Journey <ArrowRight size={20} />
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="founder-image-container"
                    style={{ position: 'relative' }}
                >
                    {/* Floating Badges */}
                    <div className="founder-badge" style={{ position: 'absolute', top: '15%', right: '-8%', padding: '0.8rem 1.5rem', borderRadius: '100px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '0.6rem', border: '1px solid var(--glass-border)', background: 'var(--card-bg)', backdropFilter: 'blur(12px)', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
                        <ChefHat size={18} className="gradient-text" />
                        <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>Founder & CEO</span>
                    </div>

                    <div className="founder-image-box" style={{ width: '100%', height: '500px', borderRadius: '40px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 30px 100px rgba(0,0,0,0.5)', position: 'relative' }}>
                        <img src="/arnab_profile_pic.jpeg" alt="Arnab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--background) 0%, transparent 30%)', opacity: 0.7 }}></div>
                    </div>

                    <div className="founder-badge" style={{ position: 'absolute', bottom: '15%', left: '-8%', padding: '0.8rem 1.5rem', borderRadius: '100px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '0.6rem', border: '1px solid var(--glass-border)', background: 'var(--card-bg)', backdropFilter: 'blur(12px)', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
                        <ShieldCheck size={18} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>AI Lead Architect</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
