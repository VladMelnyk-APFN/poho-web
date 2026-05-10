import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="landing-page-wrapper">
      <Head>
        <title>PoHo | Real-world connection starts here.</title>
        <meta name="description" content="PoHo is a social discovery platform that helps people find events, activities, and companions for real-world experiences." />
      </Head>

      <nav className="navbar container">
        <div className="nav-brand">PoHo</div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero container">
          <div className="hero-tag">Welcome to PoHo World</div>
          <h1 className="hero-title">Real-world connection<br />starts here.</h1>
          <p className="hero-subtitle">
            Turn online interactions into real-life experiences. Discover local events, find travel companions, and meet people who share your passions.
          </p>
          
          <div className="app-buttons">
            <a href="#" className="btn-app primary" onClick={(e) => e.preventDefault()}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91 1.63.16 3.1 1.48 4.24 3.13-3.66 2.1-3.13 7.33.67 8.87-.56 1.46-1.28 2.87-2.12 3.66zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </a>
            <a href="#" className="btn-app secondary" onClick={(e) => e.preventDefault()}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.165-.154-.276-.388-.276-.662V2.476c0-.274.111-.508.275-.662zM14.618 12.827L18.423 16.632 4.417 23.491c.07.038.147.06.229.06.19 0 .373-.064.516-.179l15.174-8.629c.307-.174.526-.499.526-.88 0-.38-.219-.705-.526-.88L5.162.353c-.143-.115-.326-.179-.516-.179-.082 0-.159.022-.229.06L14.618 11.173zM14.204 12.413L13.377 11.586 4.35 2.559l9.854 9.854z"/>
              </svg>
              Google Play
            </a>
          </div>

          <div className="hero-mockup">
            <div className="mockup-frame">
              <div className="mockup-inner">
                <div className="mockup-logo">PoHo</div>
                <div className="mockup-ui-circle"></div>
                <div className="mockup-ui-line"></div>
                <div className="mockup-ui-line" style={{ width: '80%' }}></div>
                <div className="mockup-ui-line" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features container">
          <h2 className="section-title">Why choose PoHo?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Events & Activities</h3>
              <p className="feature-desc">Discover and join local gatherings. From group dinners to sports sessions, find activities that match your vibe.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="feature-title">Real-time Connection</h3>
              <p className="feature-desc">Connect instantly with high-quality audio and video calling built right into the app. No phone numbers needed.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Travel & Explore</h3>
              <p className="feature-desc">Find travel companions and explore new cities with locals. See who's around you wherever you go.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div className="footer-content">
          <div className="footer-brand">PoHo Mobile</div>
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/data-deletion">Data Deletion</Link>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} PoHo Mobile. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
