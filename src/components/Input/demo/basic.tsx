import React from 'react';
import { Input } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
    <Input placeholder="请输入内容" />
    <Input size="small" placeholder="小尺寸" prefix="@" />
    <Input size="large" placeholder="大尺寸" suffix=".com" />
  </div>
);
