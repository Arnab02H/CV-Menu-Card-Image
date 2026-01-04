"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Search, Plus, Camera, Database, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Capabilities() {
    const [activeCapability, setActiveCapability] = useState(1);

    const features = [
        {
            id: 0,
            title: "Track Your Food With Just a Picture",
            desc: "Snap a photo with Linguine AI, and our AI then analyzes and breaks down your meal to determine calories and safety.",
            icon: <Camera size={20} />
        },
        {
            id: 1,
            title: "Search Our Database of over 1 million foods",
            desc: "Quickly find and log foods from our library. Search by name, brand, or scan barcodes for instant info.",
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

                <div className="capabilities-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3rem', alignItems: 'center' }}>
                    {/* Left Content: Food Database Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="capabilities-mockup"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{
                            width: '260px',
                            height: '480px',
                            background: '#000',
                            borderRadius: '40px',
                            border: '2px solid #222',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.3), inset 0 0 0 7px #111',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'absolute', inset: '10px', borderRadius: '40px', overflow: 'hidden', background: '#fff' }}>
                                <div style={{ padding: '3rem 1.5rem 1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                                    <div style={{ background: '#f8fafc', padding: '0.5rem', borderRadius: '50%', color: '#64748b' }}>
                                        <ChevronLeft size={20} />
                                    </div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>Food Database</h3>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '0.8rem', border: '1px solid #f1f5f9' }}>
                                        <Search size={18} color="#94a3b8" />
                                        <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Describe what you ate</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.2rem', padding: '0 1.5rem', marginBottom: '1.5rem', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                    {['All', 'My meals', 'My foods', 'Saved'].map((tab, i) => (
                                        <span key={tab} style={{ fontSize: '0.85rem', fontWeight: i === 0 ? 800 : 500, color: i === 0 ? '#0f172a' : '#94a3b8', borderBottom: i === 0 ? '2px solid #0f172a' : 'none', paddingBottom: '0.4rem' }}>{tab}</span>
                                    ))}
                                </div>
                                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                                    <button style={{ width: '100%', padding: '0.9rem', borderRadius: '100px', border: '1.5px solid #0f172a', background: 'transparent', color: '#0f172a', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
                                        <Plus size={18} /> Log empty food
                                    </button>
                                </div>
                                <div style={{ padding: '0 1.5rem' }}>
                                    <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Suggestions</p>
                                    {[
                                        { name: 'Peanut Butter', cal: '94 cal · tbsp', icon: '🥜' },
                                        { name: 'Avocado · Calavo', cal: '130 cal · serving', icon: '🥑' },
                                        { name: 'Egg', cal: '74 cal · large', icon: '🥚' }
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#f8fafc', borderRadius: '18px', marginBottom: '0.8rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                                                <div>
                                                    <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>{item.name}</p>
                                                    <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{item.cal}</p>
                                                </div>
                                            </div>
                                            <div style={{ color: '#0f172a' }}><Plus size={16} /></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', width: '90px', height: '22px', background: 'black', borderRadius: '11px', zIndex: 100 }}></div>
                        </div>
                    </motion.div>

                    {/* Right Content: Feature Cards */}
                    <div className="capabilities-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {features.map((card) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                viewport={{ once: true }}
                                transition={{ delay: card.id * 0.1 }}
                                onClick={() => setActiveCapability(card.id)}
                                className={`capability-card ${activeCapability === card.id ? 'active' : ''}`}
                                style={{
                                    padding: '1.2rem 1.5rem',
                                    borderRadius: '16px',
                                    background: activeCapability === card.id ? 'var(--card-bg)' : 'transparent',
                                    border: activeCapability === card.id ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    position: 'relative'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                    <div style={{
                                        padding: '0.6rem',
                                        borderRadius: '10px',
                                        background: activeCapability === card.id ? 'var(--primary-glow)' : 'var(--glass-bg)',
                                        color: activeCapability === card.id ? 'var(--primary)' : 'var(--foreground)',
                                        opacity: activeCapability === card.id ? 1 : 0.5
                                    }}>
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--foreground)' }}>{card.title}</h4>
                                        <p style={{ fontSize: '0.85rem', lineHeight: 1.5, opacity: 0.5, color: 'var(--foreground)' }}>{card.desc}</p>
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
