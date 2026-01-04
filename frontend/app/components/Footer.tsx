"use client";

import { ChefHat, Twitter, Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
    return (
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
    );
}
