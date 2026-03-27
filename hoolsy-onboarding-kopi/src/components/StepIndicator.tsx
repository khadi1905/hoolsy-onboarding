type StepItem = {
  step: number;
  label: string;
  active: boolean;
  completed?: boolean;
};

const STEP_ACTIVE_BG = 'rgba(28, 158, 189, 0.4)';
const STEP_ACTIVE_NUMBER_COLOR = '#0a0a0a';
const STEP_COMPLETED_COLOR = '#ffffff';
const STEP_INACTIVE_NUMBER_COLOR = '#6b7280';
const STEP_INACTIVE_TEXT = '#6b7280';

export default function StepIndicator({ items }: { items: StepItem[] }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: 40,
        gap: 32,
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
      }}
    >
      {items.map(({ step, label, active, completed }) => (
        <div
          key={step}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: active ? '#111827' : STEP_INACTIVE_TEXT,
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 999,
              background: active || completed ? STEP_ACTIVE_BG : 'transparent',
              border: active || completed ? 'none' : '2px solid #d1d5db',
              color: completed ? STEP_COMPLETED_COLOR : active ? STEP_ACTIVE_NUMBER_COLOR : STEP_INACTIVE_NUMBER_COLOR,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            {completed ? '✓' : step}
          </div>
          <span style={{ fontWeight: 500 }}>{label}</span>
        </div>
      ))}
    </div>
  );
}
