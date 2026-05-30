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
                .founder-card {
                    transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease !important;
                }
                .founder-card:hover {
                    border-color: rgba(139, 92, 246, 0.45) !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 50px rgba(139, 92, 246, 0.25) !important;
                    background: linear-gradient(135deg, rgba(20, 20, 24, 0.85) 0%, rgba(139, 92, 246, 0.1) 100%) !important;
                }
                .founder-card:hover .profile-img {
                    transform: scale(1.08);
                }
                .founder-card:hover .linkedin-btn {
                    box-shadow: 0 6px 20px rgba(0, 119, 181, 0.5) !important;
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
                        Meet the <span className="gradient-text">Founder</span><br />
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
                                    <p>I am the <span style={{ fontWeight: 700, color: 'var(--primary)' }}>Founder</span> behind Linguine AI.</p>
                                    <p>My journey began with a simple realization: language should never be a barrier to global cuisine. I'm using computer vision and nutrition intelligence to make menus clear, personalized, and accessible for everyone.</p>

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

                                    <p>Join me in redefining the future of global dining, powered by AI that cares about what's on your plate.</p>
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
                                    <p>I aim to create a companion that understands your food as deeply as you do.</p>
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
                                            "I'm not just translating menus; I'm decoding cultural stories and ensuring every meal is a safe, informed, and delightful exploration."
                                        </p>
                                        <div style={{ marginTop: '1rem', textAlign: 'right', opacity: 0.6, fontSize: '0.9rem', fontWeight: 700 }}>
                                            — Arnab Bera, Founder
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
                    style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 340px))', justifyContent: 'center', gap: '1.2rem', width: '100%', maxWidth: '850px' }}
                >
                    {[
                        { id: "Arnab", initials: "AB", name: "Arnab Bera", work: "Building Frontend and OCR", followers: "1.6k+ followers", role: "Building LinguineAI • CMI Student", link: "https://www.linkedin.com/in/arnab-bera-65a452229/", img: "/arnab_profile_pic.jpeg" }
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
                                gap: '1.2rem',
                                padding: '2.5rem 1.8rem',
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, rgba(20, 20, 24, 0.7) 0%, rgba(139, 92, 246, 0.05) 100%)',
                                border: '1px solid rgba(139, 92, 246, 0.25)',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 40px rgba(139, 92, 246, 0.1) inset',
                                backdropFilter: 'blur(20px)',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                width: '100%',
                                maxWidth: '360px',
                                height: 'auto'
                            }}
                            className="founder-card"
                        >
                            {/* Decorative Top Glow */}
                            <div style={{
                                position: 'absolute',
                                top: '-20%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '150px',
                                height: '150px',
                                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                                zIndex: 0,
                                pointerEvents: 'none'
                            }} />

                            {/* Tag: FOUNDER & CREATOR */}
                            <span style={{
                                zIndex: 1,
                                padding: '0.4rem 1rem',
                                background: 'rgba(139, 92, 246, 0.15)',
                                border: '1px solid rgba(139, 92, 246, 0.4)',
                                borderRadius: '100px',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                color: 'var(--primary)',
                                textTransform: 'uppercase'
                            }}>
                                Founder & Creator
                            </span>

                            {/* 1. Profile Image with premium frame */}
                            <div style={{
                                position: 'relative',
                                width: '110px',
                                height: '110px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1
                            }}>
                                {/* Outer Ring Glow */}
                                <div style={{
                                    position: 'absolute',
                                    inset: '-4px',
                                    borderRadius: '50%',
                                    border: '2px solid transparent',
                                    background: 'linear-gradient(135deg, var(--primary) 0%, #a78bfa 100%) border-box',
                                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    opacity: 0.8
                                }} />
                                {/* Inner Image Box */}
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '2px solid rgba(255,255,255,0.1)',
                                    background: 'linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%)',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                                }}>
                                    <img 
                                        src={member.img} 
                                        alt={member.name} 
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
                                        }}
                                        className="profile-img"
                                    />
                                </div>
                            </div>

                            {/* 2. Text Content */}
                            <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%' }}>
                                <h3 style={{ 
                                    fontSize: '1.4rem', 
                                    fontWeight: 800, 
                                    color: 'white', 
                                    margin: 0,
                                    letterSpacing: '-0.02em' 
                                }}>
                                    {member.name}
                                </h3>
                                <p style={{ 
                                    fontSize: '0.85rem', 
                                    color: 'var(--primary)', 
                                    fontWeight: 600, 
                                    margin: 0,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    {member.work}
                                </p>
                                <p style={{ 
                                    fontSize: '0.8rem', 
                                    color: 'var(--muted-foreground)', 
                                    fontWeight: 500, 
                                    margin: '0.2rem 0 0 0',
                                    lineHeight: 1.4
                                }}>
                                    CMI Student • Data Scientist & Vision Engineer
                                </p>
                            </div>

                            {/* 3. Follower Pill */}
                            <div style={{
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.4rem',
                                padding: '0.35rem 0.8rem',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '100px',
                                fontSize: '0.75rem',
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontWeight: 600
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: '#10b981',
                                    boxShadow: '0 0 8px #10b981'
                                }} />
                                {member.followers} on LinkedIn
                            </div>

                            {/* 4. LinkedIn Action Button */}
                            <motion.a
                                href={member.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => track(`team_member_linkedin_click_${member.id}`)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    zIndex: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.6rem',
                                    padding: '0.8rem 1.2rem',
                                    borderRadius: '16px',
                                    background: 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    textDecoration: 'none',
                                    width: '100%',
                                    marginTop: '0.5rem',
                                    boxShadow: '0 4px 15px rgba(0, 119, 181, 0.3)',
                                    cursor: 'pointer',
                                    transition: 'box-shadow 0.3s ease'
                                }}
                                className="linkedin-btn"
                            >
                                <Linkedin size={16} fill="white" color="white" />
                                Connect on LinkedIn
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
