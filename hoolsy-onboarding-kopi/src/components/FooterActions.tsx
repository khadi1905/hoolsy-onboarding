type FooterActionsProps = {
  onBack?: () => void;
  onContinue?: () => void;
  continueLabel?: string;
  showSkip?: boolean;
  skipLabel?: string;
};

export default function FooterActions({
  onBack,
  onContinue,
  continueLabel = 'Continue →',
  showSkip = true,
  skipLabel = 'Skip to end',
}: FooterActionsProps) {
  return (
    <footer
      style={{
        borderTop: '1px solid #e5e7eb',
        padding: '16px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <button
        type="button"
        style={{
          borderRadius: 16,
          border: '2px solid #e5e7eb',
          padding: '0 18px',
          height: 48,
          background: '#ffffff',
          fontSize: 14,
          fontWeight: 500,
          color: '#364153',
          cursor: 'pointer',
        }}
        onClick={onBack}
      >
        ← Back
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: '#6A7282',
          }}
        >
          Save draft
        </span>
        <button
          type="button"
          style={{
            borderRadius: 16,
            border: 'none',
            padding: '0 22px',
            height: 44,
            background: 'rgba(28, 158, 189, 0.4)',
            fontSize: 14,
            fontWeight: 600,
            color: '#0a0a0a',
            cursor: 'pointer',
          }}
          onClick={onContinue}
        >
          {continueLabel}
        </button>
        {showSkip && (
          <button
            type="button"
            style={{
              borderRadius: 16,
              border: 'none',
              padding: '0 22px',
              height: 44,
              background: 'rgba(28, 158, 189, 0.4)',
              fontSize: 14,
              fontWeight: 600,
              color: '#0a0a0a',
              cursor: 'pointer',
            }}
          >
            {skipLabel}
          </button>
        )}
      </div>
    </footer>
  );
}
