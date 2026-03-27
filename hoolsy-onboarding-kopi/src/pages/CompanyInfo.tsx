import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../components/Logo';
import StepIndicator from '../components/StepIndicator';
import FooterActions from '../components/FooterActions';

const HOOLSY_TURQUOISE = '#1c9ebd';

export default function CompanyInfo() {
  const navigate = useNavigate();
  const [country, setCountry] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [showManualEntry, setShowManualEntry] = useState(false);

  const isUS = country === 'united-states';
  const isAutoLookupCountry = country !== '' && !isUS;

  const countryAddressMap: Record<string, string> = {
    norway: 'Storgata 123, 0182 Oslo, Norway',
    sweden: 'Storgatan 12, 114 55 Stockholm, Sweden',
    denmark: 'Vesterbrogade 45, 1620 Copenhagen, Denmark',
    finland: 'Mannerheimintie 22, 00100 Helsinki, Finland',
    'united-kingdom': '123 Oxford Street, London W1D 2HX, United Kingdom',
    germany: 'Friedrichstrasse 88, 10117 Berlin, Germany',
    france: '12 Rue de Rivoli, 75001 Paris, France',
    spain: 'Calle de Alcala 45, 28014 Madrid, Spain',
  };

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

      {/* Content */}
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
            { step: 1, label: 'Company & Contact', active: true },
            { step: 2, label: 'Representative', active: false },
            { step: 3, label: 'Products', active: false },
            { step: 4, label: 'Terms', active: false },
          ]}
        />

        {/* Tittel for bedriftsinformasjon */}
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
            Company Information
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
            Tell us about your company. This information will be used for verification.
          </p>
        </section>

        {/* Hovedkort */}
        <section
          style={{
            background: '#ffffff',
            borderRadius: 24,
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            padding: 32,
            border: '1px solid #e5e7eb',
          }}
        >
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
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
            {/* Landvalg */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#111827',
                  marginBottom: 8,
                }}
              >
                Country where business is registered <span style={{ color: '#DC2626' }}>*</span>
              </label>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <select
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setHasSearched(false);
                    setShowManualEntry(false);
                  }}
                  style={{
                    width: '100%',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    borderRadius: 10,
                    border: '1px solid #d1d5db',
                    padding: '12px 40px 12px 14px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    color: '#111827',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  <option value="norway">Norway</option>
                  <option value="sweden">Sweden</option>
                  <option value="denmark">Denmark</option>
                  <option value="finland">Finland</option>
                  <option value="united-kingdom">United Kingdom</option>
                  <option value="germany">Germany</option>
                  <option value="united-states">United States</option>
                  <option value="france">France</option>
                  <option value="spain">Spain</option>
                </select>
                <span
                  style={{
                    position: 'absolute',
                    right: 14,
                    pointerEvents: 'none',
                    fontSize: 16,
                    color: '#9ca3af',
                  }}
                >
                  ▾
                </span>
              </div>
            </div>

            {/* Bedriftsidentifikator */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'Inter, sans-serif',
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
                placeholder="Company ID"
                style={{
                  width: '100%',
                  borderRadius: 10,
                  border: '1px solid #d1d5db',
                  padding: '12px 14px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 14,
                  color: '#111827',
                }}
              />
            </div>
          </div>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 13,
              lineHeight: '20px',
              color: '#6b7280',
              margin: 0,
              marginBottom: 24,
            }}
          >
            VAT ID / Company registration number (varies by country)
          </p>

          {/* Finn bedrift-knapp - design: høyde 48px, radius 12px, Inter Medium 16px, hvit, ikon 16px */}
          <button
            type="button"
            style={{
              marginTop: 4,
              width: '100%',
              borderRadius: 12,
              border: 'none',
              height: 48,
              background: 'rgba(28, 158, 189, 0.4)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: 16,
              color: '#0a0a0a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              cursor: 'pointer',
              transition: 'all 160ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(28, 158, 189, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(28, 158, 189, 0.4)';
            }}
            onClick={() => {
              // Alle land utenom USA bruker automatisk oppslagsflyt
              if (isAutoLookupCountry) {
                setHasSearched(true);
                setShowManualEntry(false);
                return;
              }

              // USA → vis først varselboks, deretter manuell side
              if (isUS) {
                setHasSearched(true);
                setShowManualEntry(false);
                return;
              }

              // Andre land – ingen spesial-UI enda
              setHasSearched(false);
              setShowManualEntry(false);
            }}
          >
            <span style={{ fontSize: 16 }}>🔍</span>
            <span>Find company</span>
          </button>
        </section>

        {/* Bedrift funnet + ekstra info – alle ikke-USA-land etter "Finn bedrift" */}
        {hasSearched && isAutoLookupCountry && (
          <>
            {/* Kort: bedrift funnet */}
            <section
              style={{
                marginTop: 32,
                marginBottom: 40,
                background: '#F4FBFC',
                borderRadius: 24,
                border: '1px solid #CFE7EE',
                padding: 24,
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20,
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'rgba(28, 158, 189, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: 18, color: HOOLSY_TURQUOISE }}>✓</span>
                  </div>
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#111827',
                      }}
                    >
                      Company found!
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        color: '#6b7280',
                      }}
                    >
                      Confirm that the information below is correct
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close company details"
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: 18,
                    color: '#9ca3af',
                  }}
                >
                  ×
                </button>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 16,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 14,
                }}
              >
                {/* Juridisk navn */}
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: 16,
                    padding: 16,
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      textTransform: 'uppercase',
                      letterSpacing: 0.08,
                      color: '#6b7280',
                      marginBottom: 6,
                    }}
                  >
                    Legal name
                  </div>
                  <div style={{ fontWeight: 600, color: '#111827' }}>Demo Solutions AS</div>
                </div>

                {/* Registrert adresse */}
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: 16,
                    padding: 16,
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      textTransform: 'uppercase',
                      letterSpacing: 0.08,
                      color: '#6b7280',
                      marginBottom: 6,
                    }}
                  >
                    Registered address
                  </div>
                  <div style={{ fontWeight: 500, color: '#111827' }}>
                    {countryAddressMap[country] ?? 'Main Street 1, 0001 Capital City'}
                  </div>
                </div>

                {/* Registreringsstatus */}
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: 16,
                    padding: 16,
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      textTransform: 'uppercase',
                      letterSpacing: 0.08,
                      color: '#6b7280',
                      marginBottom: 6,
                    }}
                  >
                    Registration status
                  </div>
                  <div style={{ fontWeight: 600, color: '#16A34A' }}>Active</div>
                </div>

                {/* Organisasjonstype */}
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: 16,
                    padding: 16,
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      textTransform: 'uppercase',
                      letterSpacing: 0.08,
                      color: '#6b7280',
                      marginBottom: 6,
                    }}
                  >
                    Organization type
                  </div>
                  <div style={{ fontWeight: 500, color: '#111827' }}>Private Limited Company</div>
                </div>
              </div>
            </section>

            {/* Seksjoner for ekstra informasjon og kontaktperson */}
            <section
              style={{
                marginBottom: 32,
                background: '#F9FAFB',
                borderRadius: 24,
                padding: 24,
                border: '1px solid #e5e7eb',
                fontFamily: 'Inter, sans-serif',
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
                Additional information
              </h2>
              <div style={{ marginBottom: 24 }}>
                <label
                  style={{
                    display: 'block',
                    fontWeight: 500,
                    fontSize: 14,
                    color: '#111827',
                    marginBottom: 8,
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
                      placeholder="+47 123 45 678"
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
          </>
        )}

        {/* USA: varsel etter mislykket automatisk verifisering */}
        {hasSearched && isUS && !showManualEntry && (
          <section
            style={{
              marginTop: 32,
              marginBottom: 40,
              background: '#fff7e0',
              borderRadius: 20,
              padding: 24,
              border: '1px solid #f4d48b',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 18 }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 999,
                  background: '#f8e7b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  color: '#b98512',
                  flexShrink: 0,
                }}
              >
                !
              </div>
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#433024',
                  }}
                >
                  We could not automatically verify the company in this country.
                </h3>
                <p
                  style={{
                    margin: '6px 0 0 0',
                    fontSize: 14,
                    color: '#6b5a47',
                  }}
                >
                  You can still proceed by manually entering the information and uploading documentation.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <Link
                to="/registrer-steg/us-manual"
                style={{
                  textDecoration: 'none',
                }}
              >
                <button
                  type="button"
                  style={{
                    borderRadius: 999,
                    border: 'none',
                    padding: '10px 20px',
                    background: '#a5d9e3',
                    color: '#111827',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Continue manually
                </button>
              </Link>
              <button
                type="button"
                style={{
                  borderRadius: 999,
                  border: '1px solid #d1d5db',
                  padding: '10px 18px',
                  background: '#ffffff',
                  color: '#111827',
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
                onClick={() => setHasSearched(false)}
              >
                Try again
              </button>
            </div>
          </section>
        )}

        {/* Manuell bedriftsinformasjon for USA + kontaktperson */}
        {isUS && showManualEntry && (
          <>
            <section
              style={{
                marginBottom: 32,
                background: '#F9FAFB',
                borderRadius: 24,
                padding: 24,
                border: '1px solid #e5e7eb',
                fontFamily: 'Inter, sans-serif',
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
                  <div style={{ fontSize: 26, marginBottom: 8 }}>⬆️</div>
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

            {/* Kontaktperson-seksjon gjenbrukt for manuell USA-flyt */}
            <section
              style={{
                marginBottom: 32,
                background: '#F9FAFB',
                borderRadius: 24,
                padding: 24,
                border: '1px solid #e5e7eb',
                fontFamily: 'Inter, sans-serif',
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
          </>
        )}
      </main>

      <FooterActions
        onContinue={() => {
          if (isAutoLookupCountry && hasSearched) {
            navigate('/registrer-steg/representative');
          }
        }}
      />
    </div>
  );
}


