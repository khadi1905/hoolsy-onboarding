const LOGO_TEAL = '#298FA4';

export default function Logo() {
  return (
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
