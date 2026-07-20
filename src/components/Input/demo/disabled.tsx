import React from 'react';
import { Input } from 'jerry-components-react';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
    <Input disabled placeholder="禁用状态" defaultValue="不可编辑" />
    <Input readOnly defaultValue="只读状态" />
  </div>
);
