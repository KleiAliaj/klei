open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg  viewBox="0 0 200 176" ?width ?height ?fill ?stroke ?style> <LinearGradient id="flashy-triangle-2-a" x1={23.949918->Style.pct} x2={89.260976->Style.pct} y1={33.039437->Style.pct} y2={73.030917->Style.pct}> <Stop offset={0.->Style.dp} stopColor="#fecf24"/> <Stop offset={1.->Style.dp} stopColor="#fd12c9"/> </LinearGradient> <LinearGradient id="flashy-triangle-2-b" x1={50.->Style.pct} x2={17.852426->Style.pct} y1={89.200201->Style.pct} y2={-4.944995->Style.pct}> <Stop offset={0.->Style.dp} stopColor="#00a7ff"/> <Stop offset={1.->Style.dp} stopColor="#2ce3cc"/> </LinearGradient> <Path d="m1278.01616 1996.61873 140.82285 128.87072-155.3046 46.39168z" fill="url(#flashy-triangle-2-a)" fillRule=#evenodd stroke="url(#flashy-triangle-2-b)" strokeWidth={8.170213->Style.dp} transform="matrix(.89100652 -.4539905 .4539905 .89100652 -2037.923358 -1192.577195)"/> </Svg>
;
