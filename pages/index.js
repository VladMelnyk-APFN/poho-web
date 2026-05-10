import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="landing-page-wrapper">
      <Head>
        <title>PoHo — Go Together</title>
        <meta name="description" content="PoHo is the social discovery app that bridges the gap between wanting to go out and actually going — by connecting you with someone to go with." />
      </Head>

      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="nav-brand">Po<span>Ho</span></div>
          <ul className="nav-links hide-mobile">
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#safety">Safety</a></li>
          </ul>
          <div className="nav-actions">
            <a href="#download" className="btn-app primary" style={{ padding: '10px 24px', fontSize: '14px' }}>Get App</a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero container">
          <div className="hero-content">
            <div className="hero-tag">Now available on iOS & Android</div>
            <h1 className="hero-title">
              The world is<br />better with<br /><em>someone<br />to share it.</em>
            </h1>
            <p className="hero-subtitle">
              PoHo is the social discovery app that bridges the gap between wanting to go out and actually going — by connecting you with someone to go with.
            </p>
            <div className="app-buttons" style={{ display: 'flex', gap: '16px' }}>
              <a href="#download" className="btn-app primary">Get Started Free</a>
              <a href="#how-it-works" className="btn-app secondary">See How It Works</a>
            </div>
            
            <div className="hero-stat-row">
              <div className="hero-stat">
                <strong>54%</strong>
                <span>skipped plans — no one to go with</span>
              </div>
              <div className="hero-stat">
                <strong>3</strong>
                <span>ways to connect: events, dating, travel</span>
              </div>
              <div className="hero-stat">
                <strong>Free</strong>
                <span>core features, always</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="mockup-frame">
              <div className="mockup-inner">
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '32px' }}>
                  <span className="nav-brand" style={{ fontSize: '1.2rem' }}>Po<span>Ho</span></span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>Reading, UK</span>
                </div>
                <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.1)', borderRadius: '20px', padding: '16px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>🎨 Paint & Sip</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Sat · 7pm · 3 spots</div>
                  <div style={{ display: 'inline-block', background: 'var(--poho-accent)', color: '#fff', fontSize: '0.65rem', fontWeight: '700', padding: '4px 10px', borderRadius: '100px', marginTop: '12px' }}>Companion Wanted</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: '16px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>🏃 Morning Run</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Sun · 8am · Forbury</div>
                  <div style={{ display: 'inline-block', border: '1px solid var(--poho-accent)', color: 'var(--poho-accent)', fontSize: '0.65rem', fontWeight: '700', padding: '4px 10px', borderRadius: '100px', marginTop: '12px' }}>Join Group</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM STRIP */}
        <section className="problem-strip">
          <div className="container">
            <div className="problem-inner">
              <div>
                <p className="problem-label">The research</p>
                <h2 className="problem-headline">
                  Finding things<br />to do is easy.<br /><em>Going is<br />the hard part.</em>
                </h2>
                <p className="problem-body">
                  We interviewed 39 people in Reading, UK about their social lives. Every single one said the same thing: The real barrier isn't information — it's participation.
                </p>
                <blockquote className="problem-quote" style={{ marginTop: '40px' }}>
                  "If I want to go to a concert and no one else likes the artist and no one is free, usually I don't go."
                  <cite style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', fontStyle: 'normal' }}>— Interview participant, age 16–29</cite>
                </blockquote>
              </div>
              <div className="problem-stats">
                <div className="pstat">
                  <div className="pstat-num">54%</div>
                  <div className="pstat-label">of people have skipped an activity because they had no one to go with</div>
                </div>
                <div className="pstat">
                  <div className="pstat-num">67%</div>
                  <div className="pstat-label">are uncomfortable or only conditionally comfortable at events with strangers</div>
                </div>
                <div className="pstat" style={{ gridColumn: '1 / -1' }}>
                  <div className="pstat-num" style={{ fontSize: '40px' }}>No platform</div>
                  <div className="pstat-label">currently solves the companion problem. That's why we built PoHo.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how container" id="how-it-works">
          <p className="problem-label">How it works</p>
          <h2 className="section-title">Three ways to connect</h2>
          
          <div className="verticals">
            <div className="vertical">
              <div className="v-num">01 — Events</div>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Activities & Events</h3>
              <p style={{ color: 'var(--poho-text-muted)', lineHeight: '1.6', marginBottom: '32px' }}>Discover group dinners, sports sessions, and casual meetups in your city.</p>
              <ul className="v-list">
                <li>Browse events near you</li>
                <li>Create your own activity</li>
                <li>Find a companion to join you</li>
              </ul>
            </div>
            <div className="vertical">
              <div className="v-num">02 — Social</div>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Social & Dating</h3>
              <p style={{ color: 'var(--poho-text-muted)', lineHeight: '1.6', marginBottom: '32px' }}>PoHo puts the activity first and the chat second — no more chat-to-nowhere.</p>
              <ul className="v-list">
                <li>Match through interests</li>
                <li>Activity is the first meeting</li>
                <li>Built for real connection</li>
              </ul>
            </div>
            <div className="vertical">
              <div className="v-num">03 — Travel</div>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Travel & Explore</h3>
              <p style={{ color: 'var(--poho-text-muted)', lineHeight: '1.6', marginBottom: '32px' }}>New city. Don't know anyone. PoHo connects you with locals and visitors.</p>
              <ul className="v-list">
                <li>Connect with locals instantly</li>
                <li>Find fellow visitors nearby</li>
                <li>Solo travel, shared experience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RESEARCH VOICES */}
        <section className="research">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <p className="problem-label">Real voices. Real research.</p>
                <h2 className="section-title" style={{ marginBottom: '0', color: '#fff' }}>What people told us</h2>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)' }}>39 discovery interviews<br />Reading, UK · 2024</p>
            </div>
            <div className="findings">
              <div className="finding">
                <p className="finding-q">On making friends</p>
                <blockquote className="finding-quote">
                  "Events are easy to find because of social media, but making friends is the hard part."
                  <cite style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginTop: '20px', fontStyle: 'normal' }}>Participant III, age 16–29</cite>
                </blockquote>
              </div>
              <div className="finding">
                <p className="finding-q">On social media</p>
                <blockquote className="finding-quote">
                  "You feel like you are connected, but you are just sitting in your room."
                  <cite style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginTop: '20px', fontStyle: 'normal' }}>Participant V, age 16–29</cite>
                </blockquote>
              </div>
              <div className="finding">
                <p className="finding-q">On showing up alone</p>
                <blockquote className="finding-quote">
                  "There is a strong social stigma against going out by yourself… and not having friends."
                  <cite style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginTop: '20px', fontStyle: 'normal' }}>Participant XXI, age 16–29</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="features container" id="features">
          <p className="problem-label">Built for real life</p>
          <h2 className="section-title">Everything you need</h2>
          <div className="features-grid">
            <div className="feature-card" style={{ background: 'var(--poho-surface)' }}>
              <div style={{ fontSize: '32px', marginBottom: '24px' }}>📍</div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Location Discovery</h3>
              <p style={{ fontSize: '14px', color: 'var(--poho-text-muted)', lineHeight: '1.6' }}>See what's happening near you right now. Filtered by distance and interest.</p>
            </div>
            <div className="feature-card" style={{ background: 'var(--poho-surface)' }}>
              <div style={{ fontSize: '32px', marginBottom: '24px' }}>💬</div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Real-Time Chat</h3>
              <p style={{ fontSize: '14px', color: 'var(--poho-text-muted)', lineHeight: '1.6' }}>Chat instantly with hosts and companions via fast, reliable in-app messaging.</p>
            </div>
            <div className="feature-card" style={{ background: 'var(--poho-surface)' }}>
              <div style={{ fontSize: '32px', marginBottom: '24px' }}>📞</div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Video Calling</h3>
              <p style={{ fontSize: '14px', color: 'var(--poho-text-muted)', lineHeight: '1.6' }}>Integrated natives calls powered by Agora RTC. Just like a real phone call.</p>
            </div>
            <div className="feature-card" style={{ background: 'var(--poho-surface)' }}>
              <div style={{ fontSize: '32px', marginBottom: '24px' }}>🛡️</div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Identity Verification</h3>
              <p style={{ fontSize: '14px', color: 'var(--poho-text-muted)', lineHeight: '1.6' }}>Profile verification tools so you can meet with confidence every time.</p>
            </div>
          </div>
        </section>

        {/* SAFETY SECTION */}
        <section className="research" id="safety">
          <div className="container">
            <div className="safety-inner">
              <div>
                <p className="problem-label">Safety</p>
                <div className="safety-big">Because<br />real life<br />matters<br /><em>most.</em></div>
                <p className="problem-body" style={{ marginTop: '32px', maxWidth: '420px' }}>PoHo is built around real-world meetings. Safety isn't an afterthought — it's a design principle.</p>
              </div>
              <ul className="safety-commitments">
                <li>
                  <div className="sc-icon">🛡️</div>
                  <span><strong>Identity verification</strong> — Know who you're meeting before you meet them.</span>
                </li>
                <li>
                  <div className="sc-icon">🚩</div>
                  <span><strong>Report & block tools</strong> — Available on every profile. Instant review by our team.</span>
                </li>
                <li>
                  <div className="sc-icon">⏱️</div>
                  <span><strong>24-hour response</strong> — All reports reviewed and actioned within 24 hours.</span>
                </li>
                <li>
                  <div className="sc-icon">🔐</div>
                  <span><strong>Encrypted & secure</strong> — Argon2 hashing, TLS 1.2+ in transit, JWT authentication.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta-section container" id="download" style={{ padding: '160px 24px', textAlign: 'center' }}>
          <p className="problem-label">Download PoHo</p>
          <h2 className="safety-big">Stop missing out.<br /><em>Go together.</em></h2>
          <p className="hero-subtitle" style={{ margin: '32px auto', color: 'rgba(255,255,255,0.5)' }}>Free to download. Free to use. One tap away from something worth going to.</p>
          <div className="app-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="#" className="btn-app primary">App Store</a>
            <a href="#" className="btn-app secondary">Google Play</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="nav-brand">Po<span>Ho</span></div>
            <div className="footer-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/data-deletion">Data Deletion</Link>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} PoHo Mobile. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
