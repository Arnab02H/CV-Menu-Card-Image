"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Mission from "./components/Mission";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UploadStep from "./components/UploadStep";
import PreferencesStep from "./components/PreferencesStep";
import ResultsStep from "./components/ResultsStep";

export default function Home() {
    const [step, setStep] = useState(0); // 0 = Landing, 1 = Upload, 2 = Preferences, 3 = Results
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [files, setFiles] = useState<File[]>([]);
    const [cuisine, setCuisine] = useState("");
    const [spiceLevel, setSpiceLevel] = useState("Medium");
    const [dietaryConstraints, setDietaryConstraints] = useState<string[]>([]);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisResults, setAnalysisResults] = useState<any[]>([]);

    useEffect(() => {
        if (!isDarkMode) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }, [isDarkMode]);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(Array.from(e.target.files));
            nextStep();
        }
    };

    const toggleConstraint = (tag: string) => {
        setDietaryConstraints(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const runAnalysis = async () => {
        setIsAnalyzing(true);
        const formData = new FormData();
        files.forEach(file => formData.append("images", file));
        formData.append("cuisine", cuisine);
        formData.append("spice_level", spiceLevel);
        formData.append("dietary_constraints", JSON.stringify(dietaryConstraints));

        try {
            const response = await fetch("http://localhost:8000/analyze-menu", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();

            if (data && Array.isArray(data.dishes)) {
                setAnalysisResults(data.dishes);
                nextStep();
            } else {
                console.error("Invalid response format:", data);
                setAnalysisResults([]);
                nextStep();
            }
        } catch (error) {
            console.error("Analysis failed:", error);
            setAnalysisResults([]);
            nextStep();
        } finally {
            setIsAnalyzing(false);
        }
    };

    const downloadJSON = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(analysisResults, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "menu_analysis.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    return (
        <main style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
            <Navbar
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                setStep={setStep}
            />

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <div key="landing">
                        <Hero setStep={setStep} />
                        <Capabilities />
                        <Mission />
                        <Founder setStep={setStep} />
                        <Contact />
                        <Footer />
                    </div>
                )}

                {step === 1 && (
                    <UploadStep
                        files={files}
                        handleFileChange={handleFileChange}
                        setStep={setStep}
                    />
                )}

                {step === 2 && (
                    <PreferencesStep
                        cuisine={cuisine}
                        setCuisine={setCuisine}
                        spiceLevel={spiceLevel}
                        setSpiceLevel={setSpiceLevel}
                        dietaryConstraints={dietaryConstraints}
                        toggleConstraint={toggleConstraint}
                        runAnalysis={runAnalysis}
                        isAnalyzing={isAnalyzing}
                        prevStep={prevStep}
                    />
                )}

                {step === 3 && (
                    <ResultsStep
                        analysisResults={analysisResults}
                        isAnalyzing={isAnalyzing}
                        downloadJSON={downloadJSON}
                    />
                )}
            </AnimatePresence>
        </main >
    );
}
