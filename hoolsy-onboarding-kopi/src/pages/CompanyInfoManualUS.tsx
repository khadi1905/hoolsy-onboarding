import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import StepIndicator from '../components/StepIndicator';
import FooterActions from '../components/FooterActions';

export default function CompanyInfoManualUS() {
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
          maxWidth: 960,
          margin: '0 auto',
          padding: '48px 40px 96px',
          boxSizing: 'border-box',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <StepIndicator
          items={[
            { step: 1, label: 'Company & Contact', active: true },
            { step: 2, label: 'Representative', active: false },
            { step: 3, label: 'Products', active: false },
            { step: 4, label: 'Terms', active: false },
          ]}
        />

        {/* Tittel */}
        <section style={{ marginBottom: 24 }}>
          <h1
            style={{
              fontWeight: 700,
              fontSize: 28,
              lineHeight: '36px',
              color: '#111827',
              margin: 0,
              marginBottom: 8,
            }}
          >
            Company Information
          </h1>
          <p
            style={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '24px',
              color: '#6b7280',
              margin: 0,
            }}
          >
            Tell us about your company. This information will be used for verification.
          </p>
        </section>

        {/* Verifiser bedriften din (statisk USA) */}
        <section
          style={{
            background: '#ffffff',
            borderRadius: 24,
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            padding: 32,
            border: '1px solid #e5e7eb',
            marginBottom: 32,
          }}
        >
          <h2
            style={{
              fontWeight: 600,
              fontSize: 18,
              color: '#111827',
              margin: 0,
              marginBottom: 24,
            }}
          >
            Verify your company
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 24,
              marginBottom: 24,
            }}
          >
            {/* Land (låst til USA) */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#111827',
                  marginBottom: 8,
                }}
              >
                Country where business is registered <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <input
                value="United States"
                readOnly
                style={{
                  width: '100%',
                  borderRadius: 10,
                  border: '1px solid #e5e7eb',
                  padding: '12px 14px',
                  fontSize: 14,
                  backgroundColor: '#f9fafb',
                  color: '#111827',
                }}
              />
            </div>

            {/* Bedriftsidentifikator */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#111827',
                  marginBottom: 8,
                }}
              >
                Company identifier <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="EIN / Federal Tax ID"
                style={{
                  width: '100%',
                  borderRadius: 10,
                  border: '1px solid #d1d5db',
                  padding: '12px 14px',
                  fontSize: 14,
                  color: '#111827',
                }}
              />
            </div>
          </div>

          <p
            style={{
              fontWeight: 400,
              fontSize: 13,
              lineHeight: '20px',
              color: '#6b7280',
              margin: 0,
            }}
          >
            EIN / Federal Tax ID
          </p>
        </section>

        {/* Legg inn bedriftsinformasjon manuelt */}
        <section
          style={{
            marginBottom: 32,
            background: '#F9FAFB',
            borderRadius: 24,
            padding: 24,
            border: '1px solid #e5e7eb',
          }}
        >
          <h2
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#111827',
              marginTop: 0,
              marginBottom: 20,
            }}
          >
            Manually enter company information
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
              marginBottom: 16,
            }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#111827',
                  marginBottom: 6,
                }}
              >
                Company name <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Company name"
                style={{
                  width: '100%',
                  borderRadius: 10,
                  border: '1px solid #d1d5db',
                  padding: '10px 12px',
                  fontSize: 14,
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#111827',
                  marginBottom: 6,
                }}
              >
                Organization number <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="123456789"
                style={{
                  width: '100%',
                  borderRadius: 10,
                  border: '1px solid #d1d5db',
                  padding: '10px 12px',
                  fontSize: 14,
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                display: 'block',
                fontWeight: 500,
                fontSize: 14,
                color: '#111827',
                marginBottom: 6,
              }}
            >
              Business model <span style={{ color: '#DC2626' }}>*</span>
            </label>
            <div style={{ position: 'relative', maxWidth: 480 }}>
              <select
                defaultValue=""
                style={{
                  width: '100%',
                  appearance: 'none',
                  borderRadius: 10,
                  border: '1px solid #d1d5db',
                  padding: '12px 40px 12px 14px',
                  fontSize: 14,
                  backgroundColor: '#ffffff',
                  color: '#111827',
                }}
              >
                <option value="" disabled>
                  Select business model
                </option>
                <option value="manufacturer">Manufacturer</option>
                <option value="distributor">Distributor</option>
                <option value="retailer">Retailer</option>
                <option value="brand-owner">Brand Owner</option>
              </select>
              <span
                style={{
                  position: 'absolute',
                  right: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  fontSize: 16,
                  color: '#9ca3af',
                }}
              >
                ▾
              </span>
            </div>
          </div>

          {/* Last opp dokumentasjon */}
          <div
            style={{
              marginTop: 16,
              marginBottom: 20,
            }}
          >
            <label
              style={{
                display: 'block',
                fontWeight: 500,
                fontSize: 14,
                color: '#111827',
                marginBottom: 8,
              }}
            >
              Upload documentation <span style={{ color: '#DC2626' }}>*</span>
              <span style={{ color: '#6b7280', fontWeight: 400 }}>
                {' '}
                (Registration proof, VAT registration, or other official documentation)
              </span>
            </label>
            <div
              style={{
                borderRadius: 16,
                border: '2px dashed #cbd5f5',
                background: '#F9FAFB',
                padding: 32,
                textAlign: 'center',
                color: '#6b7280',
                fontSize: 14,
              }}
            >
              <div style={{ fontSize: 26, marginBottom: 8 }}>⬆</div>
              <div style={{ marginBottom: 4 }}>Click to upload or drag and drop</div>
              <div style={{ fontSize: 12 }}>PDF, PNG or JPG (max 10MB)</div>
            </div>
          </div>

          {/* Dokumentkrav */}
          <div
            style={{
              marginTop: 12,
              background: 'rgba(28, 158, 189, 0.08)',
              borderRadius: 16,
              padding: 16,
              color: '#111827',
              fontSize: 13,
              lineHeight: '20px',
            }}
          >
            <strong style={{ display: 'block', marginBottom: 6 }}>Document requirements</strong>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>The document must be official from authorities or registration bodies.</li>
              <li>The company name must be clearly visible.</li>
              <li>The organization number must match the one you provided.</li>
              <li>All pages must be readable and not obscured.</li>
            </ul>
          </div>
        </section>

        {/* Kontaktperson */}
        <section
          style={{
            marginBottom: 32,
            background: '#F9FAFB',
            borderRadius: 24,
            padding: 24,
            border: '1px solid #e5e7eb',
          }}
        >
          <h2
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#111827',
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            Contact person
          </h2>

          <div
            style={{
              background: '#ffffff',
              borderRadius: 16,
              padding: 24,
              border: '1px solid #e5e7eb',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
                marginBottom: 16,
              }}
            >
              {/* Fornavn */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontWeight: 500,
                    fontSize: 14,
                    color: '#111827',
                    marginBottom: 6,
                  }}
                >
                  First name <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  style={{
                    width: '100%',
                    borderRadius: 10,
                    border: '1px solid #d1d5db',
                    padding: '10px 12px',
                    fontSize: 14,
                  }}
                />
              </div>

              {/* Etternavn */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontWeight: 500,
                    fontSize: 14,
                    color: '#111827',
                    marginBottom: 6,
                  }}
                >
                  Last name <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  style={{
                    width: '100%',
                    borderRadius: 10,
                    border: '1px solid #d1d5db',
                    padding: '10px 12px',
                    fontSize: 14,
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
                marginBottom: 16,
              }}
            >
              {/* E-post */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontWeight: 500,
                    fontSize: 14,
                    color: '#111827',
                    marginBottom: 6,
                  }}
                >
                  Email address <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    borderRadius: 10,
                    border: '1px solid #d1d5db',
                    padding: '10px 12px',
                    fontSize: 14,
                  }}
                />
              </div>

              {/* Telefon */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontWeight: 500,
                    fontSize: 14,
                    color: '#111827',
                    marginBottom: 6,
                  }}
                >
                  Phone number <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+1 555 123 4567"
                  style={{
                    width: '100%',
                    borderRadius: 10,
                    border: '1px solid #d1d5db',
                    padding: '10px 12px',
                    fontSize: 14,
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#111827',
                  marginBottom: 6,
                }}
              >
                Position in company <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="CEO, Managing Director, etc."
                style={{
                  width: '100%',
                  borderRadius: 10,
                  border: '1px solid #d1d5db',
                  padding: '10px 12px',
                  fontSize: 14,
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <FooterActions />
    </div>
  );
}


