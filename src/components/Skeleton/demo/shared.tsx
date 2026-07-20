import React from 'react';
import type { Size } from '@types';

const panelStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20,
  alignItems: 'center',
  marginBottom: 20,
  padding: '12px 16px',
  border: '1px solid var(--border-base)',
  borderRadius: 8,
  background: 'var(--bg-card)',
};

const previewStyle: React.CSSProperties = {
  padding: 16,
  border: '1px dashed var(--border-base)',
  borderRadius: 8,
  background: 'var(--bg-page)',
};

interface DemoSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/** 开关控件，模拟文档 playground 交互 */
export const DemoSwitch: React.FC<DemoSwitchProps> = ({ label, checked, onChange }) => (
  <label
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      userSelect: 'none',
    }}
  >
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      style={{
        width: 44,
        height: 22,
        borderRadius: 11,
        border: 'none',
        padding: 0,
        background: checked ? 'var(--color-primary)' : 'var(--border-base)',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background 0.2s ease',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 2,
          left: checked ? 24 : 2,
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: '#fff',
          transition: 'left 0.2s ease',
        }}
      />
    </button>
    <span style={{ fontSize: 14, color: 'var(--text-primary)' }}>{label}</span>
  </label>
);

interface DemoSegmentOption<T extends string> {
  label: string;
  value: T;
}

interface DemoSegmentProps<T extends string> {
  label: string;
  value: T;
  options: DemoSegmentOption<T>[];
  onChange: (value: T) => void;
}

/** 分段选择器，用于 size / shape 等选项 */
export function DemoSegment<T extends string>({
  label,
  value,
  options,
  onChange,
}: DemoSegmentProps<T>) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{label}</span>
      <div
        style={{
          display: 'inline-flex',
          padding: 2,
          borderRadius: 6,
          background: 'var(--bg-weak)',
          border: '1px solid var(--border-base)',
        }}
      >
        {options.map((option) => {
          const active = option.value === value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              style={{
                border: 'none',
                borderRadius: 4,
                padding: '4px 12px',
                fontSize: 13,
                cursor: 'pointer',
                background: active ? 'var(--bg-page)' : 'transparent',
                color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                boxShadow: active ? '0 1px 2px rgba(0, 0, 0, 0.06)' : 'none',
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface DemoPlaygroundProps {
  controls: React.ReactNode;
  children: React.ReactNode;
}

/** 控制栏 + 预览区布局 */
export const DemoPlayground: React.FC<DemoPlaygroundProps> = ({ controls, children }) => (
  <div>
    <div style={panelStyle}>{controls}</div>
    <div style={previewStyle}>{children}</div>
  </div>
);

export const sizeOptions: DemoSegmentOption<Size>[] = [
  { label: '小', value: 'small' },
  { label: '中', value: 'medium' },
  { label: '大', value: 'large' },
];

export const buttonShapeOptions = [
  { label: '默认', value: 'default' },
  { label: '方形', value: 'square' },
  { label: '圆角', value: 'round' },
  { label: '圆形', value: 'circle' },
] as const;

export const avatarShapeOptions = [
  { label: '方形', value: 'square' },
  { label: '圆形', value: 'circle' },
] as const;
