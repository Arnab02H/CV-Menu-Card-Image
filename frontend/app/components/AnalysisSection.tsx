"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Upload, ChevronDown, Check, ArrowUp, Plus, X, Utensils, AudioLines, Image as ImageIcon, Camera, FileText, Square } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface AnalysisSectionProps {
    files: File[];
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    cuisine: string;
    setCuisine: (val: string) => void;
    spiceLevel: string;
    setSpiceLevel: (val: string) => void;
    dietaryConstraints: string[];
    toggleConstraint: (tag: string) => void;
    runAnalysis: (voiceQuery?: string) => void;
    isAnalyzing: boolean;
    setStep: (step: number) => void;
    analysisResults?: any[];
    budgetSensitivity: string;
    setBudgetSensitivity: (val: string) => void;
    targetLanguage: string;
    setTargetLanguage: (val: string) => void;
    extractionMethod: string;
    setExtractionMethod: (val: string) => void;
    rawOcrText?: string | null;
    error: string | null;
}

const CustomDropdown = ({ value, onChange, options, placeholder, defaultVal = "", isMobile = false }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = value !== defaultVal;
    
    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    appearance: 'none',
                    background: isActive ? 'rgba(var(--primary-rgb), 0.15)' : 'rgba(255,255,255,0.05)',
                    border: isActive ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.08)',
                    color: 'white',
                    padding: '0.4rem 2.2rem 0.4rem 1.2rem',
                    borderRadius: '100px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    fontWeight: 600,
                    height: '38px',
                    minWidth: '120px',
                    outline: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 0 10px rgba(var(--primary-rgb), 0.2)' : 'none'
                }}
            >
                {options.find((o: any) => o.id === value)?.label || placeholder}
                <ChevronDown size={14} style={{ position: 'absolute', right: 12, opacity: 0.6, color: isActive ? 'var(--primary)' : 'white', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div 
                            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 90 }} 
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={isMobile ? { opacity: 0, y: '100%' } : { opacity: 0, y: -10, scale: 0.95 }}
                            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, scale: 1 }}
                            exit={isMobile ? { opacity: 0, y: '100%' } : { opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                            style={isMobile ? {
                                position: 'fixed',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                maxHeight: '50vh',
                                overflowY: 'auto',
                                background: '#151518',
                                borderTop: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '24px 24px 0 0',
                                padding: '1.5rem 1rem 3rem 1rem', // Safe area padding
                                boxShadow: '0 -20px 40px rgba(0,0,0,0.5)',
                                zIndex: 1000,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.2rem',
                            } : {
                                position: 'absolute',
                                bottom: 'calc(100% + 10px)',
                                left: 0,
                                minWidth: '160px',
                                maxHeight: '250px',
                                overflowY: 'auto',
                                background: '#151518',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '16px',
                                padding: '0.4rem',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.3)',
                                zIndex: 100,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.2rem',
                                backdropFilter: 'blur(20px)'
                            }}
                            className="hide-scroll"
                        >
                            <button
                                onClick={() => { onChange(defaultVal); setIsOpen(false); }}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '0.6rem 0.8rem',
                                    background: 'transparent',
                                    border: 'none',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                    textAlign: 'left'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                                {placeholder}
                                {value === defaultVal && <Check size={14} color="#3b82f6" />}
                            </button>
                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0.2rem 0', flexShrink: 0 }} />
                            {options.map((opt: any) => (
                                <button
                                    key={opt.id}
                                    onClick={() => { onChange(opt.id); setIsOpen(false); }}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '0.6rem 0.8rem',
                                        background: 'transparent',
                                        border: 'none',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        color: 'white',
                                        fontWeight: 500,
                                        fontSize: '0.85rem',
                                        textAlign: 'left'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    {opt.label}
                                    {value === opt.id && <Check size={14} color="#3b82f6" />}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function AnalysisSection({
    files,
    handleFileChange,
    cuisine,
    setCuisine,
    spiceLevel,
    setSpiceLevel,
    dietaryConstraints,
    toggleConstraint,
    runAnalysis,
    isAnalyzing,
    setStep,
    analysisResults = [],
    budgetSensitivity,
    setBudgetSensitivity,
    targetLanguage,
    setTargetLanguage,
    extractionMethod,
    setExtractionMethod,
    rawOcrText,
    error
}: AnalysisSectionProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);
    const photoInputRef = useRef<HTMLInputElement>(null);
    const docInputRef = useRef<HTMLInputElement>(null);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isUploadMenuOpen, setIsUploadMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [filter, setFilter] = useState<'all' | 'recommended'>('recommended');
    const [showInputBar, setShowInputBar] = useState(true);
    const [dishImages, setDishImages] = useState<{ [key: string]: string }>({});
    const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});
    const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
    const [isAdaptive, setIsAdaptive] = useState(false);
    const [showRawOcr, setShowRawOcr] = useState(true);
    const [isRecording, setIsRecording] = useState(false);
    const [voiceText, setVoiceText] = useState("");
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = true;
                
                recognition.onresult = (event: any) => {
                    let text = "";
                    for (let i = 0; i < event.results.length; i++) {
                        text += event.results[i][0].transcript;
                    }
                    setVoiceText(text);
                };

                recognition.onerror = (event: any) => {
                    console.error("Speech recognition error", event.error);
                    setIsRecording(false);
                };

                recognitionRef.current = recognition;
            }
        }
    }, []);

    const toggleRecording = () => {
        if (!recognitionRef.current) {
            alert("Voice recognition is not supported in this browser.");
            return;
        }

        if (isRecording) {
            recognitionRef.current.stop();
            setIsRecording(false);
            if (files.length > 0) {
                setTimeout(() => runAnalysis(voiceText), 500);
            }
        } else {
            setVoiceText("");
            recognitionRef.current.start();
            setIsRecording(true);
        }
    };
    const lastScrollY = useRef(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const currentScrollY = e.currentTarget.scrollTop;
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setShowInputBar(false);
        } else {
            setShowInputBar(true);
        }
        lastScrollY.current = currentScrollY;
    };

    // Auto-scroll when results arrive
    useEffect(() => {
        if (analysisResults.length > 0 || isAnalyzing) {
            chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [analysisResults, isAnalyzing]);

    // Update preview when file is selected
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            handleFileChange(e);
        }
        setIsUploadMenuOpen(false);
    };

    const clearFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const fetchDishImage = async (dishName: string, translatedName?: string) => {
        const nameToSearch = translatedName || dishName;
        if (dishImages[nameToSearch] || loadingImages[nameToSearch]) return;

        setLoadingImages(prev => ({ ...prev, [nameToSearch]: true }));
        try {
            const response = await fetch(`http://localhost:8000/search-image?dish_name=${encodeURIComponent(nameToSearch)}`);
            if (response.ok) {
                const data = await response.json();
                setDishImages(prev => ({ ...prev, [nameToSearch]: data.image_url }));
            }
        } catch (err) {
            console.error("Failed to fetch image:", err);
        } finally {
            setLoadingImages(prev => ({ ...prev, [nameToSearch]: false }));
        }
    };

    const renderPreferencePills = () => (
        <>
            {/* Cuisine */}
            <CustomDropdown 
                value={cuisine} 
                onChange={setCuisine} 
                options={[
                    {id: "italian", label: "Italian"}, 
                    {id: "chinese", label: "Chinese"}, 
                    {id: "indian", label: "Indian"}, 
                    {id: "japanese", label: "Japanese"}, 
                    {id: "mexican", label: "Mexican"}
                ]}
                placeholder="Cuisine?"
                defaultVal=""
                isMobile={isMobile}
            />

            {/* Spice */}
            <CustomDropdown 
                value={spiceLevel} 
                onChange={setSpiceLevel} 
                options={[
                    {id: "Low", label: "Low"}, 
                    {id: "Medium", label: "Medium"}, 
                    {id: "High", label: "High"}
                ]}
                placeholder="Spice?"
                defaultVal="Medium"
                isMobile={isMobile}
            />

            {/* Budget */}
            <CustomDropdown 
                value={budgetSensitivity} 
                onChange={setBudgetSensitivity} 
                options={[
                    {id: "Value", label: "Value"}, 
                    {id: "Standard", label: "Standard"}, 
                    {id: "Premium", label: "Premium"}
                ]}
                placeholder="Budget?"
                defaultVal="Normal"
                isMobile={isMobile}
            />

            {/* Language */}
            <CustomDropdown 
                value={targetLanguage} 
                onChange={setTargetLanguage} 
                options={[ 
                    {id: "English", label: "English"}, 
                    {id: "Spanish", label: "Spanish"}, 
                    {id: "French", label: "French"}, 
                    {id: "German", label: "German"}, 
                    {id: "Hindi", label: "Hindi"}, 
                    {id: "Bengali", label: "Bengali"}, 
                    {id: "Japanese", label: "Japanese"}, 
                    {id: "Chinese", label: "Chinese"}, 
                    {id: "Arabic", label: "Arabic"}, 
                    {id: "Russian", label: "Russian"}, 
                    {id: "Portuguese", label: "Portuguese"}
                ]}
                placeholder="Language?"
                defaultVal="English"
                isMobile={isMobile}
            />

            <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', flexShrink: 0, margin: '0 0.2rem' }} />
            {['Veg', 'Non-Veg', 'Allergies', 'Vegan', 'Nut-Free', 'Dairy-Free', 'GF'].map(tag => (
                <motion.button
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleConstraint(tag)}
                    style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '100px',
                        fontSize: '0.8rem',
                        whiteSpace: 'nowrap',
                        background: dietaryConstraints.includes(tag) ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                        border: dietaryConstraints.includes(tag) ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontWeight: 600
                    }}
                >
                    {tag}
                </motion.button>
            ))}
        </>
    );

    return (
        <motion.section
            key="chat-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100%',
                background: 'var(--background)',
                paddingTop: '8rem', // Space for Navbar
                boxSizing: 'border-box',
                position: 'relative'
            }}
        >
            <style jsx>{`
                .chat-container {
                    flex: 1;
                    width: 100%;
                    max-width: 900px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                    padding: 0 1rem 220px 1rem; /* Increased padding */
                    position: relative;
                    scrollbar-width: none; /* Hide scrollbar for cleaner look */
                }

                .chat-container::-webkit-scrollbar {
                    display: none;
                }

                .input-bar-container {
                    position: fixed;
                    bottom: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 90%;
                    max-width: 800px;
                    z-index: 50;
                }

                .chat-input-box {
                    background: var(--card-bg);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: 1.5rem;
                    padding: 0.75rem;
                    display: flex;
                    align-items: flex-end;
                    gap: 0.75rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                    transition: border-color 0.2s;
                }
                
                .chat-input-box:focus-within {
                    border-color: var(--primary);
                }

                .preferences-area {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    min-height: 48px;
                    justify-content: center;
                }

                .pref-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    align-items: center;
                }

                .pref-chip {
                    font-size: 0.75rem;
                    padding: 0.3rem 0.8rem;
                    border-radius: 100px;
                    background: var(--glass-bg);
                    border: 1px solid var(--glass-border);
                    color: var(--foreground);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    transition: all 0.2s;
                    white-space: nowrap;
                }

                .pref-chip.active {
                    background: rgba(var(--primary-rgb), 0.1); /* Fallback if var not set, using hard color */
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                }

                .send-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                    background: var(--primary);
                    color: white;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                    flex-shrink: 0;
                }

                .send-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    background: var(--glass-border);
                }

                .image-preview {
                    width: 60px;
                    height: 60px;
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                    flex-shrink: 0;
                    border: 1px solid var(--glass-border);
                }
                
                .upload-trigger {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: var(--glass-bg);
                    border: 1px solid var(--glass-border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: var(--foreground);
                    transition: all 0.2s;
                    flex-shrink: 0;
                    margin-bottom: 4px; /* Align with bottom of input */
                }

                .upload-trigger:hover {
                    background: var(--glass-border);
                }

                /* Mobile Adaptations */
                @media (max-width: 768px) {
                    .input-bar-container {
                        bottom: 1rem;
                        width: 95%;
                    }
                    .chat-input-box {
                        padding: 0.5rem;
                    }
                }

                /* Hide scrollbar for chips */
                .hide-scroll::-webkit-scrollbar {
                    display: none;
                }

                .hover-scale {
                    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .hover-scale:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                    border-color: rgba(var(--primary-rgb), 0.5) !important;
                }
                .hover-scale:active {
                    transform: scale(0.95);
                }
            `}</style>

            {/* Main Content Area (Results or Empty) */}
            <div className="chat-container" onScroll={handleScroll}>
                {files.length === 0 && analysisResults.length === 0 && (
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.6,
                        minHeight: '400px'
                    }}>
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: '1.5rem',
                            boxShadow: '0 10px 30px var(--primary-glow)'
                        }}>
                            <Utensils color="white" size={32} />
                        </div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>How can I help you dine?</h2>
                        <p style={{ textAlign: 'center', maxWidth: '400px', color: 'var(--foreground)' }}>Upload a menu image below and set your preferences to get AI-powered recommendations.</p>
                    </div>
                )}

                {isAnalyzing && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="animate-spin" style={{ width: '40px', height: '40px', border: '3px solid var(--glass-border)', borderTop: '3px solid var(--primary)', borderRadius: '50%', marginBottom: '1rem' }}></div>
                        <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>Reading menu & analyzing options...</p>
                    </div>
                )}

                {error && (
                    <div style={{
                        margin: '1rem auto',
                        padding: '1rem',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderRadius: '12px',
                        color: '#ef4444',
                        maxWidth: '600px',
                        width: '100%',
                        textAlign: 'center',
                        fontSize: '0.9rem'
                    }}>
                        {error}
                    </div>
                )}

                {/* Raw OCR Text Panel (only for EasyOCR / PaddleOCR) */}
                {!isAnalyzing && rawOcrText && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            width: '100%',
                            marginBottom: '1.5rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(251, 191, 36, 0.3)',
                            background: 'rgba(251, 191, 36, 0.04)',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <button
                            onClick={() => setShowRawOcr(v => !v)}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0.8rem 1rem',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'white'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <span style={{ fontSize: '1rem' }}>⚠️</span>
                                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fbbf24' }}>Raw OCR Output</span>
                                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>Results may be noisy — Gemini will interpret this below</span>
                            </div>
                            <ChevronDown size={16} style={{ color: '#fbbf24', transform: showRawOcr ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                        </button>

                        {/* Collapsible Body */}
                        <AnimatePresence>
                            {showRawOcr && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <pre style={{
                                        margin: 0,
                                        padding: '0 1rem 1rem 1rem',
                                        fontSize: '0.75rem',
                                        color: 'rgba(255,255,255,0.6)',
                                        whiteSpace: 'pre-wrap',
                                        wordBreak: 'break-word',
                                        lineHeight: 1.7,
                                        fontFamily: 'monospace',
                                        maxHeight: '220px',
                                        overflowY: 'auto'
                                    }} className="hide-scroll">
                                        {rawOcrText}
                                    </pre>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}

                {/* Results Grid - Keeping it clean, no images */}
                {!isAnalyzing && analysisResults.length > 0 && (
                    <div style={{ width: '100%', paddingBottom: '2rem' }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            marginBottom: '1.5rem'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--foreground)', fontWeight: 800 }}>Analysis Results</h3>
                                <div style={{ display: 'flex', gap: '0.6rem' }}>
                                    <button onClick={() => setStep(2)} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--foreground)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '0.5rem 1rem', borderRadius: '100px', cursor: 'pointer', transition: 'all 0.2s ease' }}>Report</button>
                                    <button onClick={() => runAnalysis()} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', background: 'rgba(var(--primary-rgb), 0.1)', border: '1px solid var(--primary)', padding: '0.5rem 1rem', borderRadius: '100px', cursor: 'pointer' }}>Retry</button>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }} className="hide-scroll">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setFilter('recommended')}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.6rem 1.2rem',
                                        background: filter === 'recommended' ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : 'rgba(255,255,255,0.05)',
                                        borderRadius: '100px',
                                        border: filter === 'recommended' ? 'none' : '1px solid var(--glass-border)',
                                        color: 'white',
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        boxShadow: filter === 'recommended' ? '0 4px 15px var(--primary-glow)' : 'none',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    ✨ Recommended Dishes
                                </motion.button>
                                <button
                                    onClick={() => setFilter('all')}
                                    style={{
                                        padding: '0.6rem 1.2rem',
                                        background: filter === 'all' ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                                        border: filter === 'all' ? '1px solid white' : '1px solid var(--glass-border)',
                                        borderRadius: '100px',
                                        color: 'white',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    All Items ({analysisResults.length})
                                </button>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                            {analysisResults
                                .filter(dish => filter === 'all' || dish.is_recommended)
                                .map((dish, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="glass-card"
                                        style={{
                                            padding: '1.25rem',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.5rem',
                                            border: dish.is_recommended ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                            background: dish.is_recommended ? 'rgba(var(--primary-rgb), 0.05)' : 'var(--card-bg)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
                                                {dish.dish_name}
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                {dish.price && (
                                                    <div style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 800, background: 'rgba(var(--primary-rgb), 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>
                                                        {dish.price}
                                                    </div>
                                                )}
                                                {dish.calories && (
                                                    <div style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '0.2rem' }}>
                                                        {dish.calories} kcal
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '-0.2rem' }}>
                                            {dish.translated_name && dish.translated_name !== dish.dish_name && (
                                                <div style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.7, color: 'var(--secondary)', fontWeight: 500 }}>
                                                    {dish.translated_name}
                                                </div>
                                            )}
                                            {dish.original_language && (
                                                <span style={{ fontSize: '0.65rem', opacity: 0.5, padding: '0.1rem 0.4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                    {dish.original_language}
                                                </span>
                                            )}
                                        </div>

                                        <p style={{ fontSize: '0.9rem', color: 'var(--foreground)', opacity: 0.8, lineHeight: 1.5, flex: 1, marginTop: '0.5rem' }}>
                                            {dish.description}
                                        </p>

                                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                                            {dish.safety_score && (
                                                <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid var(--glass-border)', color: 'var(--foreground)', opacity: 0.8 }}>
                                                    Safety: {dish.safety_score}/10
                                                </span>
                                            )}
                                            {dish.dietary_tags?.map((tag: string) => (
                                                <span key={tag} style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: '100px', background: 'rgba(var(--primary-rgb), 0.1)', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {dish.match_reason && (
                                            <div style={{
                                                fontSize: '0.8rem',
                                                padding: '0.8rem',
                                                background: 'rgba(255,255,255,0.03)',
                                                borderRadius: '12px',
                                                marginTop: '0.5rem',
                                                borderLeft: `3px solid ${dish.is_recommended ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`,
                                                lineHeight: 1.4
                                            }}>
                                                <span style={{ fontWeight: 700, color: dish.is_recommended ? 'var(--primary)' : 'inherit', opacity: 1, display: 'block', marginBottom: '0.2rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Recommendation Insight</span>
                                                <span style={{ opacity: 0.9 }}>{dish.match_reason}</span>
                                            </div>
                                        )}

                                        {/* View Image Section */}
                                        <div style={{ marginTop: '0.8rem' }}>
                                            {dishImages[dish.translated_name || dish.dish_name] ? (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    style={{
                                                        width: '100%',
                                                        height: '180px',
                                                        borderRadius: '12px',
                                                        overflow: 'hidden',
                                                        border: '1px solid var(--glass-border)',
                                                        position: 'relative'
                                                    }}
                                                >
                                                    <img
                                                        src={dishImages[dish.translated_name || dish.dish_name]}
                                                        alt={dish.dish_name}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                    <button
                                                        onClick={() => {
                                                            const name = dish.translated_name || dish.dish_name;
                                                            setDishImages(prev => {
                                                                const next = { ...prev };
                                                                delete next[name];
                                                                return next;
                                                            });
                                                        }}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '8px',
                                                            right: '8px',
                                                            background: 'rgba(0,0,0,0.6)',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '50%',
                                                            width: '24px',
                                                            height: '24px',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </motion.div>
                                            ) : (
                                                <button
                                                    onClick={() => fetchDishImage(dish.dish_name, dish.translated_name)}
                                                    disabled={loadingImages[dish.translated_name || dish.dish_name]}
                                                    style={{
                                                        width: '100%',
                                                        padding: '0.6rem',
                                                        borderRadius: '10px',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        border: '1px solid var(--glass-border)',
                                                        color: 'white',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 600,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: '0.5rem',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                >
                                                    {loadingImages[dish.translated_name || dish.dish_name] ? (
                                                        <div className="animate-spin" style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.2)', borderTop: '2px solid white', borderRadius: '50%' }}></div>
                                                    ) : (
                                                        <ImageIcon size={16} />
                                                    )}
                                                    {loadingImages[dish.translated_name || dish.dish_name] ? 'Searching...' : 'View Dish Image'}
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>

            {/* Fixed Chat Input Area - Redesigned for Premium Look */}
            <div style={{
                position: 'fixed',
                bottom: '1rem',
                left: '50%',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                width: 'min(95%, 900px)',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                transform: `translateX(-50%) translateY(${showInputBar ? '0' : '150%'})`,
                opacity: showInputBar ? 1 : 0
            }}>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="glass-card"
                    style={{
                        padding: isMobile ? '0.7rem' : '0.8rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.8rem',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'linear-gradient(180deg, rgba(20, 20, 25, 0.95) 0%, rgba(15, 15, 18, 0.98) 100%)',
                        backdropFilter: 'blur(30px)',
                        borderRadius: '28px',
                        position: 'relative'
                    }}
                >
                    {isRecording ? (
                        <div style={{ fontSize: '1.1rem', color: 'white', padding: '0.2rem 0.5rem', marginBottom: '0.8rem', fontWeight: 500 }}>
                            {voiceText || "Listening..."}
                        </div>
                    ) : voiceText ? (
                        <div style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', padding: '0.2rem 0.5rem', marginBottom: '0.8rem', fontWeight: 400 }}>
                            "{voiceText}"
                        </div>
                    ) : isMobile ? (
                        <div style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)', padding: '0.2rem 0.5rem', marginBottom: '0.8rem', fontWeight: 400 }}>
                            How can I help you dine?
                        </div>
                    ) : null}
                    {/* Unified Action Bar: Upload, Preferences & Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        
                        {/* File Upload/Preview */}
                        <div style={{ position: 'relative', flexShrink: 0, marginTop: '2px' }}>
                            {previewUrl ? (
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--primary)',
                                    position: 'relative'
                                }}>
                                    <img src={previewUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Preview" />
                                    <button
                                        onClick={clearFile}
                                        style={{
                                            position: 'absolute', top: 0, right: 0,
                                            background: 'rgba(0,0,0,0.8)', border: 'none',
                                            color: 'white', width: '16px', height: '16px',
                                            fontSize: '10px', cursor: 'pointer', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center'
                                        }}
                                    >
                                        <X size={10} />
                                    </button>
                                </div>
                            ) : (
                                <div
                                    onClick={() => isMobile ? setIsUploadMenuOpen(!isUploadMenuOpen) : fileInputRef.current?.click()}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--glass-border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: 'white',
                                        flexShrink: 0
                                    }}
                                >
                                    <Plus size={20} />
                                </div>
                            )}
                            <input ref={fileInputRef} type="file" multiple onChange={onFileChange} accept="image/*" style={{ display: 'none' }} />

                            {/* Upload Popover (Mobile Only) */}
                            <AnimatePresence>
                                {isUploadMenuOpen && isMobile && (
                                    <>
                                        {/* Invisible overlay */}
                                        <div 
                                            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 90 }} 
                                            onClick={() => setIsUploadMenuOpen(false)}
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            style={{
                                                position: 'absolute',
                                                bottom: 'calc(100% + 15px)',
                                                left: 0,
                                                width: '200px',
                                                background: '#151518',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                borderRadius: '16px',
                                                padding: '0.4rem',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.3)',
                                                zIndex: 100,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.2rem',
                                                backdropFilter: 'blur(20px)'
                                            }}
                                        >
                                            <button
                                                onClick={() => { cameraInputRef.current?.click(); setIsUploadMenuOpen(false); }}
                                                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.7rem 0.8rem', color: 'white', background: 'transparent', border: 'none', borderRadius: '10px', cursor: 'pointer', textAlign: 'left', fontSize: '0.9rem', fontWeight: 500, transition: 'background 0.2s' }}
                                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                            >
                                                <Camera size={18} opacity={0.7} /> <span>Camera</span>
                                            </button>
                                            <button
                                                onClick={() => { photoInputRef.current?.click(); setIsUploadMenuOpen(false); }}
                                                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.7rem 0.8rem', color: 'white', background: 'transparent', border: 'none', borderRadius: '10px', cursor: 'pointer', textAlign: 'left', fontSize: '0.9rem', fontWeight: 500, transition: 'background 0.2s' }}
                                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                            >
                                                <ImageIcon size={18} opacity={0.7} /> <span>Photos</span>
                                            </button>
                                            <button
                                                onClick={() => { docInputRef.current?.click(); setIsUploadMenuOpen(false); }}
                                                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.7rem 0.8rem', color: 'white', background: 'transparent', border: 'none', borderRadius: '10px', cursor: 'pointer', textAlign: 'left', fontSize: '0.9rem', fontWeight: 500, transition: 'background 0.2s' }}
                                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                            >
                                                <FileText size={18} opacity={0.7} /> <span>Files</span>
                                            </button>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>

                            {/* Hidden mobile specific inputs */}
                            <input ref={cameraInputRef} type="file" onChange={onFileChange} accept="image/*" capture="environment" style={{ display: 'none' }} />
                            <input ref={photoInputRef} type="file" multiple onChange={onFileChange} accept="image/*" style={{ display: 'none' }} />
                            <input ref={docInputRef} type="file" multiple onChange={onFileChange} accept="*/*" style={{ display: 'none' }} />
                        </div>

                        {/* Desktop: Render pills directly inline in the center */}
                        {!isMobile && (
                            <div className="hide-scroll" style={{
                                flex: 1,
                                display: 'flex',
                                gap: '0.5rem',
                                flexWrap: 'wrap',
                                overflowX: 'visible',
                                alignItems: 'center',
                                paddingBottom: '0.2rem',
                                paddingLeft: '0.8rem'
                            }}>
                                {renderPreferencePills()}
                            </div>
                        )}

                        {/* Custom Model Selection Dropdown */}
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexShrink: 0, marginLeft: 'auto' }}>
                            <button
                                onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--foreground)',
                                    opacity: isModelDropdownOpen ? 1 : 0.6,
                                    padding: '0.4rem 0.2rem 0.4rem 0.6rem',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    outline: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.3rem',
                                    transition: 'all 0.2s ease',
                                    letterSpacing: '0.02em',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {extractionMethod === 'gemini' ? 'Gemini Pro' : extractionMethod === 'easyocr' ? 'Easy OCR' : 'PaddleOCR'}
                                <ChevronDown size={14} style={{ opacity: 0.5, transform: isModelDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                            </button>

                            <AnimatePresence>
                                {isModelDropdownOpen && (
                                    <>
                                        {/* Invisible overlay to catch clicks outside the popover */}
                                        <div 
                                            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 90 }} 
                                            onClick={() => setIsModelDropdownOpen(false)}
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                                            style={{
                                                position: 'absolute',
                                                bottom: 'calc(100% + 15px)',
                                                right: 0,
                                                width: '280px',
                                                background: '#151518',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                borderRadius: '16px',
                                                padding: '0.5rem',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.3)',
                                                zIndex: 100,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.2rem',
                                                backdropFilter: 'blur(20px)'
                                            }}
                                        >
                                            {[
                                                { id: 'gemini', name: 'Gemini Pro', desc: 'Most capable for ambitious work', upgrade: true },
                                                { id: 'easyocr', name: 'Easy OCR', desc: 'Fastest for quick answers' },
                                                { id: 'paddleocr', name: 'PaddleOCR', desc: 'Best for complex layouts' }
                                            ].map((model) => (
                                                <button
                                                    key={model.id}
                                                    onClick={() => { setExtractionMethod(model.id); setIsModelDropdownOpen(false); }}
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'flex-start',
                                                        padding: '0.6rem 0.8rem',
                                                        background: 'transparent',
                                                        border: 'none',
                                                        borderRadius: '10px',
                                                        cursor: 'pointer',
                                                        transition: 'background 0.2s',
                                                        position: 'relative',
                                                        width: '100%',
                                                        textAlign: 'left'
                                                    }}
                                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                                    onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                                >
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                                                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'white' }}>{model.name}</span>
                                                        {model.upgrade ? (
                                                            <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', border: '1px solid rgba(99, 102, 241, 0.4)', color: '#818cf8', borderRadius: '100px', fontWeight: 600 }}>Pro</span>
                                                        ) : extractionMethod === model.id ? (
                                                            <Check size={16} color="#3b82f6" />
                                                        ) : null}
                                                    </div>
                                                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem' }}>{model.desc}</span>
                                                </button>
                                            ))}
                                            
                                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0.4rem 0' }} />
                                            
                                            <div style={{ padding: '0.6rem 0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'white' }}>Adaptive thinking</span>
                                                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.1rem' }}>Thinks for more complex tasks</span>
                                                </div>
                                                
                                                {/* Custom Toggle Switch */}
                                                <button 
                                                    onClick={() => setIsAdaptive(!isAdaptive)}
                                                    style={{
                                                        width: '36px', height: '20px', borderRadius: '100px',
                                                        background: isAdaptive ? '#3b82f6' : 'rgba(255,255,255,0.2)',
                                                        border: 'none', position: 'relative', cursor: 'pointer', transition: 'background 0.3s', flexShrink: 0
                                                    }}
                                                >
                                                    <div style={{
                                                        width: '16px', height: '16px', background: 'white', borderRadius: '50%',
                                                        position: 'absolute', top: '2px', left: isAdaptive ? '18px' : '2px',
                                                        transition: 'left 0.3s ease', boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                                    }} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Submit Button */}
                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            animate={files.length > 0 && !isAnalyzing ? {
                                boxShadow: [
                                    "0 0 0px rgba(99, 102, 241, 0)",
                                    "0 0 20px rgba(99, 102, 241, 0.4)",
                                    "0 0 0px rgba(99, 102, 241, 0)"
                                ]
                            } : {}}
                            transition={{ repeat: Infinity, duration: 2 }}
                            onClick={() => {
                                if (isRecording) {
                                    toggleRecording();
                                } else if (cuisine || dietaryConstraints.length > 0 || (spiceLevel && spiceLevel !== "Medium") || (budgetSensitivity && budgetSensitivity !== "Normal") || (targetLanguage && targetLanguage !== "English")) {
                                    if (files.length > 0) runAnalysis(voiceText); else alert("Please upload an image first!");
                                } else {
                                    toggleRecording();
                                }
                            }}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: isAnalyzing 
                                    ? 'rgba(255,255,255,0.1)' 
                                    : isRecording
                                        ? '#ef4444'
                                        : (cuisine || dietaryConstraints.length > 0 || (spiceLevel && spiceLevel !== "Medium") || (budgetSensitivity && budgetSensitivity !== "Normal") || (targetLanguage && targetLanguage !== "English")) 
                                            ? 'var(--primary)' 
                                            : 'white',
                                color: (cuisine || dietaryConstraints.length > 0 || (spiceLevel && spiceLevel !== "Medium") || (budgetSensitivity && budgetSensitivity !== "Normal") || (targetLanguage && targetLanguage !== "English") || isRecording) 
                                    ? 'white' 
                                    : 'black',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                opacity: 1,
                                flexShrink: 0
                            }}
                        >
                            {isAnalyzing ? (
                                <div className="animate-spin" style={{ width: '18px', height: '18px', border: '2px solid rgba(0,0,0,0.1)', borderTop: '2px solid #fff', borderRadius: '50%' }}></div>
                            ) : isRecording ? (
                                <Square size={16} fill="white" color="white" />
                            ) : (cuisine || dietaryConstraints.length > 0 || (spiceLevel && spiceLevel !== "Medium") || (budgetSensitivity && budgetSensitivity !== "Normal") || (targetLanguage && targetLanguage !== "English")) ? (
                                <ArrowUp size={20} strokeWidth={3} />
                            ) : (
                                <AudioLines size={20} strokeWidth={2.5} />
                            )}
                        </motion.button>
                    </div>

                </motion.div>

                {/* Mobile: Selectable Pills styled below the box natively */}
                {isMobile && (
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="hide-scroll"
                        style={{
                            display: 'flex',
                            gap: '0.5rem',
                            flexWrap: 'nowrap',
                            overflowX: 'auto',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            width: '100%',
                            padding: '0 0.5rem'
                        }}
                    >
                        {renderPreferencePills()}
                    </motion.div>
                )}

                {/* Disclaimer */}
                <div style={{
                    fontSize: '0.6rem',
                    opacity: 0.3,
                    textAlign: 'center',
                    color: 'white',
                    letterSpacing: '0.02em',
                    paddingBottom: '0.2rem'
                }}>
                    Linguine AI can make mistakes. Please verify important dietary info.
                </div>
            </div>

        </motion.section >
    );
}
