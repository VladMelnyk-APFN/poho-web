import { useEffect, useState } from "react";
import Head from "next/head";

export default function RedirectFallback({ deepLinkUrl, entityName, title, description, ogType }) {
  const [os, setOs] = useState("unknown");
  const [showButtons, setShowButtons] = useState(false);

  // App Store Links (Placeholders)
  const IOS_STORE_URL = "https://apps.apple.com/app/id123456789"; 
  const ANDROID_STORE_URL = "https://play.google.com/store/apps/details?id=com.poho.app";

  useEffect(() => {
    if (!deepLinkUrl) return;

    // Detect OS
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let detectedOs = "unknown";

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      detectedOs = "ios";
    } else if (/android/i.test(userAgent)) {
      detectedOs = "android";
    }
    setOs(detectedOs);

    // Try opening app immediately
    window.location.href = deepLinkUrl;

    // Fallback timer
    const timer = setTimeout(() => {
      setShowButtons(true);
      // Auto-redirect if OS is detected
      if (detectedOs === "ios") {
        window.location.href = IOS_STORE_URL;
      } else if (detectedOs === "android") {
        window.location.href = ANDROID_STORE_URL;
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [deepLinkUrl]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType || "website"} />
      </Head>

      <div className="fallback-container">
        <div className="spinner"></div>
        <h1>Opening {entityName}...</h1>
        <p>If you don't have the app, you will be redirected to the store.</p>
        
        {showButtons && (
          <div className="button-container">
            {os === "ios" || os === "unknown" ? (
              <a href={IOS_STORE_URL} className="btn btn-primary">
                Download on App Store
              </a>
            ) : null}
            
            {os === "android" || os === "unknown" ? (
              <a href={ANDROID_STORE_URL} className="btn btn-secondary">
                Get it on Google Play
              </a>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
