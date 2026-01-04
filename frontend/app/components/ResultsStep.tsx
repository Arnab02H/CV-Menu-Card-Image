"use client";

import { motion } from "framer-motion";

interface ResultsStepProps {
    analysisResults: any[];
    isAnalyzing: boolean;
    downloadJSON: () => void;
}

export default function ResultsStep({ analysisResults, isAnalyzing, downloadJSON }: ResultsStepProps) {
    return (
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
                {analysisResults.map((dish, i) => (
                    <motion.div
                        key={i}
                        className="glass-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                            <span style={{ background: 'var(--primary-glow)', color: 'var(--primary)', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 700 }}>
                                {dish.language_original}
                            </span>
                            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{dish.currency}{dish.price}</span>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{dish.translated_name}</h3>
                        <p style={{ fontSize: '0.8rem', opacity: 0.5, fontStyle: 'italic', marginBottom: '0.75rem' }}>{dish.dish_name}</p>

                        <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1.5rem', flexGrow: 1 }}>{dish.description}</p>

                        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <button
                                onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(dish.translated_name + ' food')}`, '_blank')}
                                style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600 }}
                            >
                                Details &rarr;
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            {analysisResults.length === 0 && !isAnalyzing && (
                <div style={{ textAlign: 'center', padding: '5rem' }}>
                    <p style={{ opacity: 0.5 }}>No dishes extracted. Try uploading a clearer image.</p>
                </div>
            )}
            <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                <button className="btn-primary" onClick={downloadJSON} style={{ padding: '1rem 3rem' }}>
                    Download JSON Format
                </button>
            </div>
        </motion.section>
    );
}
