open ReactNative
open ReactNativeSvg

@react.component
let make = (
  ~width: option<Style.size>=?,
  ~height: option<Style.size>=?,
  ~fill: option<string>=?,
  ~stroke: option<string>=?,
  ~style: option<Style.t>=?,
) =><Svg  viewBox="0 0 446 354" ?width ?height ?fill ?stroke ?style> <LinearGradient id="flashy-triangle-1-a" x1={10.535252->Style.pct} x2={100.->Style.pct} y1={41.570814->Style.pct} y2={62.384295->Style.pct}> <Stop offset={0.->Style.dp} stopColor="#ffeb6e"/> <Stop offset={0.724252546->Style.dp} stopColor="#ba417f"/> <Stop offset={1.->Style.dp} stopColor="#101d6d"/> </LinearGradient> <LinearGradient id="flashy-triangle-1-b" x1={100.->Style.pct} x2={5.334511->Style.pct} y1={62.047966->Style.pct} y2={38.250655->Style.pct}> <Stop offset={0.->Style.dp} stopColor="#88efff"/> <Stop offset={1.->Style.dp} stopColor="#00efff"/> </LinearGradient> <Path d="m-6.4802969 24.7326781 429.2565399 221.4864919-333.630083 118.062095z" fill="url(#flashy-triangle-1-a)" stroke="url(#flashy-triangle-1-b)" strokeWidth={8.170213->Style.dp} transform="translate(13 -15.974917)"/> </Svg>
;
