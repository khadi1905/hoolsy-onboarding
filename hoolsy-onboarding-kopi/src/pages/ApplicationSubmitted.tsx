import { useNavigate } from 'react-router-dom';

const HOOLSY_TURQUOISE = '#1c9ebd';
const LOGO_TEAL = '#298FA4';

export default function ApplicationSubmitted() {
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

      <main
        style={{
          flex: 1,
          width: '100%',
          maxWidth: 940,
          margin: '0 auto',
          padding: '96px 32px 72px',
          boxSizing: 'border-box',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <section style={{ marginBottom: 40 }}>
          <h1
            style={{
              margin: 0,
              marginBottom: 8,
              fontSize: 36,
              fontWeight: 700,
              color: '#111827',
            }}
          >
            Application submitted!
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              color: '#9ca3af',
            }}
          >
            We have received your information.
          </p>
        </section>

        <section
          style={{
            maxWidth: 720,
            margin: '0 auto 64px',
            background: '#ffffff',
            borderRadius: 24,
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.08)',
            padding: '22px 28px',
            border: '1px solid #eef2ff',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 999,
                background: '#e0f2fe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <MailIcon />
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  marginBottom: 4,
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#111827',
                }}
              >
                A confirmation email has been sent to <span style={{ fontWeight: 600 }}>your registered email</span>.
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: '#4b5563',
                  lineHeight: '22px',
                }}
              >
                Follow the link in the email to complete identity verification and create login credentials.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2
            style={{
              margin: 0,
              marginBottom: 24,
              fontSize: 24,
              fontWeight: 700,
              color: '#111827',
            }}
          >
            What happens next?
          </h2>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <InfoCard
              title="Identity verification via eID"
              body="Provides immediate access to the vendor dashboard."
              icon="shield"
            />
            <InfoCard
              title="Manual document verification"
              body="If documents are uploaded manually, the application will be reviewed within 24–48 hours. You will receive an email when the account is approved."
              icon="document"
            />
          </div>
        </section>

        <section
          style={{
            maxWidth: 640,
            margin: '0 auto 56px',
            background: '#ffffff',
            borderRadius: 24,
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.08)',
            padding: 24,
            border: '1px solid #eef2ff',
            textAlign: 'left',
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
            Questions?
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: 8,
              fontSize: 14,
              color: '#6b7280',
            }}
          >
            Contact our vendor support team
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <ContactRow
              icon="mail"
              label="Email"
              value="support@hoolsy.no"
            />
            <ContactRow
              icon="phone"
              label="Phone"
              value="+47 xxx xx xxx"
            />
            <ContactRow
              icon="clock"
              label="Business hours"
              value="Monday–Friday: 09:00–16:00"
            />
          </div>
        </section>

        <button
          type="button"
          style={{
            marginTop: 0,
            borderRadius: 999,
            border: 'none',
            padding: '0 48px',
            height: 48,
            background: '#9bd6e5',
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            fontWeight: 600,
            color: '#0a0a0a',
            cursor: 'pointer',
            boxShadow: '0 20px 44px rgba(15, 23, 42, 0.25)',
            transition: 'background 160ms ease, transform 160ms ease, box-shadow 160ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#8acfe0';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 18px 40px rgba(15, 23, 42, 0.23)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#9bd6e5';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 44px rgba(15, 23, 42, 0.25)';
          }}
          onClick={() => navigate('/login', { state: { fromSubmitted: true } })}
        >
          Go to login
        </button>
      </main>
    </div>
  );
}

function InfoCard({ title, body, icon }: { title: string; body: string; icon: 'shield' | 'document' }) {
  return (
    <div
      style={{
        width: 280,
        background: '#ffffff',
        borderRadius: 24,
        boxShadow: '0 24px 60px rgba(15, 23, 42, 0.06)',
        padding: 22,
        border: '1px solid #eef2ff',
        textAlign: 'left',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 999,
          background: '#e0f2fe',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 14,
        }}
      >
        {icon === 'shield' ? <ShieldIcon /> : <DocumentIcon />}
      </div>
      <h3
        style={{
          margin: 0,
          marginBottom: 6,
          fontSize: 16,
          fontWeight: 600,
          color: '#111827',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          fontSize: 14,
          color: '#4b5563',
        }}
      >
        {body}
      </p>
    </div>
  );
}

function ContactRow({ icon, label, value }: { icon: 'mail' | 'phone' | 'clock'; label: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 14,
        color: '#4b5563',
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 999,
          background: '#e0f2fe',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon === 'mail' && <MailIcon />}
        {icon === 'phone' && <PhoneIcon />}
        {icon === 'clock' && <ClockIcon />}
      </div>
      <div>
        <div
          style={{
            fontSize: 13,
            color: '#6b7280',
            marginBottom: 2,
          }}
        >
          {label}
        </div>
        <div>{value}</div>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="14" height="10" rx="2" stroke="#111827" strokeWidth="1.6" />
      <path d="M4 6L10 10L16 6" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 2.5L5 4.5V9.5C5 12.5 7 15.2 10 16.5C13 15.2 15 12.5 15 9.5V4.5L10 2.5Z"
        stroke="#111827"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 9.5L9.4 11L12 8.5" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="3" width="8" height="14" rx="1.5" stroke="#111827" strokeWidth="1.6" />
      <path d="M8 7H10.5" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 10H11" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 13H10" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 3.5L5.5 4C5 9 9 13 14 14.5L14.5 13L13 11.5L14.5 9.5L16.5 10L17 8.5C14.5 6.5 12 4 7 3.5Z"
        stroke="#111827"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="6.5" stroke="#111827" strokeWidth="1.6" />
      <path d="M10 7V10L12 11" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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

