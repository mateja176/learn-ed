import { FC, SVGProps } from 'react';

/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  const SVGComponent: FC<SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}
