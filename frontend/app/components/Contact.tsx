"use client";

export default function Contact() {
    return (
        <section id="contact" style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="glass-card" style={{ padding: '3rem 2rem' }}>
                <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Get in Touch</h2>
                <p style={{ opacity: 0.6, marginBottom: '2rem' }}>Have questions or want to partner with us? We'd love to hear from you.</p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', textAlign: 'left' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', opacity: 0.7 }}>Name</label>
                            <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.8rem', borderRadius: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', opacity: 0.7 }}>Email</label>
                            <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white' }} />
                        </div>
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', opacity: 0.7 }}>Message</label>
                        <textarea rows={3} placeholder="How can we help?" style={{ width: '100%', padding: '0.8rem', borderRadius: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white' }}></textarea>
                    </div>
                    <button className="btn-primary" style={{ alignSelf: 'center', padding: '1rem 3rem' }}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
