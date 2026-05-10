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

      <nav className="navbar container">
        <div className="nav-brand">Po<span>Ho</span></div>
        <ul className="nav-links hide-mobile">
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#safety">Safety</a></li>
        </ul>
        <a href="#download" className="btn btn-primary">Download App</a>
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
            <div className="app-buttons">
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
                <div className="app-header" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
                  <span className="nav-brand" style={{ fontSize: '1.2rem' }}>Po<span>Ho</span></span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>Reading, UK</span>
                </div>
                <div className="app-card" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '14px', marginBottom: '10px', textAlign: 'left', width: '100%' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>🎨 Paint & Sip Evening</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Saturday · 7pm · 3 spots left</div>
                  <div style={{ display: 'inline-block', background: 'rgba(239, 68, 68, 0.25)', color: '#EF4444', fontSize: '0.65rem', fontWeight: '600', padding: '2px 8px', borderRadius: '999px', marginTop: '8px' }}>2 want a companion</div>
                </div>
                <div className="app-card" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '14px', marginBottom: '10px', textAlign: 'left', width: '100%' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>🏃 Sunday Morning Run</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Sunday · 8am · Forbury Gardens</div>
                  <div style={{ display: 'inline-block', background: 'rgba(239, 68, 68, 0.25)', color: '#EF4444', fontSize: '0.65rem', fontWeight: '600', padding: '2px 8px', borderRadius: '999px', marginTop: '8px' }}>Join group</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM STRIP */}
        <section className="problem-strip" id="problem">
          <div className="container">
            <div className="problem-inner">
              <div>
                <p className="problem-label">The research</p>
                <h2 className="problem-headline">
                  Finding things<br />to do is easy.<br /><em>Going is<br />the hard part.</em>
                </h2>
                <p className="problem-body">
                  We interviewed 39 people in Reading, UK about their social lives. Every single one said the same thing: TikTok, Instagram, and Google make it effortless to discover events and activities. The real barrier isn't information — it's participation.
                </p>
                <blockquote className="problem-quote">
                  "If I want to go to a concert and no one else likes the artist and no one is free, usually I don't go."
                  <cite style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: '8px', fontStyle: 'normal' }}>— Interview participant, age 16–29</cite>
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
                  <div className="pstat-num" style={{ fontSize: '32px' }}>No platform</div>
                  <div className="pstat-label">currently solves the companion problem. That's why we built PoHo.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how container" id="how-it-works">
          <p className="problem-label">How it works</p>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Three ways to connect with the world around you</h2>
          <p className="problem-body" style={{ maxWidth: '500px' }}>PoHo is built around action, not scrolling. Pick your entry point and find someone to share it with.</p>

          <div className="verticals">
            <div className="vertical">
              <div className="feature-icon">🎉</div>
              <div className="v-num">01 — Events</div>
              <h3 className="feature-title">Activities & Events</h3>
              <p className="feature-desc">Discover group dinners, sports sessions, cultural outings, and casual meetups in your city — then find the right person to attend with.</p>
              <ul className="v-list">
                <li>Browse events near you</li>
                <li>Create your own activity</li>
                <li>Find a companion to join you</li>
                <li>Host approval keeps groups curated</li>
              </ul>
            </div>
            <div className="vertical">
              <div className="feature-icon">💬</div>
              <div className="v-num">02 — Social</div>
              <h3 className="feature-title">Social & Dating</h3>
              <p className="feature-desc">Forget swiping. PoHo puts the activity first and the chat second — so your first interaction is something you actually do together.</p>
              <ul className="v-list">
                <li>Match through shared interests</li>
                <li>Activity is the first meeting</li>
                <li>No more chat-to-nowhere</li>
                <li>Built for real connection</li>
              </ul>
            </div>
            <div className="vertical">
              <div className="feature-icon">✈️</div>
              <div className="v-num">03 — Travel</div>
              <h3 className="feature-title">Travel & Exploration</h3>
              <p className="feature-desc">New city. Don't know anyone. PoHo connects you with locals and other visitors so you can explore together.</p>
              <ul className="v-list">
                <li>Connect with locals instantly</li>
                <li>Find fellow visitors nearby</li>
                <li>Discover activities en route</li>
                <li>Solo travel, shared experience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RESEARCH VOICES */}
        <section className="research">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
              <div>
                <p className="problem-label">Real voices. Real research.</p>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0', color: '#fff' }}>What people told us</h2>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)', textAlign: 'right' }}>39 discovery interviews<br />Reading, UK · 2024</p>
            </div>
            <div className="findings">
              <div className="finding">
                <p className="finding-q">On making friends</p>
                <blockquote className="finding-quote">
                  "Events are easy to find because of social media, but making friends is the hard part."
                  <cite style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', fontStyle: 'normal' }}>Participant III, age 16–29</cite>
                </blockquote>
              </div>
              <div className="finding">
                <p className="finding-q">On social media</p>
                <blockquote className="finding-quote">
                  "You feel like you are connected, but you are just sitting in your room."
                  <cite style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', fontStyle: 'normal' }}>Participant V, age 16–29</cite>
                </blockquote>
              </div>
              <div className="finding">
                <p className="finding-q">On showing up alone</p>
                <blockquote className="finding-quote">
                  "There is a strong social stigma against going out by yourself… and not having friends who want to do the same thing."
                  <cite style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', fontStyle: 'normal' }}>Participant XXI, age 16–29</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="features container" id="features">
          <p className="problem-label">Built for real life</p>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Everything you need to actually go</h2>
          <div className="features-grid">
            <div className="feat feature-card">
              <div className="feature-icon">📍</div>
              <h3 className="feature-title">Location Discovery</h3>
              <p className="feature-desc">See what's happening near you right now. Events, activities, and people — filtered by distance.</p>
            </div>
            <div className="feat feature-card">
              <div className="feature-icon">💬</div>
              <h3 className="feature-title">Real-Time Messaging</h3>
              <p className="feature-desc">Chat instantly with event hosts and companions via our WebSocket-powered messaging.</p>
            </div>
            <div className="feat feature-card">
              <div className="feature-icon">📞</div>
              <h3 className="feature-title">Audio & Video Calls</h3>
              <p className="feature-desc">Crystal-clear calls powered by Agora RTC, integrated natively with your phone.</p>
            </div>
            <div className="feat feature-card">
              <div className="feature-icon">✅</div>
              <h3 className="feature-title">Identity Verification</h3>
              <p className="feature-desc">Profile verification tools so you can meet with confidence. You know who you're going with.</p>
            </div>
          </div>
        </section>

        {/* SAFETY SECTION */}
        <section className="research" id="safety" style={{ background: '#000' }}>
          <div className="container">
            <div className="safety-inner">
              <div>
                <p className="problem-label">Safety</p>
                <div className="safety-big">Because<br />real life<br />matters<br /><em>most.</em></div>
                <p className="problem-body" style={{ marginTop: '24px' }}>PoHo is built around real-world meetings. Safety isn't an afterthought — it's a design principle.</p>
              </div>
              <ul className="safety-commitments">
                <li>
                  <div className="sc-icon">🛡️</div>
                  <span><strong>Identity verification</strong> — optional but encouraged. Know who you're meeting before you meet them.</span>
                </li>
                <li>
                  <div className="sc-icon">🚩</div>
                  <span><strong>Report & block tools</strong> — available on every profile. One tap to flag, instant review by our team.</span>
                </li>
                <li>
                  <div className="sc-icon">⏱️</div>
                  <span><strong>24-hour response</strong> — all reports of harmful content reviewed and actioned within 24 hours.</span>
                </li>
                <li>
                  <div className="sc-icon">🔐</div>
                  <span><strong>Encrypted & secure</strong> — Argon2 password hashing, TLS 1.2+ in transit, JWT authentication.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta-section" id="download">
          <p className="problem-label">Download PoHo</p>
          <h2 className="cta-headline">Stop missing out.<br /><em>Go together.</em></h2>
          <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.5)' }}>Free to download. Free to use. One tap away from something worth going to.</p>
          <div className="app-buttons" style={{ marginTop: '40px' }}>
            <a href="#" className="btn-app primary">App Store</a>
            <a href="#" className="btn-app secondary">Google Play</a>
          </div>
        </section>
      </main>

      <footer className="footer" style={{ borderTop: '1px solid var(--poho-border)', padding: '60px 0 40px', marginTop: '60px' }}>
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
