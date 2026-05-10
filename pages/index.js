import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export default function Home() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'var(--poho-accent)';
      ring.style.background = 'rgba(239, 68, 68, 0.08)';
    };

    const onMouseLeaveLink = () => {
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      ring.style.background = 'transparent';
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();

    const links = document.querySelectorAll('a, button, .btn-app, .feature-card, .vertical, .finding');
    links.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorRingRef} className="cursor-ring" />

      <Head>
        <title>PoHo — Go Together</title>
        <meta name="description" content="PoHo is the social discovery app that bridges the gap between wanting to go out and actually going — by connecting you with someone to go with." />
      </Head>

      {/* NAV */}
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '1.25rem 0' }}>
          <a href="#" className="nav-brand">Po<span>Ho</span></a>
          <ul className="nav-links hide-mobile">
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#safety">Safety</a></li>
          </ul>
          <a href="#download" className="btn-app primary">Download App</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero container">
        <div className="hero-content">
          <div className="hero-tag">Now available on iOS &amp; Android</div>
          <h1 className="hero-title">
            The world is<br />better with<br /><em>someone<br />to share it.</em>
          </h1>
          <p className="hero-subtitle">
            PoHo is the social discovery app that bridges the gap between wanting to go out and actually going — by connecting you with someone to go with.
          </p>
          <div className="app-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span className="nav-brand" style={{ fontSize: '1.2rem' }}>Po<span>Ho</span></span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>Reading, UK</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '14px', marginBottom: '10px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>🎨 Paint &amp; Sip Evening</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Saturday · 7pm · 3 spots left</div>
                <div style={{ display: 'inline-block', background: 'rgba(239,68,68,0.25)', color: '#EF4444', fontSize: '0.65rem', fontWeight: '600', padding: '2px 8px', borderRadius: '999px', marginTop: '8px' }}>2 want a companion</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '14px', marginBottom: '10px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>🏃 Sunday Morning Run</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Sunday · 8am · Forbury Gardens</div>
                <div style={{ display: 'inline-block', background: 'rgba(239,68,68,0.25)', color: '#EF4444', fontSize: '0.65rem', fontWeight: '600', padding: '2px 8px', borderRadius: '999px', marginTop: '8px' }}>Join group</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '14px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>🌍 Visitor from Barcelona</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Here 3 days · Looking to explore</div>
                <div style={{ display: 'inline-block', background: 'rgba(239,68,68,0.25)', color: '#EF4444', fontSize: '0.65rem', fontWeight: '600', padding: '2px 8px', borderRadius: '999px', marginTop: '8px' }}>Say hello</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM STRIP */}
      <section className="problem-strip reveal" id="problem">
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
                <cite style={{ display: 'block', fontStyle: 'normal', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.5rem' }}>— Interview participant, age 16–29</cite>
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
              <div className="pstat" style={{ gridColumn: '1/-1' }}>
                <div className="pstat-num" style={{ fontSize: '2rem' }}>No platform</div>
                <div className="pstat-label">currently solves the companion problem. That's why we built PoHo.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how container" id="how-it-works">
        <p className="problem-label reveal">How it works</p>
        <h2 className="section-title reveal">Three ways to connect with the world around you</h2>
        <p className="problem-body reveal" style={{ maxWidth: '500px', marginBottom: '0' }}>PoHo is built around action, not scrolling. Pick your entry point and find someone to share it with.</p>

        <div className="verticals reveal">
          <div className="vertical">
            <div className="feat-icon">🎉</div>
            <div className="v-num">01 — Events</div>
            <h3 className="v-title">Activities &amp; Events</h3>
            <p className="v-body">Discover group dinners, sports sessions, cultural outings, and casual meetups in your city — then find the right person to attend with.</p>
            <ul className="v-list">
              <li>Browse events near you</li>
              <li>Create your own activity</li>
              <li>Find a companion to join you</li>
              <li>Host approval keeps groups curated</li>
            </ul>
          </div>
          <div className="vertical">
            <div className="feat-icon">💬</div>
            <div className="v-num">02 — Social</div>
            <h3 className="v-title">Social &amp; Dating</h3>
            <p className="v-body">Forget swiping. PoHo puts the activity first and the chat second — so your first interaction is something you actually do together, not a message that goes nowhere.</p>
            <ul className="v-list">
              <li>Match through shared interests</li>
              <li>Activity is the first meeting</li>
              <li>No more chat-to-nowhere</li>
              <li>Built for real connection</li>
            </ul>
          </div>
          <div className="vertical">
            <div className="feat-icon">✈️</div>
            <div className="v-num">03 — Travel</div>
            <h3 className="v-title">Travel &amp; Exploration</h3>
            <p className="v-body">New city. Don't know anyone. PoHo connects you with locals and other visitors so you can explore together — whether you're here for a weekend or a year.</p>
            <ul className="v-list">
              <li>Connect with locals instantly</li>
              <li>Find fellow visitors nearby</li>
              <li>Discover activities en route</li>
              <li>Solo travel, shared experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RESEARCH FINDINGS */}
      <section className="research">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p className="problem-label">Real voices. Real research.</p>
              <h2 className="section-title reveal" style={{ marginBottom: 0 }}>What people told us</h2>
            </div>
            <p className="reveal" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', textAlign: 'right' }}>39 discovery interviews<br />Reading, UK · 2024</p>
          </div>
          <div className="findings reveal">
            <div className="finding">
              <p className="finding-q">On making friends</p>
              <blockquote className="finding-quote">
                "Events are easy to find because of social media, but making friends is the hard part."
                <cite style={{ display: 'block', fontStyle: 'normal', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '1rem' }}>Participant III, age 16–29</cite>
              </blockquote>
            </div>
            <div className="finding">
              <p className="finding-q">On social media</p>
              <blockquote className="finding-quote">
                "You feel like you are connected, but you are just sitting in your room."
                <cite style={{ display: 'block', fontStyle: 'normal', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '1rem' }}>Participant V, age 16–29</cite>
              </blockquote>
            </div>
            <div className="finding">
              <p className="finding-q">On showing up alone</p>
              <blockquote className="finding-quote">
                "There is a strong social stigma against going out by yourself… and not having friends who want to do the same thing."
                <cite style={{ display: 'block', fontStyle: 'normal', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '1rem' }}>Participant XXI, age 16–29</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features container" id="features">
        <p className="problem-label reveal">Built for real life</p>
        <h2 className="section-title reveal">Everything you need to actually go</h2>
        <p className="problem-body reveal" style={{ maxWidth: '500px', marginBottom: '0' }}>PoHo is a full-featured platform designed around the moment you decide to do something.</p>

        <div className="features-grid reveal">
          <div className="feature-card">
            <div className="feat-icon">📍</div>
            <h3 className="feat-title">Location Discovery</h3>
            <p className="feat-body">See what's happening near you right now. Events, activities, and people — filtered by distance, interest, and availability.</p>
          </div>
          <div className="feature-card">
            <div className="feat-icon">💬</div>
            <h3 className="feat-title">Real-Time Messaging</h3>
            <p className="feat-body">Chat instantly with event hosts and companions via our WebSocket-powered messaging — fast, reliable, and fully in-app.</p>
          </div>
          <div className="feature-card">
            <div className="feat-icon">📞</div>
            <h3 className="feat-title">Audio &amp; Video Calls</h3>
            <p className="feat-body">Crystal-clear calls powered by Agora RTC, integrated natively with your phone's lock screen — just like a real call.</p>
          </div>
          <div className="feature-card">
            <div className="feat-icon">✅</div>
            <h3 className="feat-title">Identity Verification</h3>
            <p className="feat-body">Profile verification tools so you can meet with confidence. You know who you're going with before you agree to go.</p>
          </div>
          <div className="feature-card">
            <div className="feat-icon">🎛️</div>
            <h3 className="feat-title">Host Controls</h3>
            <p className="feat-body">Create events with approval-based joining so you decide who comes. Your plans, your group, your experience.</p>
          </div>
          <div className="feature-card">
            <div className="feat-icon">🔔</div>
            <h3 className="feat-title">Smart Notifications</h3>
            <p className="feat-body">Get alerted before events happen — not after. Know what's on in time to actually go.</p>
          </div>
          <div className="feature-card">
            <div className="feat-icon">🔒</div>
            <h3 className="feat-title">Privacy First</h3>
            <p className="feat-body">UK GDPR compliant. Location data that never persists beyond your session. Your data is yours.</p>
          </div>
          <div className="feature-card">
            <div className="feat-icon">🆓</div>
            <h3 className="feat-title">Free at the Core</h3>
            <p className="feat-body">Browse events, join activities, message companions, and make plans — all free. Premium unlocks extras for organisers.</p>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="research" id="safety">
        <div className="container">
          <div className="safety-inner">
            <div>
              <p className="problem-label reveal">Safety</p>
              <div className="safety-big reveal">Because<br />real life<br />matters<br /><em>most.</em></div>
              <p className="problem-body reveal" style={{ marginTop: '1.25rem', maxWidth: '420px' }}>PoHo is built around real-world meetings. Safety isn't an afterthought — it's a design principle.</p>
            </div>
            <div>
              <ul className="safety-commitments reveal">
                <li>
                  <div className="sc-icon">🛡️</div>
                  <span><strong>Identity verification</strong> — optional but encouraged. Know who you're meeting before you meet them.</span>
                </li>
                <li>
                  <div className="sc-icon">🚩</div>
                  <span><strong>Report &amp; block tools</strong> — available on every profile, message, and event. One tap to flag, instant review by our team.</span>
                </li>
                <li>
                  <div className="sc-icon">⏱️</div>
                  <span><strong>24-hour response commitment</strong> — all reports of harmful content reviewed and actioned within 24 hours.</span>
                </li>
                <li>
                  <div className="sc-icon">🔐</div>
                  <span><strong>Encrypted &amp; secure</strong> — Argon2 password hashing, TLS 1.2+ in transit, JWT authentication with token rotation.</span>
                </li>
                <li>
                  <div className="sc-icon">📋</div>
                  <span><strong>UK GDPR compliant</strong> — your data is handled with transparency and purpose, under the Data Protection Act 2018.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="download" style={{ padding: '8rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <p className="problem-label reveal">Download PoHo</p>
          <h2 className="safety-big reveal" style={{ marginBottom: '1.5rem' }}>Stop missing out.<br /><em>Go together.</em></h2>
          <p className="hero-subtitle reveal" style={{ margin: '0 auto 2.5rem', color: 'rgba(255,255,255,0.5)' }}>Free to download. Free to use. One tap away from something worth going to.</p>
          <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://poho.world" className="btn-app primary">🍎 App Store</a>
            <a href="https://poho.world" className="btn-app primary">▶ Google Play</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <a href="https://poho.world" className="nav-brand">Po<span>Ho</span></a>
            <div className="footer-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/data-deletion">Data Deletion</Link>
              <a href="mailto:contact@poho.world">contact@poho.world</a>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} PoHo Mobile. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
