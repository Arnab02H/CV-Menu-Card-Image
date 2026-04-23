"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, ShieldCheck, ArrowRight, Sparkles, User, Linkedin } from "lucide-react";
import { useState } from "react";
import { track } from "@vercel/analytics";

interface FounderProps {
    setStep: (step: number) => void;
}

export default function Founder({ setStep }: FounderProps) {
    const [activeTab, setActiveTab] = useState<'story' | 'vision'>('story');

    return (
        <section id="founder" style={{ padding: 'clamp(5rem, 6vh, 6rem) 1.5rem 2rem 1.5rem', maxWidth: '1400px', margin: '0 auto', overflow: 'visible', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <style jsx>{`
                .founder-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
                    gap: clamp(2rem, 4vw, 3rem);
                    align-items: center;
                    width: 100%;
                }
                .desktop-left-column {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .block-team { width: 100%; }

                @media (max-width: 900px) {
                    .desktop-left-column {
                        display: contents;
                    }
                    .founder-grid {
                        display: flex;
                        flex-direction: column;
                    }
                    .block-h2 { 
                        order: 1; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        text-align: center; 
                    }
                    .block-team { order: 2; width: 100%; }
                    .block-tabs {
                        order: 3;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }
                    .founder-tabs {
                        justify-content: center !important;
                    }
                    .founder-text {
                        text-align: center !important;
                        align-items: center !important;
                    }
                    .founder-chips {
                        justify-content: center !important;
                    }
                    .founder-quote {
                        text-align: center !important;
                        padding-left: 1.2rem !important;
                    }
                }
            `}</style>
            <div className="founder-grid">
              
              <div className="desktop-left-column">
                {/* 1. Top Header Block */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="block-h2"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', lineHeight: 1.1, fontWeight: 800 }}
                    >
                        Meet the <span className="gradient-text">Team</span><br />
                        Behind the Innovation
                    </motion.h2>
                </motion.div>

                {/* 3. Bottom Tabs & Text Block */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="block-tabs"
                >

                    {/* Interactive Tabs */}
                    <div className="founder-tabs" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', maxWidth: '100%' }}>
                        <button
                            onClick={() => setActiveTab('story')}
                            style={{
                                padding: '0.6rem 1rem',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'story' ? '2px solid var(--primary)' : '2px solid transparent',
                                color: activeTab === 'story' ? 'var(--foreground)' : 'var(--muted-foreground)',
                                fontWeight: activeTab === 'story' ? 700 : 500,
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            <User size={16} /> The Story
                        </button>
                        <button
                            onClick={() => setActiveTab('vision')}
                            style={{
                                padding: '0.6rem 1rem',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'vision' ? '2px solid var(--primary)' : '2px solid transparent',
                                color: activeTab === 'vision' ? 'var(--foreground)' : 'var(--muted-foreground)',
                                fontWeight: activeTab === 'vision' ? 700 : 500,
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            <Sparkles size={16} /> The Vision
                        </button>
                    </div>

                    <div style={{ minHeight: '200px', position: 'relative', width: '100%' }}>
                        <AnimatePresence mode="wait">
                            {activeTab === 'story' ? (
                                <motion.div
                                    key="story"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="founder-text"
                                    style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.6, opacity: 0.9 }}
                                >
                                    <p>We are the <span style={{ fontWeight: 700, color: 'var(--primary)' }}>Team</span> behind Linguine AI.</p>
                                    <p>Our journey began with a simple realization: language should never be a barrier to global cuisine. Together, we’re using computer vision and nutrition intelligence to make menus clear, personalized, and accessible for everyone.</p>

                                    {/* Informative Stats Chips */}
                                    <div className="founder-chips" style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                                        {['150+ Languages', 'CV Analysis', 'Dietary Safety'].map((stat, i) => (
                                            <motion.span
                                                key={stat}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + (i * 0.1) }}
                                                style={{
                                                    padding: '0.4rem 0.8rem',
                                                    background: 'var(--primary-glow)',
                                                    border: '1px solid var(--primary)',
                                                    borderRadius: '100px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                    color: 'var(--primary)'
                                                }}
                                            >
                                                {stat}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <p>Join us in redefining the future of global dining, powered by AI that cares about what's on your plate.</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="vision"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="founder-text"
                                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.6, opacity: 0.9 }}
                                >
                                    <p>We aim to create a companion that understands your food as deeply as you do.</p>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="founder-quote"
                                        style={{
                                            position: 'relative',
                                            padding: '1.2rem',
                                            paddingLeft: '2.5rem',
                                            background: 'var(--card-bg)',
                                            borderRadius: '24px',
                                            border: '1px solid var(--glass-border)',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        <div style={{ position: 'absolute', top: '1rem', left: '1rem', opacity: 0.2 }}>
                                            <Sparkles size={24} color="var(--primary)" />
                                        </div>
                                        <p style={{
                                            fontWeight: 600,
                                            color: 'var(--foreground)',
                                            fontStyle: 'italic',
                                            fontSize: '1.1rem',
                                            lineHeight: 1.7
                                        }}>
                                            "We aren't just translating menus; we're decoding cultural stories and ensuring every meal is a safe, informed, and delightful exploration."
                                        </p>
                                        <div style={{ marginTop: '1rem', textAlign: 'right', opacity: 0.6, fontSize: '0.9rem', fontWeight: 700 }}>
                                            — The LinguineAI Team
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                        style={{ marginTop: '2rem', padding: '0.8rem 2.2rem', fontSize: '1rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        onClick={() => {
                            track('start_journey_founder');
                            setStep(1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Start Your Journey <ArrowRight size={18} />
                    </motion.button>
                </motion.div>
              </div>

                {/* 2. Team Grid Block */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } },
                        hidden: {}
                    }}
                    className="block-team team-grid-container"
                    style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.2rem', width: '100%', maxWidth: '850px' }}
                >
                    {[
                        { id: "Arnab", initials: "AB", name: "Arnab Bera", work: "Building Frontend and OCR", followers: "1.6k+ followers", role: "Building LinguineAI • CMI Student", link: "https://www.linkedin.com/in/arnab-bera-65a452229/", img: "/arnab_profile_pic.jpeg" },
                        { id: "Anirban", initials: "AC", name: "Anirban Chatterjee", work: "Building OCR", followers: "500+ followers", role: "Building LinguineAI • CMI Student", link: "#", img: null },
                        { id: "Nisith", initials: "NH", name: "Nisith Hazra", work: "Building FastAPI", followers: "500+ followers", role: "Building LinguineAI • CMI Student", link: "#", img: null },
                        { id: "Suvodeep", initials: "SD", name: "Suvodeep Dutta", work: "Connect Backend and Frontend", followers: "500+ followers", role: "Building LinguineAI • CMI Student", link: "#", img: null }
                    ].map((member, index) => (
                        <motion.div
                            key={member.id}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.8rem',
                                padding: '1.5rem 1rem',
                                borderRadius: '20px',
                                background: 'linear-gradient(160deg, rgba(20, 20, 24, 0.8) 0%, rgba(139, 92, 246, 0.08) 100%)',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                                backdropFilter: 'blur(12px)',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '100%'
                            }}
                        >
                            {/* 1. Large Circle Profile from Sketch */}
                            <div style={{
                                width: '75px',
                                height: '75px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '3px solid rgba(255,255,255,0.1)',
                                background: member.img ? 'transparent' : 'linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '2rem',
                                fontWeight: 800,
                                boxShadow: member.img ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(139, 92, 246, 0.4)'
                            }}>
                                {member.img ? (
                                    <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    member.initials
                                )}
                            </div>

                            {/* 2. Work Description from Sketch */}
                            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)', lineHeight: 1.3, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '2.5rem', flexGrow: 1 }}>
                                {member.work}
                            </div>

                            {/* 3. The exact LinkedIn Badge inside the card */}
                            <motion.a
                                href={member.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => track(`team_member_linkedin_click_${member.id}`)}
                                whileHover={{ scale: 1.03, boxShadow: '0 8px 25px rgba(0,0,0,0.3)' }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.6rem',
                                    padding: '0.5rem 0.8rem',
                                    borderRadius: '14px',
                                    background: 'linear-gradient(135deg, rgba(23, 23, 26, 0.9) 0%, rgba(139, 92, 246, 0.15) 100%)', // Cool purple-tinted glass
                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                    backdropFilter: 'blur(12px)',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    width: '100%',
                                    marginTop: 'auto', // Push to bottom
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                }}
                            >
                                <div style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    flexShrink: 0,
                                    background: member.img ? 'transparent' : 'linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: 800
                                }}>
                                    {member.img ? (
                                        <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        member.initials
                                    )}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', minWidth: 0, alignItems: 'flex-start', textAlign: 'left', width: '100%' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 800, color: 'white', flexWrap: 'wrap' }}>
                                        <span style={{ color: 'white' }}>{member.name}</span>
                                        <Linkedin size={12} fill="#0077b5" color="#0077b5" style={{ flexShrink: 0 }} />
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500, display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                                        <span>{member.role}</span>
                                        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{member.followers}</span>
                                    </div>
                                </div>
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
