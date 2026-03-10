import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --ink: #18150f;
    --gold: #c8a96e;
    --gold-light: #e8d5a8;
    --cream: #f9f6f0;
    --muted: #8a8278;
    --border: #ede9e1;
  }

  @keyframes nf-float {
    0%, 100% { transform: translateY(0px) rotate(-1deg); }
    50%       { transform: translateY(-14px) rotate(1deg); }
  }
  @keyframes nf-fade-up {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes nf-draw {
    from { stroke-dashoffset: 800; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes nf-glow {
    0%, 100% { opacity: .18; transform: scale(1); }
    50%      { opacity: .32; transform: scale(1.06); }
  }
  @keyframes nf-blink {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0; }
  }

  .nf-page {
    min-height: 100vh;
    background: var(--cream);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans', sans-serif;
    padding: 32px 20px;
    position: relative;
    overflow: hidden;
  }

  /* Decorative background circles */
  .nf-bg-circle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    animation: nf-glow 5s ease-in-out infinite;
  }
  .nf-bg-circle-1 {
    width: 520px; height: 520px;
    background: radial-gradient(circle, rgba(200,169,110,.13) 0%, transparent 70%);
    top: -120px; left: -120px;
    animation-delay: 0s;
  }
  .nf-bg-circle-2 {
    width: 380px; height: 380px;
    background: radial-gradient(circle, rgba(200,169,110,.09) 0%, transparent 70%);
    bottom: -80px; right: -60px;
    animation-delay: 2.5s;
  }

  /* Dot grid texture */
  .nf-page::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(24,21,15,.07) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
  }

  .nf-card {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 560px;
    width: 100%;
  }

  /* ── Illustrated 404 ── */
  .nf-illustration {
    position: relative;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nf-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(110px, 22vw, 180px);
    font-weight: 700;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 2px var(--gold);
    letter-spacing: -.02em;
    position: relative;
    animation: nf-fade-up .8s cubic-bezier(.4,0,.2,1) both;
    user-select: none;
  }

  /* Ghost icon floating inside the zero */
  .nf-ghost {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -52%);
    animation: nf-float 4s ease-in-out infinite;
    font-size: clamp(32px, 6vw, 52px);
    filter: drop-shadow(0 4px 12px rgba(200,169,110,.35));
  }

  /* SVG underline */
  .nf-svg-line {
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    height: 12px;
    overflow: visible;
  }
  .nf-svg-line path {
    stroke: var(--gold);
    stroke-width: 2.5;
    fill: none;
    stroke-linecap: round;
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
    animation: nf-draw 1.4s cubic-bezier(.4,0,.2,1) .3s forwards;
  }

  /* ── Text content ── */
  .nf-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 14px;
    animation: nf-fade-up .7s cubic-bezier(.4,0,.2,1) .2s both;
  }

  .nf-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(26px, 5vw, 40px);
    font-weight: 700;
    color: var(--ink);
    line-height: 1.2;
    margin-bottom: 14px;
    animation: nf-fade-up .7s cubic-bezier(.4,0,.2,1) .35s both;
  }

  .nf-desc {
    font-size: 15px;
    color: var(--muted);
    line-height: 1.7;
    max-width: 380px;
    margin: 0 auto 36px;
    animation: nf-fade-up .7s cubic-bezier(.4,0,.2,1) .5s both;
  }

  /* ── Actions ── */
  .nf-actions {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
    animation: nf-fade-up .7s cubic-bezier(.4,0,.2,1) .65s both;
  }

  .nf-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--ink);
    color: white;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: .07em;
    text-transform: uppercase;
    padding: 13px 28px;
    border-radius: 2px;
    transition: background .25s, transform .2s, box-shadow .25s;
  }
  .nf-btn-primary:hover {
    background: var(--gold);
    color: var(--ink);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(200,169,110,.3);
  }

  .nf-btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: var(--ink);
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: .05em;
    padding: 13px 28px;
    border-radius: 2px;
    border: 1.5px solid var(--border);
    transition: border-color .25s, background .25s, transform .2s;
  }
  .nf-btn-secondary:hover {
    border-color: var(--ink);
    background: rgba(24,21,15,.04);
    transform: translateY(-2px);
  }

  /* ── URL display ── */
  .nf-url-bar {
    margin-top: 40px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 50px;
    padding: 8px 18px;
    font-size: 12px;
    color: var(--muted);
    font-family: 'DM Sans', sans-serif;
    animation: nf-fade-up .7s cubic-bezier(.4,0,.2,1) .8s both;
  }
  .nf-url-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #e53935;
    flex-shrink: 0;
    animation: nf-blink 1.4s ease-in-out infinite;
  }
  .nf-url-text {
    font-family: monospace;
    font-size: 12px;
    color: var(--ink);
    opacity: .6;
    max-width: 260px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    .nf-actions { flex-direction: column; align-items: center; }
    .nf-btn-primary, .nf-btn-secondary { width: 100%; justify-content: center; }
  }
`;

const NotFoundPage = () => {
  const pathRef = useRef(null);

  // Show current URL in the error bar
  const currentUrl = typeof window !== 'undefined' ? window.location.pathname : '/unknown';

  return (
    <>
      <style>{css}</style>
      <div className="nf-page">

        {/* Background decoration */}
        <div className="nf-bg-circle nf-bg-circle-1" />
        <div className="nf-bg-circle nf-bg-circle-2" />

        <div className="nf-card">

          {/* Illustrated 404 */}
          <div className="nf-illustration">
            <div className="nf-num" aria-label="404">
              404
              {/* Ghost floating in the "0" */}
              <span className="nf-ghost" role="img" aria-label="lost">🛍️</span>
            </div>
            {/* Animated underline */}
            <svg className="nf-svg-line" viewBox="0 0 220 12" preserveAspectRatio="none">
              <path d="M4,8 Q55,2 110,8 Q165,14 216,8" />
            </svg>
          </div>

          {/* Text */}
          <p className="nf-eyebrow">Page Not Found</p>
          <h1 className="nf-heading">
            Looks like this page<br />
            went out of stock.
          </h1>
          <p className="nf-desc">
            The page you're looking for may have been moved, renamed, or doesn't exist.
            Let's get you back to something great.
          </p>

          {/* Actions */}
          <div className="nf-actions">
            <Link to="/" className="nf-btn-primary">
              ← Back to Homepage
            </Link>
            <Link to="/products" className="nf-btn-secondary">
              Browse Products
            </Link>
          </div>

          {/* URL bar showing the broken path */}
          <div className="nf-url-bar">
            <span className="nf-url-dot" />
            <span className="nf-url-text">
              shopzone.com{currentUrl}
            </span>
          </div>

        </div>
      </div>
    </>
  );
};

export default NotFoundPage;