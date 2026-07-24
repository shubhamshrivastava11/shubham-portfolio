import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const C = {
  bg:     '#FFFFFF',
  text:   '#14121F',
  muted:  '#45414F',
  purple: '#7C3AED',
};

const GRAD = 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)';
const G = { background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', background: C.bg, padding: '24px', textAlign: 'center' }}>
      <p style={{ fontSize: 'clamp(3rem,10vw,5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, ...G }}>404</p>
      <p style={{ fontSize: '1rem', color: C.text, fontWeight: 600 }}>This page doesn't exist.</p>
      <p style={{ fontSize: '0.9375rem', color: C.muted, maxWidth: '360px' }}>
        The link you followed may be broken, or the page may have moved.
      </p>
      <Link to="/" className="nav-link inline-flex items-center gap-2" style={{ fontSize: '0.9375rem', color: C.purple, marginTop: '8px' }}>
        <ArrowLeft size={15}/> Back to portfolio
      </Link>
    </div>
  );
}
