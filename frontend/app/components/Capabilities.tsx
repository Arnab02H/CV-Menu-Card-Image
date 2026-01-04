"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Search, Plus, Camera, Database, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Capabilities() {
    const [activeCapability, setActiveCapability] = useState(1);

    const features = [
        {
            id: 0,
            title: "Menu Language Confusing? Just upload one picture",
            desc: "Snap a photo with Linguine AI, and our AI then analyzes and translate it instantly into your own language.",
            icon: <Camera size={20} />
        },
        {
            id: 1,
            title: "Customize Your Food Preferences",
            desc: "Choose cuisine, dietary constraints, and spice level for smarter menu analysis.",
            icon: <Database size={20} />
        },
        {
            id: 2,
            title: "Progress Tracking & AI suggestions",
            desc: "Monitor your nutrition goals. Get personalized AI suggestions to stay on track and optimize your diet.",
            icon: <TrendingUp size={20} />
        }
    ];

    return (
        <section id="capabilities" style={{ padding: '5rem 2rem 6rem 2rem', background: 'var(--glass-bg)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.03em' }}
                    >
                        What does <span className="gradient-text">Linguine AI</span> include?
                    </motion.h2>
                </div>

                <div className="capabilities-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)', gap: '3rem', alignItems: 'center' }}>
                    {/* Left Content: Food Database Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="capabilities-mockup"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', perspective: '1000px' }}
                    >
                        <motion.div
                            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
                            style={{
                                width: '260px',
                                height: '480px',
                                background: '#000',
                                borderRadius: '40px',
                                border: '2px solid #222',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.3), inset 0 0 0 7px #111',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ position: 'absolute', inset: '10px', borderRadius: '40px', overflow: 'hidden', background: '#fff' }}>
                                <AnimatePresence mode="wait">
                                    {activeCapability === 0 && (
                                        <motion.div
                                            key="scan"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            style={{ height: '100%', position: 'relative', background: '#000' }}
                                        >
                                            <div style={{ position: 'absolute', inset: 0, opacity: 0.6, background: 'url("https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&q=80") center/cover' }}></div>
                                            <motion.div
                                                animate={{ top: ['10%', '90%', '10%'] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: 'var(--primary)', boxShadow: '0 0 15px var(--primary)', zIndex: 10 }}
                                            />
                                            <div style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white' }}></div>
                                                </div>
                                                <span style={{ color: 'white', fontSize: '0.8rem', fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>SCANNING MENU...</span>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeCapability === 1 && (
                                        <motion.div
                                            key="pref"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            style={{ height: '100%', padding: '3.5rem 1.5rem', background: '#fff' }}
                                        >
                                            <h4 style={{ color: '#000', fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Preferences</h4>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                                {['Cuisine', 'Spice Level', 'Dietary'].map((label, idx) => (
                                                    <div key={label}>
                                                        <p style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{label}</p>
                                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                            {[1, 2, 3].map(i => (
                                                                <div key={i} style={{ padding: '0.4rem 0.8rem', borderRadius: '100px', background: i === 1 ? 'var(--primary)' : '#f1f5f9', color: i === 1 ? '#fff' : '#64748b', fontSize: '0.7rem', fontWeight: 600 }}>Option {i}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div style={{ marginTop: '2.5rem', width: '100%', padding: '0.8rem', borderRadius: '12px', background: 'var(--primary)', color: '#fff', textAlign: 'center', fontWeight: 700, fontSize: '0.9rem' }}>
                                                Save Preferences
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeCapability === 2 && (
                                        <motion.div
                                            key="results"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            style={{ height: '100%', padding: '3.5rem 1.2rem', background: '#f8fafc' }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                                                <h4 style={{ color: '#000', fontSize: '1.1rem', fontWeight: 800 }}>Analysis</h4>
                                                <TrendingUp size={18} color="var(--primary)" />
                                            </div>
                                            {[
                                                { name: 'Spicy Ramen', score: '9.5', color: '#10b981' },
                                                { name: 'Chicken Tacos', score: '8.2', color: '#10b981' },
                                                { name: 'Garden Salad', score: '9.8', color: '#10b981' }
                                            ].map((item, i) => (
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    key={i}
                                                    style={{ padding: '0.9rem', background: '#fff', borderRadius: '14px', marginBottom: '0.8rem', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                                >
                                                    <div>
                                                        <p style={{ color: '#000', fontSize: '0.85rem', fontWeight: 700 }}>{item.name}</p>
                                                        <p style={{ color: '#64748b', fontSize: '0.65rem' }}>Verified Safe</p>
                                                    </div>
                                                    <div style={{ color: item.color, fontWeight: 800, fontSize: '0.9rem' }}>{item.score}</div>
                                                </motion.div>
                                            ))}
                                            <div style={{ marginTop: '1rem', padding: '1rem', borderRadius: '14px', background: 'var(--primary-glow)', border: '1px solid var(--primary)', color: 'var(--primary)', fontSize: '0.75rem', lineHeight: 1.4, fontWeight: 600 }}>
                                                AI Tip: This menu has 3 high-protein options matching your profile.
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div style={{ position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', width: '90px', height: '22px', background: 'black', borderRadius: '11px', zIndex: 100 }}></div>
                        </motion.div>

                        {/* Pagination Dots Below the Phone */}
                        <div style={{
                            display: 'flex',
                            gap: '12px',
                            marginTop: '1.5rem'
                        }}>
                            {[0, 1, 2].map(idx => (
                                <motion.div
                                    key={idx}
                                    onClick={() => setActiveCapability(idx)}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        background: activeCapability === idx ? '#4f46e5' : 'rgba(255, 255, 255, 0.2)',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s ease',
                                        boxShadow: activeCapability === idx ? '0 0 10px rgba(79, 70, 229, 0.4)' : 'none'
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content: Feature Cards */}
                    <div className="capabilities-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        {features.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                onClick={() => setActiveCapability(card.id)}
                                className={`capability-card ${activeCapability === card.id ? 'active' : ''}`}
                                style={{
                                    padding: '1.2rem 1.5rem',
                                    borderRadius: '16px',
                                    background: activeCapability === card.id ? 'var(--card-bg)' : 'transparent',
                                    border: activeCapability === card.id ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                                    transition: 'border 0.3s ease, background 0.3s ease',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {activeCapability === card.id && (
                                    <motion.div
                                        layoutId="active-bg"
                                        style={{ position: 'absolute', inset: 0, background: 'var(--primary-glow)', zIndex: 0 }}
                                    />
                                )}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{
                                        padding: '0.6rem',
                                        borderRadius: '10px',
                                        background: activeCapability === card.id ? 'var(--primary)' : 'var(--glass-bg)',
                                        color: activeCapability === card.id ? 'white' : 'var(--foreground)',
                                        opacity: activeCapability === card.id ? 1 : 0.5
                                    }}>
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.3rem', color: 'var(--foreground)' }}>{card.title}</h4>
                                        <p style={{ fontSize: '0.8rem', lineHeight: 1.5, opacity: activeCapability === card.id ? 0.8 : 0.5, color: 'var(--foreground)' }}>{card.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
