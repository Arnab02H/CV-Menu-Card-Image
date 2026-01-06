"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, ShieldCheck, ArrowRight, Sparkles, User, Linkedin } from "lucide-react";
import { useState } from "react";

interface FounderProps {
    setStep: (step: number) => void;
}

export default function Founder({ setStep }: FounderProps) {
    const [activeTab, setActiveTab] = useState<'story' | 'vision'>('story');

    return (
        <section id="founder" style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto', overflow: 'visible' }}>
            <div className="founder-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                {/* Text Content Side */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="founder-content"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}
                    >
                        Meet the <span className="gradient-text">Visionary</span><br />
                        Behind the Innovation
                    </motion.h2>

                    {/* LinkedIn Badge */}
                    <motion.a
                        href="https://www.linkedin.com/in/arnab-bera-65a452229/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0.8rem 1.2rem',
                            borderRadius: '16px',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--glass-border)',
                            backdropFilter: 'blur(10px)',
                            marginBottom: '2rem',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            width: 'fit-content',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                        }}
                    >
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--glass-border)' }}>
                            <img src="/arnab_profile_pic.jpeg" alt="Arnab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--foreground)' }}>
                                <span>Arnab Bera</span>
                                <span style={{ width: '1px', height: '12px', background: 'var(--glass-border)' }}></span>
                                <Linkedin size={14} fill="#0077b5" color="#0077b5" />
                                <span style={{ fontSize: '0.85rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 400 }}>1.6k+ followers</span>
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--foreground)', opacity: 0.6, fontWeight: 400 }}>
                                Building LinguineAI • CMI Student
                            </div>
                        </div>
                    </motion.a>

                    {/* Interactive Tabs */}
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)' }}>
                        <button
                            onClick={() => setActiveTab('story')}
                            style={{
                                padding: '0.8rem 1.5rem',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'story' ? '3px solid var(--primary)' : '3px solid transparent',
                                color: activeTab === 'story' ? 'var(--foreground)' : 'var(--muted-foreground)',
                                fontWeight: activeTab === 'story' ? 700 : 500,
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <User size={18} /> The Story
                        </button>
                        <button
                            onClick={() => setActiveTab('vision')}
                            style={{
                                padding: '0.8rem 1.5rem',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'vision' ? '3px solid var(--primary)' : '3px solid transparent',
                                color: activeTab === 'vision' ? 'var(--foreground)' : 'var(--muted-foreground)',
                                fontWeight: activeTab === 'vision' ? 700 : 500,
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <Sparkles size={18} /> The Vision
                        </button>
                    </div>

                    <div style={{ minHeight: '300px', position: 'relative' }}>
                        <AnimatePresence mode="wait">
                            {activeTab === 'story' ? (
                                <motion.div
                                    key="story"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9 }}
                                >
                                    <p>Hey, I'm <span style={{ fontWeight: 700, color: 'var(--primary)' }}>Arnab</span>, Founder of Linguine AI.</p>
                                    <p>My journey began with a simple realization: language should never be a barrier to global cuisine. With Linguine AI, I’m using computer vision and nutrition intelligence to make menus clear, personalized, and accessible for everyone.</p>
                                    <p>Join me in redefining the future of global dining, powered by AI that cares about what's on your plate.</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="vision"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9 }}
                                >
                                    <p>I aim to create a companion that understands your food as deeply as you do.</p>
                                    <motion.p
                                        whileHover={{ x: 5 }}
                                        style={{
                                            fontWeight: 700,
                                            color: 'var(--foreground)',
                                            borderLeft: '4px solid var(--primary)',
                                            paddingLeft: '1.5rem',
                                            fontStyle: 'italic',
                                            background: 'var(--primary-glow)',
                                            padding: '1.5rem',
                                            borderRadius: '0 12px 12px 0'
                                        }}
                                    >
                                        "We aren't just translating menus; we're decoding cultural stories and ensuring every meal is a safe, informed, and delightful exploration."
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                        style={{ marginTop: '1rem', padding: '1rem 2.5rem', fontSize: '1rem', borderRadius: '100px' }}
                        onClick={() => {
                            setStep(1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Start Your Journey <ArrowRight size={20} />
                    </motion.button>
                </motion.div>

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="founder-image-container"
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                >
                    {/* Smaller Floating Badges */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="founder-badge"
                        style={{
                            position: 'absolute',
                            top: '10%',
                            right: '-5%',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '100px',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(255, 255, 255, 0.1)', // More transparent
                            backdropFilter: 'blur(16px)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                        }}
                    >
                        <ChefHat size={16} className="gradient-text" />
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.5px' }}>FOUNDER</span>
                    </motion.div>

                    <div className="founder-image-box" style={{
                        width: '100%',
                        maxWidth: '450px',
                        height: '500px',
                        borderRadius: '32px',
                        overflow: 'hidden',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 20px 80px rgba(0,0,0,0.4)',
                        position: 'relative'
                    }}>
                        <img src="/arnab_profile_pic.jpeg" alt="Arnab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)' }}></div>
                    </div>

                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="founder-badge"
                        style={{
                            position: 'absolute',
                            bottom: '10%',
                            left: '-5%',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '100px',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(16px)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                        }}
                    >
                        <ShieldCheck size={16} color="#10b981" />
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.5px' }}>DATA SCIENTIST</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
