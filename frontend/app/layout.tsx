import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Linguine - AI Menu Sense & Recommendation",
    description: "Digitize, understand, and get personalized recommendations from any restaurant menu.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div className="grid-bg" />
                <div className="glow-orb" style={{ top: '-100px', right: '-100px' }} />
                <div className="glow-orb" style={{ bottom: '-100px', left: '-100px', background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)' }} />
                {children}
            </body>
        </html>
    );
}
