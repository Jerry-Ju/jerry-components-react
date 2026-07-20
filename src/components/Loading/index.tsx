import React from 'react';
import { CradleLoading } from './components/Cradle';
import { CubeLoading } from './components/Cube';
import { RingLoading } from './components/Ring';
import { ThreeBodyLoading } from './components/ThreeBody';
import type { CradleLoadingProps } from './components/Cradle/types';
import type { CubeLoadingProps } from './components/Cube/types';
import type { RingLoadingProps } from './components/Ring/types';
import type { ThreeBodyLoadingProps } from './components/ThreeBody/types';
import type { LoadingProps } from './types';

export const Loading: React.FC<LoadingProps> = (props) => {
  const { type = 'cradle', ...rest } = props;

  switch (type) {
    case 'cradle':
      return <CradleLoading {...(rest as CradleLoadingProps)} />;
    case 'cube':
      return <CubeLoading {...(rest as CubeLoadingProps)} />;
    case 'threeBody':
      return <ThreeBodyLoading {...(rest as ThreeBodyLoadingProps)} />;
    case 'ring':
      return <RingLoading {...(rest as RingLoadingProps)} />;
    default:
      return null;
  }
};

Loading.displayName = 'Loading';

export default Loading;
