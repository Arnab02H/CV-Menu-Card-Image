"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, Sun, Moon, X, Menu } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
    isDarkMode: boolean;
    setIsDarkMode: (val: boolean) => void;
    setStep: (step: number) => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode, setStep }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = ['Home', 'Our Mission', 'Contact'];

    return (
        <>
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
                    <div className="logo-icon-box" style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        padding: '0.5rem',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <ChefHat size={20} color="white" />
                    </div>
                    <span className="logo-text" style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>LINGUINE <span className="gradient-text">AI</span></span>
                </div>

                <div className="desktop-menu" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                    {menuItems.map((item) => (
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
                        {menuItems.map((item) => (
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
        </>
    );
}
