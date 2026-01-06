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
                        style={{
                            padding: '2rem',
                            border: dish.is_recommended ? '2px solid var(--primary)' : '1px solid var(--card-border)',
                            background: dish.is_recommended ? 'rgba(var(--primary-rgb), 0.05)' : 'var(--card-bg)',
                            position: 'relative'
                        }}
                    >
                        {dish.is_recommended && (
                            <div style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '20px',
                                background: 'var(--primary)',
                                color: 'black',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: 800
                            }}>
                                RECOMMENDED
                            </div>
                        )}

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{dish.dish_name}</h3>
                            <div style={{ textAlign: 'right' }}>
                                {dish.price && (
                                    <div className="gradient-text" style={{ fontWeight: 800, fontSize: '1.2rem' }}>{dish.price}</div>
                                )}
                                {dish.calories && (
                                    <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>{dish.calories} cal</div>
                                )}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
                            {dish.translated_name && dish.translated_name !== dish.dish_name && (
                                <div style={{ fontSize: '0.95rem', fontStyle: 'italic', opacity: 0.8, color: 'var(--secondary)' }}>
                                    "{dish.translated_name}"
                                </div>
                            )}
                            {dish.original_language && (
                                <span style={{ fontSize: '0.75rem', opacity: 0.5, padding: '0.1rem 0.5rem', border: '1px solid var(--glass-border)', borderRadius: '6px' }}>
                                    {dish.original_language}
                                </span>
                            )}
                        </div>

                        <div style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            {dish.description}
                        </div>

                        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            {dish.safety_score && (
                                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid var(--glass-border)' }}>
                                    Safety: {dish.safety_score}/10
                                </span>
                            )}
                            {dish.dietary_tags?.map((tag: string) => (
                                <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '100px', background: 'rgba(var(--primary-rgb), 0.1)', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {dish.match_reason && (
                            <div style={{
                                marginTop: '1rem',
                                padding: '1.25rem',
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: '12px',
                                fontSize: '0.9rem',
                                borderLeft: `3px solid ${dish.is_recommended ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`
                            }}>
                                <span style={{ fontWeight: 600, color: dish.is_recommended ? 'var(--primary)' : 'inherit', display: 'block', marginBottom: '0.25rem' }}>AI Recommendation Insight: </span>
                                {dish.match_reason}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
