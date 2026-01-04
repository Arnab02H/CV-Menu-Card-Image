"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

interface ResultsStepProps {
    analysisResults: any[];
    isAnalyzing: boolean;
    downloadJSON: () => void;
}

export default function ResultsStep({ analysisResults, isAnalyzing, downloadJSON }: ResultsStepProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Menu Analysis</h2>
                    <p style={{ opacity: 0.6 }}>Based on your preferences and diet.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={downloadJSON} className="glass-card" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '12px', fontWeight: 600, cursor: 'pointer' }}>
                        <Download size={18} /> Export JSON
                    </button>
                    <button className="btn-primary" onClick={() => window.location.reload()}>
                        New Scan
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                {analysisResults.map((dish: any, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{ padding: '2rem', border: '1px solid var(--card-border)', background: 'var(--card-bg)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{dish.name}</h3>
                            <span className="gradient-text" style={{ fontWeight: 800, fontSize: '1.1rem' }}>{dish.calories} cal</span>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
                            {dish.dietary_tags.map((tag: string) => (
                                <span key={tag} style={{ padding: '0.3rem 0.8rem', borderRadius: '100px', background: 'var(--primary-glow)', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 700, border: '1px solid var(--primary)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            {dish.ingredients.join(", ")}
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase', marginBottom: '0.3rem' }}>Spiciness</div>
                                <div style={{ fontWeight: 700, color: dish.spice_level === 'High' ? 'var(--accent)' : 'var(--foreground)' }}>{dish.spice_level}</div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase', marginBottom: '0.3rem' }}>Safety Score</div>
                                <div style={{ fontWeight: 800, color: dish.safety_score >= 8 ? '#10b981' : '#f59e0b' }}>{dish.safety_score}/10</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
