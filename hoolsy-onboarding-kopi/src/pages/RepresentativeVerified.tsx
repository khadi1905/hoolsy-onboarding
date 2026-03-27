import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import StepIndicator from '../components/StepIndicator';
import FooterActions from '../components/FooterActions';

const HOOLSY_TURQUOISE = '#1c9ebd';
const VERIFIED_PREVIEW = {
  name: 'Verified representative',
  email: 'verified@company.com',
  position: 'Authorized signatory',
  phone: '+47 000 00 000',
  method: 'eID verification',
};

export default function RepresentativeVerified() {
  const navigate = useNavigate();

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
      <Logo />

      <main
        style={{
          flex: 1,
          width: '100%',
          maxWidth: 1120,
          margin: '0 auto',
          padding: '64px 32px 96px',
          boxSizing: 'border-box',
        }}
      >
        <StepIndicator
          items={[
            { step: 1, label: 'Company & Contact', active: false, completed: true },
            { step: 2, label: 'Representative', active: true, completed: true },
            { step: 3, label: 'Products', active: false, completed: false },
            { step: 4, label: 'Terms', active: false, completed: false },
          ]}
        />

        <section style={{ marginBottom: 24 }}>
          <h1
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 28,
              lineHeight: '36px',
              color: '#111827',
              margin: 0,
              marginBottom: 8,
            }}
          >
            Verify legal representative
          </h1>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '24px',
              color: '#6b7280',
              margin: 0,
            }}
          >
            To ensure you have the right to represent the company, we need to confirm your identity.
          </p>
        </section>

        <section
          style={{
            maxWidth: 920,
            marginBottom: 40,
            marginLeft: 40,
          }}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: 24,
              padding: 28,
              border: '1px solid #CFE7EE',
              boxShadow: '0 10px 26px rgba(15, 23, 42, 0.06)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 22,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#D7F0FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    border: '2px solid #0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                    color: '#16A34A',
                  }}
                >
                  ✓
                </div>
              </div>
              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#111827',
                  }}
                >
                  Identity verified
                </h2>
                <p
                  style={{
                    margin: 0,
                    marginTop: 4,
                    fontSize: 14,
                    color: '#111827',
                  }}
                >
                  Your identity is confirmed. You can now proceed to the next step in the onboarding process.
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: 18,
                background: '#F9FAFB',
                borderRadius: 18,
                padding: 22,
                fontSize: 14,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                rowGap: 10,
                columnGap: 32,
                border: '1px solid #E5E7EB',
              }}
            >
              <Detail label="NAME" value={VERIFIED_PREVIEW.name} />
              <Detail label="EMAIL" value={VERIFIED_PREVIEW.email} />
              <Detail label="POSITION" value={VERIFIED_PREVIEW.position} />
              <Detail label="PHONE" value={VERIFIED_PREVIEW.phone} />
              <Detail label="VERIFICATION METHOD" value={VERIFIED_PREVIEW.method} fullWidth />
            </div>
          </div>
        </section>
        <section
          style={{
            marginBottom: 32,
            background: '#F4FBFC',
            borderRadius: 20,
            padding: 20,
            fontFamily: 'Inter, sans-serif',
            border: '1px solid #E0F2FE',
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: 6,
              fontSize: 14,
              fontWeight: 600,
              color: '#111827',
            }}
          >
            Why do we need this?
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              color: '#4b5563',
            }}
          >
            Verification of the legal representative is a requirement to ensure that only authorized persons can create
            vendor accounts on behalf of companies. This protects both your company and our customers from fraud and
            unauthorized use.
          </p>
        </section>
      </main>

      <FooterActions onBack={() => navigate('/registrer-steg/representative')} onContinue={() => navigate('/registrer-steg/products')} />
    </div>
  );
}

function Detail({ label, value, fullWidth = false }: { label: string; value: string; fullWidth?: boolean }) {
  return (
    <div style={fullWidth ? { gridColumn: '1 / -1' } : undefined}>
      <div
        style={{
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: 0.08,
          color: '#6b7280',
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      <div style={{ fontWeight: 600, color: '#111827' }}>{value}</div>
    </div>
  );
}


