import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../components/Logo';
import StepIndicator from '../components/StepIndicator';
import FooterActions from '../components/FooterActions';

const HOOLSY_TURQUOISE = '#1c9ebd';

export default function Representative() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<'eid' | 'manual' | ''>('');

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
            { step: 2, label: 'Representative', active: true, completed: false },
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
            background: '#ffffff',
            borderRadius: 24,
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            padding: 32,
            border: '1px solid #e5e7eb',
            marginBottom: 24,
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedMethod('eid')}
            style={{
              width: '100%',
              textAlign: 'left',
              borderRadius: 20,
              border: selectedMethod === 'eid' ? '1px solid #7CC0D2' : '1px solid #e5e7eb',
              padding: 20,
              marginBottom: 16,
              background: selectedMethod === 'eid' ? '#F3FAFD' : '#F9FAFB',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: '999px',
                border: selectedMethod === 'eid' ? `2px solid ${HOOLSY_TURQUOISE}` : '2px solid #d1d5db',
                marginTop: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {selectedMethod === 'eid' && (
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: '999px',
                    background: HOOLSY_TURQUOISE,
                  }}
                />
              )}
            </div>
            <div style={{ flex: 1, fontFamily: 'Inter, sans-serif' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontWeight: 600, fontSize: 16, color: '#111827' }}>Verify with eID</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: 999,
                    background: '#E0F2FE',
                    color: '#0369A1',
                  }}
                >
                  Recommended
                </span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: '#6b7280',
                }}
              >
                Fast and secure identification via third-party service.
              </p>

              {selectedMethod === 'eid' && (
                <div
                  style={{
                    marginTop: 16,
                    borderRadius: 16,
                    background: '#ffffff',
                    border: '1px solid #E0F2FE',
                    padding: 16,
                    fontSize: 14,
                    color: '#111827',
                  }}
                >
                  
                  {[
                    'Secure electronic identity (eID) verification',
                    'Instant verification',
                    'Secure encryption',
                  ].map((text) => (
                    <div
                      key={text}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        marginBottom: 6,
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '999px',
                          border: '2px solid #9BD6E5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: HOOLSY_TURQUOISE,
                          fontSize: 11,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </div>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedMethod('manual')}
            style={{
              width: '100%',
              textAlign: 'left',
              borderRadius: 20,
              border: selectedMethod === 'manual' ? '1px solid #7CC0D2' : '1px solid #e5e7eb',
              padding: 20,
              background: selectedMethod === 'manual' ? '#F3FAFD' : '#ffffff',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: '999px',
                border: selectedMethod === 'manual' ? `2px solid ${HOOLSY_TURQUOISE}` : '2px solid #d1d5db',
                marginTop: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {selectedMethod === 'manual' && (
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: '999px',
                    background: HOOLSY_TURQUOISE,
                  }}
                />
              )}
            </div>
            <div style={{ flex: 1, fontFamily: 'Inter, sans-serif' }}>
              <span style={{ display: 'block', fontWeight: 600, fontSize: 16, color: '#111827', marginBottom: 4 }}>
                Upload documentation manually
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: '#6b7280',
                }}
              >
                Upload passport, driver&apos;s license, or other valid ID documentation. Processing time: 1–2 business
                days.
              </p>
            </div>
          </button>
        </section>

        <section
          style={{
            marginBottom: 32,
            background: '#E0F2FE',
            borderRadius: 20,
            padding: 20,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: 6,
              fontSize: 14,
              fontWeight: 600,
              color: '#0f172a',
            }}
          >
            Why do we need this?
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              color: '#0f172a',
            }}
          >
            Verification of the legal representative is a requirement to ensure that only authorized persons can create
            vendor accounts on behalf of companies. This protects both your company and our customers from fraud and
            unauthorized use.
          </p>
        </section>

        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {selectedMethod === 'manual' && (
            <button
              type="button"
              style={{
                width: '100%',
                borderRadius: 12,
                border: 'none',
                height: 48,
                background: '#E5E7EB',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: 16,
                color: '#9CA3AF',
                cursor: 'default',
              }}
            >
              Upload documents (coming soon)
            </button>
          )}
        </div>
      </main>

      <FooterActions
        onBack={() => navigate('/registrer-steg')}
        onContinue={() => navigate('/registrer-steg/representative-verified')}
      />
    </div>
  );
}


