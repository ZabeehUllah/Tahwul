import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="100" height="40" viewBox="0 0 100 40" fill="none"  {...props}>
    <rect width="100" height="40" fill="url(#pattern0_300_90)" />
    <defs>
      <pattern id="pattern0_300_90" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_300_90" transform="matrix(0.000892857 0 0 0.00223214 -0.00178571 0)" />
      </pattern>
    </defs>
  </svg>

);
export default Logo;