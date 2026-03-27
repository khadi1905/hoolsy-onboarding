import { useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { SiShopify } from 'react-icons/si';
import { LoginRequest } from '../schema';

const LOGO_TEAL = '#298FA4';

export default function Login() {
  const location = useLocation();
  const fromSubmitted = (location.state as { fromSubmitted?: boolean } | null)?.fromSubmitted;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFieldErrors({});

    const result = LoginRequest.safeParse({ email, password });
    if (!result.success) {
      const flat = result.error.flatten();
      setFieldErrors({
        email: flat.fieldErrors.email?.[0],
        password: flat.fieldErrors.password?.[0],
      });
      return;
    }

    // TODO: Koble til POST /auth/login når API er klart
  }

  return (
    <div
      style={{
        background: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: 'Inter, sans-serif',
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '120px 16px 80px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 420,
          }}
        >
          {fromSubmitted && (
            <div
              style={{
                marginBottom: 32,
                textAlign: 'center',
              }}
            >
              <h1
                style={{
                  margin: 0,
                  marginBottom: 8,
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#111827',
                }}
              >
                Welcome back
              </h1>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: '#6b7280',
                }}
              >
                Log in to your supplier account
              </p>
            </div>
          )}

          <button
            type="button"
            style={{
              width: '100%',
              height: 52,
              borderRadius: 999,
              border: '1px solid #e5e7eb',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '0 18px',
              boxShadow: '0 10px 25px rgba(15, 23, 42, 0.08)',
              marginBottom: 12,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 999,
                marginRight: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ffffff',
              }}
            >
              <FcGoogle size={22} />
            </div>
            <span
              style={{
                fontWeight: 500,
                fontSize: 15,
                color: '#111827',
              }}
            >
              Log in with Google
            </span>
          </button>

          <button
            type="button"
            style={{
              width: '100%',
              height: 52,
              borderRadius: 999,
              border: '1px solid #e5e7eb',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '0 18px',
              boxShadow: '0 10px 25px rgba(15, 23, 42, 0.08)',
              marginBottom: 22,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 999,
                marginRight: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ffffff',
              }}
            >
              <SiShopify size={20} color="#5E8E3E" />
            </div>
            <span
              style={{
                fontWeight: 500,
                fontSize: 15,
                color: '#111827',
              }}
            >
              Log in with Shopify
            </span>
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              fontSize: 14,
              color: '#6b7280',
            }}
          >
            <span
              style={{
                flex: 1,
                height: 1,
                background: '#e5e7eb',
              }}
            />
            <span style={{ padding: '0 16px' }}>or</span>
            <span
              style={{
                flex: 1,
                height: 1,
                background: '#e5e7eb',
              }}
            />
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <label
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 500,
                color: '#111827',
                marginBottom: 6,
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              style={{
                width: '100%',
                height: 48,
                borderRadius: 12,
                border: fieldErrors.email ? '1px solid #ef4444' : '1px solid #e5e7eb',
                background: '#f9fafb',
                marginBottom: fieldErrors.email ? 4 : 12,
                padding: '0 12px',
                fontSize: 14,
                outline: 'none',
              }}
              placeholder="your@email.no"
            />
            {fieldErrors.email && (
              <p style={{ margin: '0 0 8px', fontSize: 12, color: '#b91c1c' }}>{fieldErrors.email}</p>
            )}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 4,
              }}
            >
              <label
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#111827',
                }}
              >
                Password
              </label>
              <button
                type="button"
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: 11,
                  color: '#6b7280',
                  cursor: 'pointer',
                }}
              >
                Forgot password?
              </button>
            </div>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              style={{
                width: '100%',
                height: 48,
                borderRadius: 12,
                border: fieldErrors.password ? '1px solid #ef4444' : '1px solid #e5e7eb',
                background: '#f9fafb',
                marginBottom: fieldErrors.password ? 4 : 16,
                padding: '0 12px',
                fontSize: 14,
                outline: 'none',
              }}
            />
            {fieldErrors.password && (
              <p style={{ margin: '0 0 8px', fontSize: 12, color: '#b91c1c' }}>{fieldErrors.password}</p>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                height: 48,
                borderRadius: 999,
                border: 'none',
                background: '#9BD6E5',
                fontSize: 15,
                fontWeight: 600,
                color: '#0a0a0a',
                cursor: 'pointer',
                marginTop: 4,
                boxShadow: '0 18px 40px rgba(15, 23, 42, 0.18)',
              }}
            >
              Log In
            </button>
          </form>

          <div
            style={{
              marginTop: 16,
              textAlign: 'center',
              fontSize: 14,
              color: '#111827',
            }}
          >
            <span style={{ fontWeight: 600 }}>Ny her?</span>{' '}
            <Link to="/registrer" style={{ fontWeight: 600, textDecoration: 'none', color: '#111827' }}>
              Opprett konto
            </Link>
          </div>
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

