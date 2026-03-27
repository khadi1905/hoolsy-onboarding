import { Link } from 'react-router-dom';

const HOOLSY_TURQUOISE = '#1c9ebd';
const LOGO_TEAL = '#298FA4';

export default function Velkomstside() {
  return (
    <div
      style={{
        background: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Logo: sirkel med tre staver over HOOLSY, samme teal */}
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: 48,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <HoolsyLogoIcon color={LOGO_TEAL} size={36} />
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            fontSize: 17,
            color: LOGO_TEAL,
            letterSpacing: '0.18em',
          }}
        >
          HOOLSY
        </span>
      </div>

      {/* Hovedinnhold */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: '64px 32px 80px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 720,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Tittel */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 40,
                lineHeight: '48px',
                color: '#4A5568',
                letterSpacing: 0.5,
                marginBottom: 20,
                marginTop: 0,
              }}
            >
              Welcome to Hoolsy
            </h2>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: 20,
                lineHeight: '28px',
                color: '#8A94A6',
                marginBottom: 24,
              }}
            >
              Let's set up your vendor account
            </p>
            <p style={{ marginBottom: 0, fontSize: 16, color: '#000' }}>
              Already have an active account?{' '}
              <Link to="/login" style={{ color: HOOLSY_TURQUOISE, textDecoration: 'underline' }}>
                Log in
              </Link>
            </p>
          </section>

          {/* To feature-kort*/}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 32,
              width: '100%',
              margin: '0 auto 64px',
              minWidth: 0,
            }}
          >
            <div
              style={{
                background: '#ffffff',
                borderRadius: 24,
                padding: '36px 32px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                textAlign: 'left',
                minHeight: 140,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(95, 168, 164, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <ClockIcon color="#5FA8A4" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, lineHeight: '24px', color: '#0a0a0a', marginBottom: 6 }}>
                  5–10 minutes
                </div>
                <div style={{ fontWeight: 400, fontSize: 15, lineHeight: '22px', color: '#6b7280' }}>
                  Quick registration
                </div>
              </div>
            </div>
            <div
              style={{
                background: '#ffffff',
                borderRadius: 24,
                padding: '36px 32px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                textAlign: 'left',
                minHeight: 140,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(95, 168, 164, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CheckIcon color="#5FA8A4" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, lineHeight: '24px', color: '#0a0a0a', marginBottom: 6 }}>
                  Free registration
                </div>
                <div style={{ fontWeight: 400, fontSize: 15, lineHeight: '22px', color: '#6b7280' }}>
                  No start-up costs
                </div>
              </div>
            </div>
          </div>

          {/* Vilkår */}
          <p
            style={{
              paddingTop: 8,
              marginBottom: 0,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 15,
              lineHeight: '24px',
              color: '#4a5565',
              margin: 0,
            }}
          >
            I accept Hoolsy's{' '}
            <a href="#terms" style={{ color: HOOLSY_TURQUOISE, fontWeight: 500, textDecoration: 'underline solid' }}>
              terms and conditions
            </a>{' '}
            and{' '}
            <a href="#privacy" style={{ color: HOOLSY_TURQUOISE, fontWeight: 500, textDecoration: 'underline solid' }}>
              privacy policy
            </a>
          </p>

          {/* Kom i gang-knapp */}
          <Link to="/hva-vi-trenger">
            <button
              type="button"
              style={{
                background: 'rgba(28, 158, 189, 0.33)',
                borderRadius: 14,
                padding: '0 96px',
                marginTop: 32,
                height: 55,
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 20,
                color: '#0a0a0a',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(28, 158, 189, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(28, 158, 189, 0.33)';
              }}
            >
              Get started
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

function HoolsyLogoIcon({ color, size = 40 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19" fill={color} />
      <rect x="12" y="14" width="3.5" height="14" rx="1.75" fill="#ffffff" />
      <rect x="18.25" y="11" width="3.5" height="20" rx="1.75" fill="#ffffff" />
      <rect x="24.5" y="14" width="3.5" height="14" rx="1.75" fill="#ffffff" />
    </svg>
  );
}

function ClockIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
