import { Link } from 'react-router-dom';

const HOOLSY_TURQUOISE = '#1c9ebd';
const LOGO_TEAL = '#298FA4';
const ACCENT_TEAL = '#B2EBF2';

const requirements = [
  {
    number: 1,
    title: 'Business Verification',
    description:
      'Provide organization number or VAT number. We verify the company automatically via secure registries.',
  },
  {
    number: 2,
    title: 'Representative Verification',
    description: 'The legal representative is identified via eID or document upload.',
  },
  {
    number: 3,
    title: 'Product Information',
    description: 'Select product categories and register your products.',
  },
  {
    number: 4,
    title: 'Accept Terms',
    description: 'Read and accept the vendor agreement before submission.',
  },
];

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

export default function HvaViTrenger() {
  return (
    <div
      style={{
        background: '#ffffff',
        minHeight: '100vh',
        padding: '64px 32px 80px',
        position: 'relative',
      }}
    >
      {/* Logo: sirkel med tre staver over HOOLSY, samme teal som bildet */}
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

      {/* Sentrert innholdsblokk */}
      <div
        style={{
          width: '100%',
          maxWidth: 560,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Tittel og undertekst */}
        <header
          style={{
            textAlign: 'center',
            marginBottom: 64,
          }}
        >
          <h1
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 38,
              lineHeight: '46px',
              color: '#0a0a0a',
              marginBottom: 20,
              marginTop: 0,
            }}
          >
            What we need
          </h1>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 18,
              lineHeight: '28px',
              color: '#6a7282',
              margin: 0,
            }}
          >
            Four easy steps to get started
          </p>
        </header>

        {/* Vertikal stegliste: lys teal-sirkel med tynn kant + tittel og beskrivelse */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 48,
            marginBottom: 64,
          }}
        >
          {requirements.map((req) => (
            <div
              key={req.number}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 28,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'rgba(28, 158, 189, 0.4)',
                  border: 'none',
                  color: '#0A0A0A',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {req.number}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: 20,
                    lineHeight: '28px',
                    color: '#0a0a0a',
                    marginBottom: 10,
                    marginTop: 0,
                  }}
                >
                  {req.title}
                </h2>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '24px',
                    color: '#6a7282',
                    margin: 0,
                  }}
                >
                  {req.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Informasjonsboks: teal som stegsirklene, full bredde */}
        <div
          style={{
            width: '100%',
            boxSizing: 'border-box',
            background: ' rgba(28, 158, 189, 0.03)',
            borderRadius: 16,
            padding: '28px 32px',
            marginBottom: 56,
            border: 'none',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '26px',
              color: '#0a0a0a',
              margin: 0,
              textAlign: 'left',
            }}
          >
            Company and identity verification happens automatically where available. If manual documentation is
            required, the application will be reviewed within 24-48 hours.
          </p>
        </div>

        {/* Continue to registration */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/registrer-steg">
            <button
              type="button"
              style={{
                background: 'rgba(28, 158, 189, 0.4)',
                borderRadius: 16,
                padding: '0 112px',
                height: 50,
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 17,
                color: '#0a0a0a',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(28, 158, 189, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(28, 158, 189, 0.4)';
              }}
            >
              Continue to registration
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

