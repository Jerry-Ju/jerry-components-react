import React from 'react';
import { getSkeletonSizeConfig } from './constants';
import type { SkeletonContextValue } from './types';

/** 向子组件传递 active 与 size 默认尺寸 */
export const SkeletonContext = React.createContext<SkeletonContextValue>({
  active: true,
  size: 'medium',
  sizeConfig: getSkeletonSizeConfig('medium'),
});

export const useSkeletonContext = (): SkeletonContextValue => React.useContext(SkeletonContext);
