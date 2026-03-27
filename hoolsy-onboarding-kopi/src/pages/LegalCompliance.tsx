import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import StepIndicator from '../components/StepIndicator';
import FooterActions from '../components/FooterActions';

const HOOLSY_TURQUOISE = '#1c9ebd';

export default function LegalCompliance() {
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
            { step: 2, label: 'Representative', active: false, completed: true },
            { step: 3, label: 'Products', active: false, completed: true },
            { step: 4, label: 'Terms', active: true, completed: false },
          ]}
        />

        {/* Tittel */}
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
            Legal & Compliance
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
            Final step before submission.
          </p>
        </section>

        {/* Kort med vilkår */}
        <section
          style={{
            background: '#ffffff',
            borderRadius: 24,
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            padding: 32,
            border: '1px solid #e5e7eb',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {[
            'I accept the terms of service and vendor agreement',
            'I accept the data processing agreement and privacy policy',
          ].map((text) => (
            <div
              key={text}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '16px 0',
                borderBottom: text.includes('vendor') ? '1px solid #e5e7eb' : 'none',
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 6,
                  border: '2px solid #d1d5db',
                }}
              />
              <span
                style={{
                  fontSize: 14,
                  color: '#111827',
                }}
              >
                {text} <span style={{ color: '#DC2626' }}>*</span>
              </span>
            </div>
          ))}
        </section>
      </main>

      <FooterActions
        onBack={() => navigate('/registrer-steg/products')}
        onContinue={() => navigate('/registrer-steg/submitted')}
        continueLabel="Submit application"
      />
    </div>
  );
}


