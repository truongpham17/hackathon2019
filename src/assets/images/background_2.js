import React from 'react';
import Svg, { Path, G, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg width={375} height={534} fill="none" {...props}>
    <Path
      d="M-48.732 246.947c-43.6-45.6-40.5-186.333-33.5-251 64.5-20.667 201.1-63.4 231.5-69 30.4-5.6 173.667 15 241.5 26 13.5 52.5 40.5 159.9 40.5 169.5v232l-40.5 179c-7.166-27-34.4-80.6-86-79-64.5 2-119.5 5-155.5-100s-143.5-50.5-198-107.5z"
      fill="#56C4F7"
    />
    <G filter="url(#prefix__filter0_d)">
      <Path
        d="M-14.775 159.318c-37.101-50.654-15.812-189.161-.53-252.084C51-104.813 191.284-129.306 221.998-130.899c30.713-1.591 169.369 37.29 234.858 56.93 6.516 53.567 19.236 163.07 17.992 172.546L444.793 327.57l-63.14 171.436c-3.572-27.578-23.493-84.009-74.6-89.111-63.885-6.376-118.528-10.536-140.438-118.836-21.909-108.299-135.013-68.424-181.39-131.741z"
        fill="#3ABAF8"
      />
    </G>
    <G filter="url(#prefix__filter1_d)">
      <Path
        d="M60.38 91.802C30.802 36.416 71.44-97.696 95.455-157.829c67.34-2.564 209.678-7 240.308-4.238 30.63 2.762 162.405 60.836 224.464 89.528-1.115 53.95-3.986 164.153-6.556 173.358l-62.094 222.452-86.719 160.801c.359-27.806-11.392-86.485-61.267-98.753-62.344-15.335-115.852-27.17-122.247-137.479C214.95 137.532 97.349 161.034 60.379 91.802z"
        fill="#0092F8"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
