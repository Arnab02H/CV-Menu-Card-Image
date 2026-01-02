"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Upload, ChefHat, Sparkles, Filter, Info, Languages, ShieldCheck,
    Globe, Menu, X, ArrowRight, Pizza, Coffee, Salad, Wine, Utensils,
    Instagram, Twitter, Github, Mail, Wifi, Battery, Signal, Sun, Moon,
    Search, Camera, Database, TrendingUp, ChevronLeft, Plus
} from "lucide-react";

export default function Home() {
    const [step, setStep] = useState(0); // 0 = Landing, 1 = Upload, 2 = Preferences, 3 = Results
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [activeCapability, setActiveCapability] = useState(1); // Default to middle card

    useEffect(() => {
        if (!isDarkMode) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }, [isDarkMode]);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    return (
        <main style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
            {/* Premium Navbar */}
            <nav className="glass-card" style={{
                position: 'fixed',
                top: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '1200px',
                zIndex: 200,
                padding: '0.75rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '100px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => setStep(0)}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        padding: '0.5rem',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <ChefHat size={20} color="white" />
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>LINGUINE <span className="gradient-text">AI</span></span>
                </div>

                <div className="desktop-menu" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                    {['Home', 'Our Mission', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>
                            {item}
                        </a>
                    ))}
                    <div
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            cursor: 'pointer',
                            color: 'var(--foreground)',
                            transition: 'var(--transition)'
                        }}
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </div>
                    <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }} onClick={() => setStep(1)}>
                        Analyze Now
                    </button>
                </div>

                <div className="mobile-toggle" style={{ display: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="glass-card"
                        style={{ position: 'fixed', top: '6rem', left: '5%', width: '90%', zIndex: 150, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        {['Home', 'Our Mission', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                                {item}
                            </a>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1rem', fontWeight: 600 }}>Theme</span>
                            <div
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    cursor: 'pointer',
                                    color: 'var(--foreground)',
                                    transition: 'var(--transition)'
                                }}
                            >
                                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </div>
                        </div>
                        <button className="btn-primary" onClick={() => { setStep(1); setIsMenuOpen(false); }}>
                            Analyze Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="landing-page"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Hero Section */}
                        <section
                            id="home"
                            className="hero-section"
                            style={{
                                minHeight: '100vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                maxWidth: '1400px',
                                margin: '0 auto',
                                padding: '6rem 2rem 2rem 2rem',
                                position: 'relative'
                            }}
                        >
                            {/* Background Floating Icons */}
                            <div className="bg-animations" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
                                {[
                                    { Icon: Pizza, top: '20%', left: '10%', size: 40, delay: 0 },
                                    { Icon: Coffee, top: '70%', left: '5%', size: 30, delay: 1 },
                                    { Icon: Salad, top: '15%', left: '85%', size: 35, delay: 0.5 },
                                    { Icon: Wine, top: '60%', left: '90%', size: 45, delay: 1.5 },
                                    { Icon: Utensils, top: '80%', left: '80%', size: 25, delay: 2 }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: [0.1, 0.3, 0.1],
                                            y: [0, -30, 0],
                                            rotate: [0, 20, 0]
                                        }}
                                        transition={{
                                            duration: 5 + i,
                                            repeat: Infinity,
                                            delay: item.delay,
                                            ease: "easeInOut"
                                        }}
                                        style={{ position: 'absolute', top: item.top, left: item.left, color: 'var(--primary)' }}
                                    >
                                        <item.Icon size={item.size} />
                                    </motion.div>
                                ))}
                            </div>

                            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center', width: '100%' }}>
                                <div className="hero-content" style={{ textAlign: 'left' }}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(99, 102, 241, 0.1)', padding: '0.5rem 1rem', borderRadius: '100px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}
                                    >
                                        <Globe size={16} /> Breaking Language Barriers in Gastronomy
                                    </motion.div>

                                    <h2 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                                        Analyze Your Food <span className="hero-title-br"><br /></span>
                                        <span className="gradient-text">With AI Vision</span>
                                    </h2>

                                    <p className="hero-subtitle" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', lineHeight: 1.6, opacity: 0.6, marginBottom: '3rem', maxWidth: '540px' }}>
                                        Linguine AI isn't just translation anymore. Scan your plate to instantly
                                        identify ingredients, calculate nutrition, and verify dietary safety
                                        in real-time.
                                    </p>

                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="hero-buttons">
                                        <button className="btn-primary hero-btn" style={{ padding: '1rem 2rem' }} onClick={() => setStep(1)}>
                                            Start Analyzing <ArrowRight size={20} />
                                        </button>
                                        <button
                                            className="glass-card hero-btn hero-btn-secondary"
                                            style={{
                                                padding: '1rem 2rem',
                                                background: 'rgba(255,255,255,0.05)',
                                                color: 'var(--foreground)',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                border: '1px solid var(--glass-border)'
                                            }}
                                            onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                                        >
                                            Watch Demo <Sparkles size={18} />
                                        </button>
                                    </div>

                                    <div className="hero-stats" style={{ marginTop: '3rem', display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
                                        <div>
                                            <h4 style={{ fontSize: '1.5rem' }}>99%</h4>
                                            <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>Accuracy</p>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.5rem' }}>150+</h4>
                                            <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>Languages</p>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.5rem' }}>10k+</h4>
                                            <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>Foodies</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-animation" style={{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '4rem',
                                    width: '100%',
                                    maxWidth: '900px',
                                    padding: '2rem 0',
                                    perspective: '1200px'
                                }}>
                                    {/* Phone 1: Scanner View (Real Mobile Design) */}
                                    <motion.div
                                        initial={{ x: -100, opacity: 0, rotateY: 20, rotateX: 10, rotateZ: -10 }}
                                        animate={{ x: 0, opacity: 1, rotateY: 15, rotateX: 5, rotateZ: -8 }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                        style={{
                                            width: '260px',
                                            height: '540px',
                                            background: '#000',
                                            borderRadius: '40px',
                                            border: '2px solid #333',
                                            boxShadow: '-20px 40px 80px rgba(0,0,0,0.6), inset 0 0 0 8px #111',
                                            position: 'relative',
                                            overflow: 'visible', // For side buttons
                                            flexShrink: 0,
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        {/* Physical Side Buttons */}
                                        <div style={{ position: 'absolute', left: '-3px', top: '100px', width: '3px', height: '30px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                                        <div style={{ position: 'absolute', left: '-3px', top: '140px', width: '3px', height: '60px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                                        <div style={{ position: 'absolute', right: '-3px', top: '130px', width: '3px', height: '80px', background: '#333', borderRadius: '0 2px 2px 0' }}></div>

                                        {/* Screen Content Container */}
                                        <div style={{ position: 'absolute', inset: '8px', borderRadius: '36px', overflow: 'hidden', background: '#0f0f12' }}>
                                            {/* Status Bar */}
                                            <div style={{ position: 'absolute', top: '14px', left: '20px', fontSize: '0.65rem', fontWeight: 700, color: 'white', zIndex: 110 }}>9:41</div>
                                            <div style={{ position: 'absolute', top: '14px', right: '20px', display: 'flex', alignItems: 'center', gap: '4px', color: 'white', zIndex: 110 }}>
                                                <Signal size={10} strokeWidth={2.5} />
                                                <Wifi size={10} strokeWidth={2.5} />
                                                <Battery size={12} strokeWidth={2.5} style={{ transform: 'rotate(0deg)' }} />
                                            </div>

                                            {/* Dynamic Island */}
                                            <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '20px', background: 'black', borderRadius: '10px', zIndex: 100 }}></div>

                                            {/* Italian Menu Content */}
                                            <div style={{ padding: '3.5rem 1.2rem', color: 'white' }}>
                                                <div style={{ textAlign: 'center', marginBottom: '1.5rem', opacity: 0.6, fontSize: '0.6rem', letterSpacing: '2px', fontWeight: 700 }}>RISTORANTE IL POSTO</div>

                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    <h3 style={{ fontSize: '0.7rem', color: 'var(--primary)', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.2rem' }}>ANTIPASTI</h3>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}><span style={{ fontSize: '0.65rem' }}>Bruschetta Classica</span><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>€8</span></div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '0.65rem' }}>Carpaccio di Manzo</span><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>€14</span></div>
                                                </div>

                                                <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                                                    <h3 style={{ fontSize: '0.7rem', color: 'var(--primary)', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.2rem' }}>PRIMI PIATTI</h3>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', background: 'rgba(99, 102, 241, 0.1)', padding: '4px', borderRadius: '4px' }}>
                                                        <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>Linguine al Pesto Genovese</span>
                                                        <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>€16</span>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '0.65rem' }}>Risotto ai Funghi</span><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>€18</span></div>
                                                </div>

                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    <h3 style={{ fontSize: '0.7rem', color: 'var(--primary)', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.2rem' }}>SECONDI</h3>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '0.65rem' }}>Tagliata di Manzo</span><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>€24</span></div>
                                                </div>
                                            </div>

                                            {/* Scanning Overlays */}
                                            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                                                {/* Scanning Bar */}
                                                <motion.div
                                                    animate={{ top: ['20%', '80%', '20%'] }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                    style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--primary), transparent)', boxShadow: '0 0 15px var(--primary)', zIndex: 50 }}
                                                />

                                                <div style={{ position: 'absolute', top: '48%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '60px', border: '2px solid var(--primary)', borderRadius: '8px', zIndex: 60 }}>
                                                    <div style={{ position: 'absolute', top: '-10px', left: '10px', background: 'var(--primary)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.5rem', color: 'white', fontWeight: 800 }}>ANALYZING...</div>
                                                </div>
                                            </div>

                                            {/* Bottom Controls */}
                                            <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ background: 'rgba(255,255,255,1)', padding: '0.5rem 1.2rem', borderRadius: '100px', color: 'black', fontSize: '0.65rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                                                    <Sparkles size={12} /> Live Scan
                                                </div>
                                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'none', border: '2px solid white', padding: '3px' }}>
                                                    <div style={{ width: '100%', height: '100%', background: 'white', borderRadius: '50%' }}></div>
                                                </div>
                                            </div>

                                            {/* Home Bar */}
                                            <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }}></div>
                                        </div>
                                    </motion.div>

                                    {/* Loopy Arrow Connector (Floating, not touching phones) */}
                                    <div style={{ position: 'absolute', zIndex: 15, width: '100px', height: '100px', top: '42%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.8 }}>
                                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.2))' }}>
                                            <motion.path
                                                d="M 15 60 C 25 60, 35 20, 50 20 C 70 20, 60 80, 48 80 C 35 80, 40 45, 85 55"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 2, ease: "easeInOut" }}
                                            />
                                            <motion.path
                                                d="M 78 51 L 85 55 L 78 59"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.6 }}
                                            />
                                        </svg>
                                    </div>

                                    {/* Phone 2: Analysis View (Real Mobile Design) */}
                                    <motion.div
                                        initial={{ x: 100, opacity: 0, rotateY: -20, rotateX: 10, rotateZ: 10 }}
                                        animate={{ x: 0, opacity: 1, rotateY: -15, rotateX: 5, rotateZ: 8 }}
                                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                        style={{
                                            width: '260px',
                                            height: '540px',
                                            background: '#000',
                                            borderRadius: '40px',
                                            border: '2px solid #333',
                                            boxShadow: '20px 40px 80px rgba(0,0,0,0.6), inset 0 0 0 8px #111',
                                            position: 'relative',
                                            overflow: 'visible',
                                            flexShrink: 0,
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        {/* Physical Side Buttons */}
                                        <div style={{ position: 'absolute', left: '-3px', top: '100px', width: '3px', height: '30px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                                        <div style={{ position: 'absolute', left: '-3px', top: '140px', width: '3px', height: '60px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                                        <div style={{ position: 'absolute', right: '-3px', top: '130px', width: '3px', height: '80px', background: '#333', borderRadius: '0 2px 2px 0' }}></div>

                                        <div style={{ position: 'absolute', inset: '8px', borderRadius: '36px', overflow: 'hidden', background: '#f8fafc' }}>
                                            {/* Status Bar */}
                                            <div style={{ position: 'absolute', top: '14px', left: '20px', fontSize: '0.65rem', fontWeight: 700, color: '#1e293b', zIndex: 110 }}>9:41</div>
                                            <div style={{ position: 'absolute', top: '14px', right: '20px', display: 'flex', alignItems: 'center', gap: '4px', color: '#1e293b', zIndex: 110 }}>
                                                <Signal size={10} strokeWidth={2.5} />
                                                <Wifi size={10} strokeWidth={2.5} />
                                                <Battery size={12} strokeWidth={2.5} />
                                            </div>

                                            {/* Dynamic Island */}
                                            <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '20px', background: 'black', borderRadius: '10px', zIndex: 100 }}></div>

                                            {/* English Menu Content */}
                                            <div style={{ padding: '3.5rem 1.2rem', color: '#1e293b' }}>
                                                <div style={{ textAlign: 'center', marginBottom: '1.5rem', opacity: 0.5, fontSize: '0.6rem', letterSpacing: '2px', fontWeight: 800 }}>THE SPOT RESTAURANT</div>

                                                <div style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
                                                    <h3 style={{ fontSize: '0.7rem', color: '#6366f1', marginBottom: '0.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.2rem' }}>APPETIZERS</h3>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}><span style={{ fontSize: '0.65rem' }}>Classic Bruschetta</span><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>$8</span></div>
                                                </div>

                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    <h3 style={{ fontSize: '0.7rem', color: '#6366f1', marginBottom: '0.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.2rem' }}>MAIN COURSES</h3>
                                                    <motion.div
                                                        initial={{ background: 'rgba(99, 102, 241, 0)' }}
                                                        animate={{ background: ['rgba(99, 102, 241, 0.15)', 'rgba(99, 102, 241, 0.05)', 'rgba(99, 102, 241, 0.15)'] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', padding: '4px', borderRadius: '4px' }}
                                                    >
                                                        <span style={{ fontSize: '0.65rem', fontWeight: 700 }}>Linguine with Basil Pesto</span>
                                                        <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>$16</span>
                                                    </motion.div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.8 }}><span style={{ fontSize: '0.65rem' }}>Mushroom Risotto</span><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>$18</span></div>
                                                </div>
                                            </div>

                                            {/* Floating Food Picture */}
                                            <motion.div
                                                initial={{ scale: 0, rotate: -10, opacity: 0 }}
                                                animate={{ scale: 1, rotate: 5, opacity: 1 }}
                                                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                                                style={{ position: 'absolute', top: '15%', right: '8%', width: '90px', height: '90px', borderRadius: '15px', overflow: 'hidden', border: '3px solid white', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', zIndex: 40 }}
                                            >
                                                <img src="/food-mockup.png" alt="Linguine" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </motion.div>

                                            {/* White Analysis Sheet */}
                                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'white', borderTopLeftRadius: '32px', borderTopRightRadius: '32px', padding: '1.2rem 1.5rem', color: 'black', boxShadow: '0 -10px 30px rgba(0,0,0,0.05)' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                                                    <Globe size={10} color="var(--primary)" />
                                                    <p style={{ fontSize: '0.55rem', color: 'var(--primary)', fontWeight: 800 }}>AI SUGGESTION</p>
                                                </div>
                                                <h4 style={{ fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 800, lineHeight: 1.3 }}>Linguine with Genoese Basil Pesto</h4>

                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.2rem' }}>
                                                    {[{ l: 'Calories', v: '480', c: '#f59e0b', i: <Sparkles size={10} /> }, { l: 'Ingredients', v: 'Pesto, Pine Nuts', c: '#10b981', i: <Salad size={10} /> }].map(stat => (
                                                        <div key={stat.l} style={{ background: '#f8fafc', padding: '0.5rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                            <div style={{ color: stat.c }}>{stat.i}</div>
                                                            <div><p style={{ fontSize: '0.45rem', color: '#94a3b8', fontWeight: 700 }}>{stat.l}</p><p style={{ fontSize: '0.65rem', fontWeight: 800 }}>{stat.v}</p></div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div style={{ background: '#f0f9ff', padding: '0.8rem', borderRadius: '12px', border: '1px solid #e0f2fe' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', alignItems: 'center' }}>
                                                        <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#0369a1' }}>Safety Verdict</span>
                                                        <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#0369a1' }}>Vegetarian</span>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: '3px' }}>
                                                        {[1, 2, 3, 4, 5].map(i => <div key={i} style={{ flex: 1, height: '3px', background: '#0ea5e9', borderRadius: '2px' }}></div>)}
                                                    </div>
                                                </div>

                                                {/* Home Bar */}
                                                <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', background: 'rgba(0,0,0,0.1)', borderRadius: '2px' }}></div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </section>

                        {/* Polished & Interactive Section: What does Linguine AI include? */}
                        <section id="capabilities" style={{ padding: '5rem 2rem 10rem 2rem', background: 'var(--glass-bg)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
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
                                            height: '520px',
                                            background: '#000',
                                            borderRadius: '40px',
                                            border: '2px solid #222',
                                            boxShadow: '0 30px 60px rgba(0,0,0,0.3), inset 0 0 0 7px #111',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}>
                                            {/* Screen Content */}
                                            <div style={{ position: 'absolute', inset: '10px', borderRadius: '40px', overflow: 'hidden', background: '#fff' }}>
                                                {/* Header */}
                                                <div style={{ padding: '3rem 1.5rem 1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                                                    <div style={{ background: '#f8fafc', padding: '0.5rem', borderRadius: '50%', color: '#64748b' }}>
                                                        <ChevronLeft size={20} />
                                                    </div>
                                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>Food Database</h3>
                                                </div>

                                                {/* Search Bar */}
                                                <div style={{ padding: '1.5rem' }}>
                                                    <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '0.8rem', border: '1px solid #f1f5f9' }}>
                                                        <Search size={18} color="#94a3b8" />
                                                        <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Describe what you ate</span>
                                                    </div>
                                                </div>

                                                {/* Tabs */}
                                                <div style={{ display: 'flex', gap: '1.2rem', padding: '0 1.5rem', marginBottom: '1.5rem', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                                    {['All', 'My meals', 'My foods', 'Saved'].map((tab, i) => (
                                                        <span key={tab} style={{ fontSize: '0.85rem', fontWeight: i === 0 ? 800 : 500, color: i === 0 ? '#0f172a' : '#94a3b8', borderBottom: i === 0 ? '2px solid #0f172a' : 'none', paddingBottom: '0.4rem' }}>{tab}</span>
                                                    ))}
                                                </div>

                                                {/* Log Button */}
                                                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                                                    <button style={{ width: '100%', padding: '0.9rem', borderRadius: '100px', border: '1.5px solid #0f172a', background: 'transparent', color: '#0f172a', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
                                                        <Plus size={18} /> Log empty food
                                                    </button>
                                                </div>

                                                {/* Suggestions */}
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
                                            {/* Dynamic Island */}
                                            <div style={{ position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', width: '90px', height: '22px', background: 'black', borderRadius: '11px', zIndex: 100 }}></div>
                                        </div>
                                    </motion.div>

                                    {/* Right Content: Feature Cards */}
                                    <div className="capabilities-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {[
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
                                        ].map((card) => (
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

                        {/* Our Mission Section */}
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
                                {[
                                    { title: "Cultural Accuracy", icon: Languages, desc: "We don't just translate words; we translate the heritage and preparation methods behind every dish." },
                                    { title: "Health First", icon: ShieldCheck, desc: "Instant detection of allergens and dietary conflicts tailored to your personal health profile." },
                                    { title: "Global Reach", icon: Globe, desc: "Supporting over 150 languages across the most remote and diverse culinary regions in the world." }
                                ].map((feature, i) => (
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

                        {/* About the Founder Section */}
                        <section id="founder" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                            <div className="founder-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="founder-content"
                                >
                                    <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: 1.1 }}>
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
                                    <button className="btn-primary" style={{ marginTop: '2.5rem', padding: '1.2rem 2.8rem', fontSize: '1.1rem', borderRadius: '100px' }} onClick={() => {
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

                                    <div className="founder-image-box" style={{ width: '100%', height: '560px', borderRadius: '40px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 30px 100px rgba(0,0,0,0.5)', position: 'relative' }}>
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

                        {/* Contact Section */}
                        <section id="contact" style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                            <div className="glass-card" style={{ padding: '4rem 2rem' }}>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in Touch</h2>
                                <p style={{ opacity: 0.6, marginBottom: '3rem' }}>Have questions or want to partner with us? We'd love to hear from you.</p>

                                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>Name</label>
                                            <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white' }} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>Email</label>
                                            <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>Message</label>
                                        <textarea rows={4} placeholder="How can we help?" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white' }}></textarea>
                                    </div>
                                    <button className="btn-primary" style={{ alignSelf: 'center', padding: '1rem 3rem' }}>
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </section>
                    </motion.div>
                )}

                {/* Previous Steps (Upload, Preferences, Results) */}
                {step === 1 && (
                    <motion.section
                        key="step1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{ paddingTop: '10rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Upload Menu Photos</h2>
                        <p style={{ opacity: 0.6, marginBottom: '3rem' }}>Snap a photo or upload high-quality images of the restaurant menu.</p>

                        <div
                            className="glass-card"
                            style={{
                                padding: '5rem 2rem',
                                borderStyle: 'dashed',
                                borderWidth: '2px',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease'
                            }}
                            onClick={nextStep}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ padding: '1.5rem', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Upload size={32} className="gradient-text" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Drop Menu Images Here</h3>
                                    <p style={{ opacity: 0.5 }}>Supports multi-page menus (JPG, PNG, PDF)</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setStep(0)}
                            style={{ marginTop: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', opacity: 0.5 }}
                        >
                            &larr; Back to Home
                        </button>
                    </motion.section>
                )}

                {/* ... (Keep Preferences and Results steps but adjust padding for Navbar) ... */}
                {step === 2 && (
                    <motion.section
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        style={{ paddingTop: '10rem', maxWidth: '800px', margin: '0 auto' }}
                    >
                        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <button
                                onClick={prevStep}
                                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', opacity: 0.5 }}
                            >
                                &larr; Back
                            </button>
                            <h2 style={{ fontSize: '2rem' }}>Personalize Your Experience</h2>
                        </div>

                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.7 }}>Preferred Cuisine</label>
                                        <select style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white' }}>
                                            <option value="">Any Regional Specifics...</option>
                                            <option value="italian">Italian</option>
                                            <option value="chinese">Chinese</option>
                                            <option value="indian">Indian</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.7 }}>Spice Tolerance</label>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            {['Low', 'Medium', 'High'].map(level => (
                                                <button key={level} style={{ flex: 1, padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'white', cursor: 'pointer' }}>{level}</button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.7 }}>Dietary Constraints</label>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {['Vegetarian', 'Vegan', 'Gluten-Free', 'Nut-Free'].map(tag => (
                                                <button key={tag} style={{ padding: '0.4rem 0.8rem', borderRadius: '2rem', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'white', cursor: 'pointer', fontSize: '0.85rem' }}>{tag}</button>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="btn-primary" style={{ marginTop: 'auto' }} onClick={nextStep}>
                                        Analyze Menu <Filter size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}

                {step === 3 && (
                    <motion.section
                        key="step3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ paddingTop: '10rem', maxWidth: '1200px', margin: '0 auto', paddingBottom: '5rem' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Recommended for You</h2>
                                <p style={{ opacity: 0.6 }}>Based on your preferences and the analyzed menu.</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>OCR Confidence</span>
                                    <div style={{ width: '100px', height: '6px', background: 'var(--glass-bg)', borderRadius: '3px', marginTop: '4px' }}>
                                        <div style={{ width: '94%', height: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)', borderRadius: '3px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                            {[
                                { name: "Osso Buco alla Milanese", price: "€24", tags: ["Meat", "Medium Spice"], match: "98%", desc: "Cross-cut veal shanks braised with vegetables, white wine and broth.", health: "High Protein", insight: "Fits your protein goals perfectly." },
                                { name: "Risotto ai Funghi Porcini", price: "€18", tags: ["Vegetarian", "Gluten-Free"], match: "95%", desc: "Creamy arborio rice with premium wild porcini mushrooms and truffle oil.", health: "Plant-based", insight: "Ideal vegetarian choice." },
                                { name: "Branzino al Riva", price: "€28", tags: ["Seafood", "Low Spice"], match: "89%", desc: "Mediterranean sea bass grilled with lemon, parsley and virgin olive oil.", health: "Heart Healthy", insight: "Low calorie and healthy fats." }
                            ].map((dish, i) => (
                                <motion.div key={i} className="glass-card" whileHover={{ scale: 1.02 }} style={{ padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                        <span style={{ background: 'var(--primary-glow)', color: 'var(--primary)', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 700 }}>{dish.match} Match</span>
                                        <span style={{ fontWeight: 700 }}>{dish.price}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{dish.name}</h3>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '1rem', height: '3rem', overflow: 'hidden' }}>{dish.desc}</p>
                                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '0.5rem', marginBottom: '1rem', border: '1px solid var(--glass-border)' }}>
                                        <p style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 600 }}>AI INSIGHT:</p>
                                        <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>{dish.insight}</p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                        {dish.tags.map(tag => (
                                            <span key={tag} style={{ fontSize: '0.7rem', background: 'var(--glass-bg)', padding: '0.2rem 0.5rem', borderRadius: '0.5rem' }}>{tag}</span>
                                        ))}
                                    </div>
                                    <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                            <Info size={14} /> {dish.health}
                                        </span>
                                        <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600 }}>Details &rarr;</button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Premium Footer */}
            {
                step === 0 && (
                    <footer style={{ background: 'var(--card-bg)', borderTop: '1px solid var(--glass-border)', padding: '5rem 2rem 2rem 2rem' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                    <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '0.4rem', borderRadius: '8px' }}>
                                        <ChefHat size={18} color="white" />
                                    </div>
                                    <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>LINGUINE AI</span>
                                </div>
                                <p style={{ opacity: 0.5, fontSize: '0.9rem', lineHeight: 1.6 }}>
                                    Bridging cultures through culinary intelligence. Explore menus without limits.
                                </p>
                            </div>

                            <div>
                                <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Product</h4>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.6, fontSize: '0.9rem' }}>
                                    <li>AI Translation</li>
                                    <li>Ingredient Safety</li>
                                    <li>Mobile App</li>
                                    <li>API Access</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Company</h4>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.6, fontSize: '0.9rem' }}>
                                    <li>Our Mission</li>
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Contact</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Connect</h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <Twitter size={20} style={{ opacity: 0.6, cursor: 'pointer' }} />
                                    <Instagram size={20} style={{ opacity: 0.6, cursor: 'pointer' }} />
                                    <Github size={20} style={{ opacity: 0.6, cursor: 'pointer' }} />
                                    <Mail size={20} style={{ opacity: 0.6, cursor: 'pointer' }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ maxWidth: '1200px', margin: '4rem auto 0 auto', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem' }}>
                            © 2026 Linguine AI. All rights reserved. Made with ❤️ for foodies worldwide.
                        </div>
                    </footer>
                )
            }

            <style jsx global>{`
                @media (max-width: 1024px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                        gap: 2rem !important;
                        padding-top: 4rem !important;
                        width: 100% !important;
                    }
                    .hero-content {
                        text-align: center !important;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 100% !important;
                        padding: 0 1rem;
                    }
                    .hero-title {
                        font-size: 3rem !important;
                    }
                    .hero-title-br {
                        display: block;
                    }
                    .hero-subtitle {
                        margin-left: auto;
                        margin-right: auto;
                        width: 100%;
                        max-width: 600px;
                    }
                    .hero-buttons {
                        justify-content: center;
                        width: 100%;
                    }
                    .hero-animation {
                        width: 100% !important;
                        max-width: 100% !important;
                        transform: scale(0.85);
                        margin: 0;
                        gap: 2rem !important;
                    }
                }

                @media (max-width: 768px) {
                    .desktop-menu { display: none !important; }
                    .mobile-toggle { display: block !important; cursor: pointer; }
                    .hero-section {
                        padding: 6rem 1rem 3rem 1rem !important;
                        height: auto !important;
                        min-height: 100vh !important;
                        overflow: hidden !important;
                    }
                    .hero-title {
                        font-size: 2.2rem !important;
                    }
                    .hero-title-br {
                        display: none;
                    }
                    .hero-stats {
                        justify-content: center;
                        width: 100%;
                        flex-wrap: wrap;
                        gap: 1.5rem !important;
                    }
                    .hero-animation {
                        transform: scale(0.7);
                        margin: -2rem 0;
                        width: 100% !important;
                    }
                }

                @media (max-width: 1024px) {
                    .founder-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                        gap: 4rem !important;
                    }
                    .founder-content {
                        order: 2;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .founder-image-container {
                        order: 1;
                        max-width: 450px;
                        margin: 0 auto;
                    }
                    .founder-image-box {
                        height: 480px !important;
                    }
                    .founder-badge {
                        padding: 0.6rem 1.2rem !important;
                    }
                }

                @media (max-width: 480px) {
                    .hero-section {
                        padding-top: 5rem !important;
                        padding-bottom: 2rem !important;
                    }
                    .hero-title {
                        font-size: 1.8rem !important;
                        line-height: 1.2 !important;
                    }
                    .hero-subtitle {
                        font-size: 0.9rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .hero-buttons {
                        flex-direction: column;
                        width: 100%;
                    }
                    .hero-btn {
                        width: 100% !important;
                        padding: 0.75rem 1rem !important;
                    }
                    .hero-animation {
                        transform: scale(0.5);
                        margin: -9rem 0;
                        gap: 1rem !important;
                        width: 100% !important;
                        display: flex !important;
                        justify-content: center !important;
                    }
                    .hero-stats {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr;
                        gap: 1rem !important;
                        margin-top: 1.5rem !important;
                    }
                    .hero-stats > div:last-child {
                        grid-column: span 2;
                    }
                    .founder-grid h2 {
                        font-size: 2.2rem !important;
                    }
                    .founder-image-box {
                        height: 380px !important;
                        border-radius: 30px !important;
                    }
                    .founder-badge {
                        right: -2% !important;
                        left: -2% !important;
                        padding: 0.5rem 1rem !important;
                    }
                    .founder-badge span {
                        font-size: 0.65rem !important;
                    }
                }

                @media (max-width: 1024px) {
                    .capabilities-grid {
                        grid-template-columns: 1fr !important;
                        gap: 4rem !important;
                    }
                    .capabilities-mockup {
                        order: 2;
                        transform: scale(0.9);
                    }
                    .capabilities-content {
                        order: 1;
                    }
                }

                @media (max-width: 480px) {
                    .capabilities-mockup {
                        transform: scale(0.7);
                        margin: -6rem 0;
                    }
                    .capability-card {
                        padding: 1.5rem !important;
                    }
                    .capability-card h3 {
                        font-size: 1.2rem !important;
                    }
                    .capability-card p {
                        font-size: 0.9rem !important;
                    }
                }

                .bg-animations {
                    z-index: -1;
                }
            `}</style>
        </main >
    );
}
