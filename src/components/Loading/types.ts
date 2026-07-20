import type { BounceLoadingProps } from './components/Bounce/types';
import type { CradleLoadingProps } from './components/Cradle/types';
import type { CubeLoadingProps } from './components/Cube/types';
import type { RingLoadingProps } from './components/Ring/types';
import type { ThreeBodyLoadingProps } from './components/ThreeBody/types';

/** 加载动画类型 */
export type LoadingType = 'cradle' | 'cube' | 'threeBody' | 'ring' | 'bounce';

export type LoadingProps =
  | ({ type?: 'cradle' } & CradleLoadingProps)
  | ({ type: 'cube' } & CubeLoadingProps)
  | ({ type: 'threeBody' } & ThreeBodyLoadingProps)
  | ({ type: 'ring' } & RingLoadingProps)
  | ({ type: 'bounce' } & BounceLoadingProps);
