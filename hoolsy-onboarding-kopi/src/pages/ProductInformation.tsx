import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../components/Logo';
import StepIndicator from '../components/StepIndicator';
import FooterActions from '../components/FooterActions';

const HOOLSY_TURQUOISE = '#1c9ebd';

export default function ProductInformation() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [integrationMethod, setIntegrationMethod] = useState<'platform' | 'csv' | 'api' | ''>('platform');

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
            { step: 3, label: 'Products', active: true, completed: false },
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
            Product Information
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
            What will you sell on Hoolsy?
          </p>
        </section>

        <section
          style={{
            background: '#ffffff',
            borderRadius: 24,
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            padding: 32,
            border: '1px solid #e5e7eb',
            marginBottom: 32,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: 8,
              fontSize: 16,
              fontWeight: 600,
              color: '#111827',
            }}
          >
            Product categories <span style={{ color: '#DC2626' }}>*</span>
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: 16,
              fontSize: 13,
              color: '#6b7280',
            }}
          >
            Select all that apply
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
              marginBottom: 24,
            }}
          >
            {[
              'Electronics',
              'Fashion & Apparel',
              'Home & Garden',
              'Sports & Outdoors',
              'Health & Beauty',
              'Food & Beverage',
              'Books',
              'Other',
            ].map((label) => {
              const selected = selectedCategories.includes(label);
              return (
                <button
                  key={label}
                  type="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 12,
                    borderRadius: 999,
                    padding: '10px 18px',
                    border: selected ? '1px solid #7CC0D2' : '1px solid #e5e7eb',
                    background: selected ? '#9BD6E5' : '#ffffff',
                    cursor: 'pointer',
                    fontSize: 14,
                    color: '#111827',
                  }}
                  onClick={() => {
                    setSelectedCategories((prev) =>
                      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label],
                    );
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '999px',
                      border: selected ? '2px solid #ffffff' : '2px solid #d1d5db',
                      background: selected ? '#ffffff' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {selected && (
                      <span
                        style={{
                          fontSize: 14,
                          color: '#0a0a0a',
                        }}
                      >
                        ✓
                      </span>
                    )}
                  </div>
                  <span style={{ fontWeight: 600 }}>{label}</span>
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: 8 }}>
            <label
              style={{
                display: 'block',
                fontWeight: 500,
                fontSize: 14,
                color: '#111827',
                marginBottom: 6,
              }}
            >
              Estimated number of products per month <span style={{ color: '#DC2626' }}>*</span>
            </label>
            <div style={{ position: 'relative', maxWidth: 360 }}>
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
                  Select range
                </option>
                <option value="1-50">1–50 products</option>
                <option value="51-200">51–200 products</option>
                <option value="201-1000">201–1000 products</option>
                <option value="1000+">More than 1000 products</option>
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
        </section>

        <section
          style={{
            background: '#ffffff',
            borderRadius: 24,
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            padding: 32,
            border: '1px solid #e5e7eb',
            marginBottom: 24,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: 8,
              fontSize: 18,
              fontWeight: 600,
              color: '#111827',
            }}
          >
            Product Integration
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: 20,
              fontSize: 14,
              color: '#6b7280',
            }}
          >
            Choose how you want to add your products to Hoolsy Marketplace.
          </p>

          <button
            type="button"
            onClick={() => setIntegrationMethod('platform')}
            style={{
              width: '100%',
              textAlign: 'left',
              borderRadius: 24,
              border:
                integrationMethod === 'platform' ? '2px solid #7CC0D2' : '1px solid rgba(148, 163, 184, 0.4)',
              background: integrationMethod === 'platform' ? '#F5FBFD' : '#ffffff',
              padding: 20,
              marginBottom: 16,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: '999px',
                  border:
                    integrationMethod === 'platform' ? `2px solid ${HOOLSY_TURQUOISE}` : '2px solid #d1d5db',
                  marginTop: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                }}
              >
                {integrationMethod === 'platform' && (
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '999px',
                      background: HOOLSY_TURQUOISE,
                    }}
                  />
                )}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, fontSize: 16, color: '#111827' }}>Platform Integration</span>
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
                    marginBottom: 12,
                    fontSize: 14,
                    color: '#6b7280',
                  }}
                >
                  Connect your existing e-commerce platform (Shopify, WooCommerce, etc.) and import products
                  automatically via OAuth.
                </p>

                <div
                  style={{
                    borderRadius: 16,
                    border: '1px solid #E5E7EB',
                    background: '#ffffff',
                    padding: 14,
                    marginBottom: 12,
                    fontSize: 13,
                    color: '#111827',
                  }}
                >
                  {[
                    'Automatic product sync',
                    'Real-time inventory updates',
                    'No manual data entry',
                    'OAuth secure connection',
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginBottom: 4,
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
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    fontSize: 12,
                    color: '#6b7280',
                  }}
                >
                  <span style={{ marginRight: 4 }}>Supported platforms:</span>
                  {['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'].map((name) => (
                    <span
                      key={name}
                      style={{
                        borderRadius: 999,
                        border: '1px solid #E5E7EB',
                        padding: '4px 10px',
                        background: '#ffffff',
                        fontSize: 12,
                        color: '#111827',
                      }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setIntegrationMethod('csv')}
            style={{
              width: '100%',
              textAlign: 'left',
              borderRadius: 20,
              border:
                integrationMethod === 'csv' ? '2px solid #7CC0D2' : '1px solid rgba(148, 163, 184, 0.4)',
              background: integrationMethod === 'csv' ? '#F5FBFD' : '#ffffff',
              padding: 18,
              marginBottom: 12,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: '999px',
                  border:
                    integrationMethod === 'csv' ? `2px solid ${HOOLSY_TURQUOISE}` : '2px solid #d1d5db',
                  marginTop: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                }}
              >
                {integrationMethod === 'csv' && (
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '999px',
                      background: HOOLSY_TURQUOISE,
                    }}
                  />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, fontSize: 16, color: '#111827' }}>CSV/Excel File Upload</span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 999,
                      background: '#ECFDF3',
                      color: '#15803D',
                    }}
                  >
                    Easy
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#6b7280',
                  }}
                >
                  Upload a spreadsheet with your product catalog. We&apos;ll validate and import your products.
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setIntegrationMethod('api')}
            style={{
              width: '100%',
              textAlign: 'left',
              borderRadius: 20,
              border:
                integrationMethod === 'api' ? '2px solid #7CC0D2' : '1px solid rgba(148, 163, 184, 0.4)',
              background: integrationMethod === 'api' ? '#F5FBFD' : '#ffffff',
              padding: 18,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: '999px',
                  border:
                    integrationMethod === 'api' ? `2px solid ${HOOLSY_TURQUOISE}` : '2px solid #d1d5db',
                  marginTop: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                }}
              >
                {integrationMethod === 'api' && (
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '999px',
                      background: HOOLSY_TURQUOISE,
                    }}
                  />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, fontSize: 16, color: '#111827' }}>API Integration</span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 999,
                      background: '#EEF2FF',
                      color: '#4338CA',
                    }}
                  >
                    Advanced
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#6b7280',
                  }}
                >
                  Connect your system directly using REST APIs. Perfect for companies with development teams.
                </p>
              </div>
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
              color: '#111827',
            }}
          >
            What happens next?
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              color: '#111827',
            }}
          >
            After your vendor account is approved, you&apos;ll receive access to the vendor dashboard where you can set
            up your chosen product integration method and start importing your catalog.
          </p>
        </section>
      </main>

      <FooterActions onBack={() => navigate('/registrer-steg/representative-verified')} onContinue={() => navigate('/registrer-steg/terms')} />
    </div>
  );
}


