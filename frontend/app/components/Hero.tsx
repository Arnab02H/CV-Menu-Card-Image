"use client";

import { motion } from "framer-motion";
import { Pizza, Coffee, Salad, Wine, Utensils, Globe, ArrowRight, Sparkles, Signal, Wifi, Battery } from "lucide-react";

interface HeroProps {
    setStep: (step: number) => void;
}

export default function Hero({ setStep }: HeroProps) {
    return (
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
                <div className="hero-content" style={{ textAlign: 'left', paddingLeft: "0" }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="hero-badge"
                        style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '100px', background: 'var(--primary-glow)', border: '1px solid var(--primary)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}
                    >
                        <Sparkles size={14} />
                        <span>Confusing menus? Unfamiliar dishes? No images?</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="hero-title"
                        style={{
                            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                            lineHeight: 1.1,
                            fontWeight: 800,
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.04em'
                        }}
                    >
                        Analyze Your Menu <br className="hero-title-br" />
                        <span className="gradient-text">With AI Vision</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle"
                        style={{
                            fontSize: '1.25rem',
                            opacity: 0.7,
                            marginBottom: '3rem',
                            maxWidth: '600px',
                            lineHeight: 1.6
                        }}
                    >
                        Linguine AI isn't just translation anymore. Scan your
                        plate to instantly identify ingredients, calculate
                        nutrition, and verify dietary safety in real-time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hero-buttons"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary hero-btn"
                            onClick={() => setStep(1)}
                        >
                            Start Analyzing <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-card hero-btn hero-btn-secondary"
                            onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Watch Demo <Sparkles size={18} />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="hero-stats"
                    >
                        <div>
                            <h4>99%</h4>
                            <p>Accuracy</p>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div>
                            <h4>150+</h4>
                            <p>Languages</p>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div>
                            <h4>10k+</h4>
                            <p>Foodies</p>
                        </div>
                    </motion.div>
                </div>

                <div className="hero-animation ">
                    {/* Phone 1: Scanner View */}
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
                            overflow: 'visible',
                            flexShrink: 0,
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* Physical Side Buttons */}
                        <div style={{ position: 'absolute', left: '-3px', top: '100px', width: '3px', height: '30px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                        <div style={{ position: 'absolute', left: '-3px', top: '140px', width: '3px', height: '60px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                        <div style={{ position: 'absolute', right: '-3px', top: '130px', width: '3px', height: '80px', background: '#333', borderRadius: '0 2px 2px 0' }}></div>

                        <div style={{ position: 'absolute', inset: '8px', borderRadius: '36px', overflow: 'hidden', background: '#0f0f12' }}>
                            <div style={{ position: 'absolute', top: '14px', left: '20px', fontSize: '0.65rem', fontWeight: 700, color: 'white', zIndex: 110 }}>9:41</div>
                            <div style={{ position: 'absolute', top: '14px', right: '20px', display: 'flex', alignItems: 'center', gap: '4px', color: 'white', zIndex: 110 }}>
                                <Signal size={10} strokeWidth={2.5} />
                                <Wifi size={10} strokeWidth={2.5} />
                                <Battery size={12} strokeWidth={2.5} style={{ transform: 'rotate(0deg)' }} />
                            </div>
                            <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '20px', background: 'black', borderRadius: '10px', zIndex: 100 }}></div>

                            <div style={{ padding: '3.5rem 1.2rem', color: 'white' }}>
                                <div style={{ textAlign: 'center', marginBottom: '1.5rem', opacity: 0.6, fontSize: '0.6rem', letterSpacing: '2px', fontWeight: 700 }}>RISTORANTE IL POSTO</div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '0.7rem', color: 'var(--primary)', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.2rem' }}>ANTIPASTI</h3>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}><span style={{ fontSize: '0.65rem' }}>Bruschetta Classica</span><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>€8</span></div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '0.65rem' }}>Carpaccio di Manzo</span><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>€14</span></div>
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '0.7rem', color: 'var(--primary)', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.2rem' }}>PRIMI PIATTI</h3>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', background: 'rgba(99, 102, 241, 0.1)', padding: '4px', borderRadius: '4px' }}>
                                        <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>Linguine al Pesto Genovese</span>
                                        <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>€16</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '0.65rem' }}>Risotto ai Funghi</span><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>€18</span></div>
                                </div>
                            </div>

                            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                                <motion.div
                                    animate={{ top: ['20%', '80%', '20%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--primary), transparent)', boxShadow: '0 0 15px var(--primary)', zIndex: 50 }}
                                />
                                <div style={{ position: 'absolute', top: '48%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '60px', border: '2px solid var(--primary)', borderRadius: '8px', zIndex: 60 }}>
                                    <div style={{ position: 'absolute', top: '-10px', left: '10px', background: 'var(--primary)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.5rem', color: 'white', fontWeight: 800 }}>ANALYZING...</div>
                                </div>
                            </div>

                            <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'rgba(255,255,255,1)', padding: '0.5rem 1.2rem', borderRadius: '100px', color: 'black', fontSize: '0.65rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                                    <Sparkles size={12} /> Live Scan
                                </div>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'none', border: '2px solid white', padding: '3px' }}>
                                    <div style={{ width: '100%', height: '100%', background: 'white', borderRadius: '50%' }}></div>
                                </div>
                            </div>
                            <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }}></div>
                        </div>
                    </motion.div>

                    {/* Loopy Arrow Connector */}
                    <div style={{ position: 'absolute', zIndex: 15, width: '100px', height: '100px', top: '42%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.8 }}>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.2))' }}>
                            <motion.path
                                d="M 15 60 C 25 60, 35 20, 50 20 C 70 20, 60 80, 48 80 C 35 80, 40 45, 85 55"
                                stroke="var(--foreground)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M 78 51 L 85 55 L 78 59"
                                stroke="var(--foreground)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.6 }}
                            />
                        </svg>
                    </div>

                    {/* Phone 2: Analysis View */}
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
                        <div style={{ position: 'absolute', left: '-3px', top: '100px', width: '3px', height: '30px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                        <div style={{ position: 'absolute', left: '-3px', top: '140px', width: '3px', height: '60px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                        <div style={{ position: 'absolute', right: '-3px', top: '130px', width: '3px', height: '80px', background: '#333', borderRadius: '0 2px 2px 0' }}></div>

                        <div style={{ position: 'absolute', inset: '8px', borderRadius: '36px', overflow: 'hidden', background: '#f8fafc' }}>
                            <div style={{ position: 'absolute', top: '14px', left: '20px', fontSize: '0.65rem', fontWeight: 700, color: '#1e293b', zIndex: 110 }}>9:41</div>
                            <div style={{ position: 'absolute', top: '14px', right: '20px', display: 'flex', alignItems: 'center', gap: '4px', color: '#1e293b', zIndex: 110 }}>
                                <Signal size={10} strokeWidth={2.5} />
                                <Wifi size={10} strokeWidth={2.5} />
                                <Battery size={12} strokeWidth={2.5} />
                            </div>
                            <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '20px', background: 'black', borderRadius: '10px', zIndex: 100 }}></div>

                            <div style={{ padding: '3.5rem 1.2rem', color: '#1e293b' }}>
                                <div style={{ textAlign: 'center', marginBottom: '1.5rem', opacity: 0.5, fontSize: '0.6rem', letterSpacing: '2px', fontWeight: 800 }}>THE SPOT RESTAURANT</div>
                                <div style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
                                    <h3 style={{ fontSize: '0.7rem', color: '#6366f1', marginBottom: '0.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.2rem' }}>APPETIZERS</h3>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}><span style={{ fontSize: '0.65rem' }}>Classic Bruschetta</span><span style={{ fontSize: '0.6rem', opacity: 0.7 }}>$8</span></div>
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '0.7rem', color: '#6366f1', marginBottom: '0.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.2rem' }}>MAIN COURSES</h3>
                                    <motion.div
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
                                <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', background: 'rgba(0,0,0,0.1)', borderRadius: '2px' }}></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
