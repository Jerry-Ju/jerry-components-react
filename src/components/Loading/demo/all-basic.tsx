import React from 'react';
import { Loading } from 'jerry-components-react';

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 40,
  alignItems: 'center',
  marginBottom: 32,
};

const itemStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  color: 'var(--jerry-text-secondary, #666)',
};

export default () => (
  <div>
    <div style={rowStyle}>
      <div style={itemStyle}>
        <Loading />
        <span style={labelStyle}>cradle</span>
      </div>
      <div style={itemStyle}>
        <Loading type="cube" />
        <span style={labelStyle}>cube</span>
      </div>
      <div style={itemStyle}>
        <Loading type="threeBody" />
        <span style={labelStyle}>threeBody</span>
      </div>
      <div style={itemStyle}>
        <Loading type="ring" />
        <span style={labelStyle}>ring</span>
      </div>
    </div>

    <div style={rowStyle}>
      <div style={itemStyle}>
        <Loading type="bounce" />
        <span style={labelStyle}>bounce</span>
      </div>
      <div style={itemStyle}>
        <Loading type="spinner" />
        <span style={labelStyle}>spinner</span>
      </div>
    </div>

    <div style={rowStyle}>
      <div style={itemStyle}>
        <Loading type="ecg" />
        <span style={labelStyle}>ecg</span>
      </div>
    </div>
  </div>
);
